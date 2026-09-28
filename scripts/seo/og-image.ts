import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { Resvg } from "@resvg/resvg-js"
import satori from "satori"

export interface OgImageData {
  readonly name: string
  readonly title: string
  readonly tagline: string
  readonly photo: string
  readonly host: string
}

interface GenerateOptions {
  readonly rootDir: string
  readonly outputPath: string
}

interface OgNodeProps {
  readonly style?: Readonly<Record<string, string | number>>
  readonly children?: string | readonly OgNode[]
  readonly src?: string
  readonly width?: number
  readonly height?: number
}

interface OgNode {
  readonly type: string
  readonly key: null
  readonly props: OgNodeProps
}

const imageWidth = 1200
const imageHeight = 630
const photoSize = 180

const mimeTypes: Readonly<Record<string, string>> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
}

function node(type: string, props: OgNodeProps): OgNode {
  return { type, key: null, props }
}

async function loadFont(rootDir: string, weight: 400 | 700): Promise<Buffer> {
  return readFile(
    path.join(rootDir, "node_modules/@fontsource/geist/files", `geist-latin-${String(weight)}-normal.woff`),
  )
}

async function loadPhoto(rootDir: string, photo: string): Promise<string | null> {
  const mimeType = mimeTypes[path.extname(photo).toLowerCase()]
  if (mimeType === undefined) {
    console.warn(`[seo] Format de photo non pris en charge pour l'aperçu (PNG ou JPG attendu) : ${photo}`)
    return null
  }
  try {
    const buffer = await readFile(path.join(rootDir, "public", photo))
    return `data:${mimeType};base64,${buffer.toString("base64")}`
  } catch (error: unknown) {
    console.warn(`[seo] Photo introuvable pour l'aperçu : ${photo}`, error)
    return null
  }
}

export async function generateOgImage(data: OgImageData, options: GenerateOptions): Promise<void> {
  const [regularFont, boldFont, photo] = await Promise.all([
    loadFont(options.rootDir, 400),
    loadFont(options.rootDir, 700),
    loadPhoto(options.rootDir, data.photo),
  ])

  const identity: OgNode[] = []
  if (photo !== null) {
    identity.push(
      node("img", {
        src: photo,
        width: photoSize,
        height: photoSize,
        style: { borderRadius: 9999, border: "6px solid rgba(255,255,255,0.35)", objectFit: "cover" },
      }),
    )
  }
  identity.push(
    node("div", {
      style: { display: "flex", flexDirection: "column", gap: 8 },
      children: [
        node("div", { style: { fontSize: 76, fontWeight: 700, letterSpacing: -2 }, children: data.name }),
        node("div", { style: { fontSize: 38, color: "#bfdbfe" }, children: data.title }),
      ],
    }),
  )

  const tree = node("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 80,
      color: "#ffffff",
      fontFamily: "Geist",
      backgroundColor: "#09090b",
      backgroundImage: "linear-gradient(135deg, #09090b 0%, #1e3a8a 55%, #0891b2 100%)",
    },
    children: [
      node("div", { style: { display: "flex", alignItems: "center", gap: 48 }, children: identity }),
      node("div", {
        style: { display: "flex", fontSize: 30, lineHeight: 1.4, color: "rgba(255,255,255,0.85)", maxWidth: 1000 },
        children: data.tagline,
      }),
      node("div", { style: { display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }, children: data.host }),
    ],
  })

  const svg = await satori(tree, {
    width: imageWidth,
    height: imageHeight,
    fonts: [
      { name: "Geist", data: regularFont, weight: 400, style: "normal" },
      { name: "Geist", data: boldFont, weight: 700, style: "normal" },
    ],
  })

  const png = new Resvg(svg, { fitTo: { mode: "width", value: imageWidth } }).render().asPng()
  await writeFile(options.outputPath, png)
}