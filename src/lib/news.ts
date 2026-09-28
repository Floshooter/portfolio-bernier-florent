import { isSupportedLanguage, type Language } from "@/i18n/config"
import { themes, type ThemeId } from "@/content/watch/themes"
import { assetPath } from "@/lib/assets"

export interface NewsItem {
  readonly id: string
  readonly title: string
  readonly url: string
  readonly source: string
  readonly language: Language
  readonly themes: readonly string[]
  readonly publishedAt: string
}

export interface NewsFile {
  readonly generatedAt: string
  readonly items: readonly NewsItem[]
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function isValidDate(value: unknown): value is string {
  return typeof value === "string" && !Number.isNaN(Date.parse(value))
}

function isHttpUrl(value: unknown): value is string {
  if (typeof value !== "string") {
    return false
  }
  try {
    const { protocol } = new URL(value)
    return protocol === "https:" || protocol === "http:"
  } catch {
    return false
  }
}

function isNewsItem(value: unknown): value is NewsItem {
  if (!isRecord(value)) {
    return false
  }
  const { id, title, url, source, language, themes: itemThemes, publishedAt } = value
  return (
    typeof id === "string" &&
    typeof title === "string" &&
    isHttpUrl(url) &&
    typeof source === "string" &&
    isSupportedLanguage(language) &&
    Array.isArray(itemThemes) &&
    itemThemes.every((theme: unknown) => typeof theme === "string") &&
    isValidDate(publishedAt)
  )
}

function parseNewsFile(value: unknown): NewsFile {
  if (!isRecord(value) || !isValidDate(value.generatedAt) || !Array.isArray(value.items)) {
    throw new Error("Format du fichier d'actualités invalide")
  }
  return { generatedAt: value.generatedAt, items: value.items.filter(isNewsItem) }
}

export function isThemeId(value: string): value is ThemeId {
  return Object.hasOwn(themes, value)
}

let newsRequest: Promise<NewsFile> | null = null

export function loadNews(): Promise<NewsFile> {
  newsRequest ??= fetch(assetPath("/data/news.json"), { cache: "no-cache" })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Actualités indisponibles (HTTP ${String(response.status)})`)
      }
      return parseNewsFile(await response.json())
    })
    .catch((error: unknown) => {
      newsRequest = null
      throw error
    })
  return newsRequest
}