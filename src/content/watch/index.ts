import { getSchool, getSchoolYear } from "@/content"
import { themes, type ThemeId } from "@/content/watch/themes"
import { watchTopics } from "@/content/watch/topics"
import type { Theme, WatchTopic } from "@/content/watch/types"

export function getWatchTopics(): readonly WatchTopic[] {
  return watchTopics
}

export function getWatchTopic(slug: string | undefined): WatchTopic | undefined {
  return watchTopics.find((topic) => topic.slug === slug)
}

export function getWatchTopicsBySchool(schoolSlug: string): readonly WatchTopic[] {
  return watchTopics.filter((topic) => topic.school?.slug === schoolSlug)
}

export function getTheme(id: ThemeId): Theme {
  return themes[id]
}

function validateWatchContent(): void {
  const seenSlugs = new Set<string>()
  const knownThemes = new Set<string>(Object.keys(themes))

  for (const topic of watchTopics) {
    if (seenSlugs.has(topic.slug)) {
      throw new Error(`[content] Slug de veille en double : "${topic.slug}"`)
    }
    seenSlugs.add(topic.slug)

    for (const themeId of topic.themes) {
      if (!knownThemes.has(themeId)) {
        throw new Error(`[content] Thème inconnu "${themeId}" dans la veille "${topic.slug}" (absent de themes.ts)`)
      }
    }

    if (topic.school === undefined) {
      continue
    }
    const school = getSchool(topic.school.slug)
    if (school === undefined) {
      throw new Error(
        `[content] La veille "${topic.slug}" référence un établissement inconnu : "${topic.school.slug}"`,
      )
    }
    if (topic.school.year !== undefined && getSchoolYear(school, topic.school.year) === undefined) {
      throw new Error(
        `[content] La veille "${topic.slug}" référence une année inconnue de "${school.slug}" : "${topic.school.year}"`,
      )
    }
  }
}

if (import.meta.env.DEV) {
  validateWatchContent()
}