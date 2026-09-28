import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"
import { generateOgImage, type OgImageData } from "./og-image.ts"

type HeadTag =
  | { readonly tag: "title"; readonly content: string }
  | { readonly tag: "meta"; readonly attribute: string; readonly key: string; readonly content: string }
  | { readonly tag: "link"; readonly rel: string; readonly href: string; readonly hreflang?: string }

interface RouteMeta {
  readonly language: string
  readonly path: string
  readonly url: string
  readonly noIndex: boolean
  readonly alternates: readonly { readonly language: string; readonly url: string }[]
}

interface SeoModule {
  readonly getAllRouteMeta: () => readonly RouteMeta[]
  readonly getRouteMeta: (language: string, pathname: string) => RouteMeta
  readonly buildHeadTags: (meta: RouteMeta) => readonly HeadTag[]
  readonly getOgImageData: () => OgImageData
}

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const distDir = path.join(rootDir, "dist")
const seoBlockPattern = /<!--seo:start-->[\s\S]*?<!--seo:end-->/
const htmlLangPattern = /<html lang="[^"]*">/

function isSeoModule(value: unknown): value is SeoModule {
  return (
    typeof value === "object" &&
    value !== null &&
    "getAllRouteMeta" in value &&
    typeof value.getAllRouteMeta === "function" &&
    "getRouteMeta" in value &&
    typeof value.getRouteMeta === "function" &&
    "buildHeadTags" in value &&
    typeof value.buildHeadTags === "function" &&
    "getOgImageData" in value &&
    typeof value.getOgImageData === "function"
  )
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function renderHeadTag(tag: HeadTag): string {
  switch (tag.tag) {
    case "title":
      return `<title>${escapeHtml(tag.content)}</title>`
    case "meta":
      return `<meta ${tag.attribute}="${escapeHtml(tag.key)}" content="${escapeHtml(tag.content)}" data-seo />`
    case "link": {
      const hreflang = tag.hreflang === undefined ? "" : ` hreflang="${escapeHtml(tag.hreflang)}"`
      return `<link rel="${escapeHtml(tag.rel)}" href="${escapeHtml(tag.href)}"${hreflang} data-seo />`
    }
  }
}

function injectHead(template: string, language: string, tags: readonly HeadTag[]): string {
  const block = ["<!--seo:start-->", ...tags.map(renderHeadTag), "<!--seo:end-->"].join("\n    ")
  return template.replace(seoBlockPattern, block).replace(htmlLangPattern, `<html lang="${escapeHtml(language)}">`)
}

function outputPathFor(pathname: string): string {
  const segments = pathname.split("/").filter((segment) => segment.length > 0)
  return path.join(distDir, ...segments, "index.html")
}

function buildSitemap(routes: readonly RouteMeta[]): string {
  const lastModified = new Date().toISOString().slice(0, 10)
  const entries = routes
    .filter((route) => !route.noIndex)
    .map((route) => {
      const alternates = route.alternates
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeHtml(alternate.language)}" href="${escapeHtml(alternate.url)}" />`,
        )
        .join("\n")
      return `  <url>\n    <loc>${escapeHtml(route.url)}</loc>\n    <lastmod>${lastModified}</lastmod>\n${alternates}\n  </url>`
    })
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n")
}

async function loadSeoModule(): Promise<SeoModule> {
  const server = await createServer({
    root: rootDir,
    logLevel: "error",
    appType: "custom",
    server: { middlewareMode: true, hmr: false },
  })
  try {
    const loaded = await server.ssrLoadModule("/src/seo/route-meta.ts")
    if (!isSeoModule(loaded)) {
      throw new Error("Le module src/seo/route-meta.ts n'expose pas les fonctions attendues")
    }
    return loaded
  } finally {
    await server.close()
  }
}

async function main(): Promise<void> {
  const template = await readFile(path.join(distDir, "index.html"), "utf8")
  if (!seoBlockPattern.test(template)) {
    throw new Error("Bloc <!--seo:start--> … <!--seo:end--> introuvable dans dist/index.html")
  }

  const seo = await loadSeoModule()
  const routes = seo.getAllRouteMeta()

  for (const route of routes) {
    const outputPath = outputPathFor(route.path)
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, injectHead(template, route.language, seo.buildHeadTags(route)), "utf8")
  }

  const rootMeta = seo.getRouteMeta("fr", "/fr")
  await writeFile(path.join(distDir, "index.html"), injectHead(template, "fr", seo.buildHeadTags(rootMeta)), "utf8")
  await writeFile(path.join(distDir, "sitemap.xml"), buildSitemap(routes), "utf8")
  await generateOgImage(seo.getOgImageData(), { rootDir, outputPath: path.join(distDir, "og-image.png") })

  console.log(`[seo] ${String(routes.length)} pages pré-rendues, sitemap.xml et og-image.png générés`)
}

main().catch((error: unknown) => {
  console.error("[seo] Échec du pré-rendu", error)
  process.exitCode = 1
})