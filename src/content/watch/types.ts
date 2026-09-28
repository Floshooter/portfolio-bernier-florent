import type { DocumentFile, ExternalLink, LocalizedText, Period } from "@/content/types"
import type { ThemeId } from "@/content/watch/themes"

export interface Theme {
  readonly name: LocalizedText
}

export interface WatchSchoolLink {
  readonly slug: string
  readonly year?: string
}

export interface WatchTopic {
  readonly slug: string
  readonly title: LocalizedText
  readonly summary: LocalizedText
  readonly description: LocalizedText
  readonly themes: readonly ThemeId[]
  readonly school?: WatchSchoolLink
  readonly period?: Period
  readonly cover?: string
  readonly documents: readonly DocumentFile[]
  readonly sources: readonly ExternalLink[]
}