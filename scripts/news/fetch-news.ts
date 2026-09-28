import { createHash } from "node:crypto"
import { access, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import Parser from "rss-parser"
import { feeds, type FeedSource } from "./feeds.ts"

interface NewsItem {
  readonly id: string
  readonly title: string
  readonly url: string
  readonly source: string
  readonly language: FeedSource["language"]
  readonly themes: readonly string[]
  readonly publishedAt: string
}

interface NewsFile {
  readonly generatedAt: string
  readonly items: readonly NewsItem[]
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(scriptDir, "../../public/data/news.json")
const maxItemsPerFeed = 10
const maxItemsTotal = 100
const maxAgeInDays = 30
const millisecondsPerDay = 86_400_000

const parser = new Parser({
  timeout: 10_000,
  headers: {
    "User-Agent": "florent-portfolio-news/1.0 (+https://floshooter.github.io/portfolio-bernier-florent/)",
  },
})

function hashUrl(url: string): string {
  return createHash("sha1").update(url).digest("hex").slice(0, 12)
}

function toIsoDate(value: string | undefined): string | null {
  if (value === undefined) {
    return null
  }
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? null : new Date(timestamp).toISOString()
}

function isHttpUrl(value: string): boolean {
  try {
    const { protocol } = new URL(value)
    return protocol === "https:" || protocol === "http:"
  } catch {
    return false
  }
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function fetchFeed(feed: FeedSource, minTimestamp: number): Promise<NewsItem[]> {
  const result = await parser.parseURL(feed.url)
  const items: NewsItem[] = []
  for (const entry of result.items) {
    const title = entry.title?.trim()
    const url = entry.link?.trim()
    const publishedAt = toIsoDate(entry.isoDate ?? entry.pubDate)
    if (title === undefined || title.length === 0 || url === undefined || !isHttpUrl(url) || publishedAt === null) {
      continue
    }
    if (Date.parse(publishedAt) < minTimestamp) {
      continue
    }
    items.push({
      id: hashUrl(url),
      title,
      url,
      source: feed.name,
      language: feed.language,
      themes: [...feed.themes],
      publishedAt,
    })
    if (items.length >= maxItemsPerFeed) {
      break
    }
  }
  return items
}

async function main(): Promise<void> {
  const minTimestamp = Date.now() - maxAgeInDays * millisecondsPerDay
  const results = await Promise.allSettled(feeds.map((feed) => fetchFeed(feed, minTimestamp)))
  const itemsByUrl = new Map<string, NewsItem>()

  results.forEach((result, index) => {
    const feed = feeds[index]
    if (feed === undefined) {
      return
    }
    if (result.status === "rejected") {
      const reason: unknown = result.reason
      console.warn(
        `[news] Échec du flux "${feed.name}" (${feed.url}) :`,
        reason instanceof Error ? reason.message : reason,
      )
      return
    }
    console.log(`[news] ${feed.name} : ${String(result.value.length)} article(s)`)
    for (const item of result.value) {
      const existing = itemsByUrl.get(item.url)
      itemsByUrl.set(
        item.url,
        existing === undefined ? item : { ...existing, themes: [...new Set([...existing.themes, ...item.themes])] },
      )
    }
  })

  const items = [...itemsByUrl.values()]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, maxItemsTotal)

  if (items.length === 0 && (await fileExists(outputPath))) {
    console.warn("[news] Aucun article récupéré, le fichier existant est conservé")
    return
  }

  const file: NewsFile = { generatedAt: new Date().toISOString(), items }
  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, `${JSON.stringify(file, null, 2)}\n`, "utf8")
  console.log(`[news] ${String(items.length)} article(s) écrits dans ${outputPath}`)
}

main().catch((error: unknown) => {
  console.error("[news] Erreur inattendue, fichier d'actualités non mis à jour", error)
})