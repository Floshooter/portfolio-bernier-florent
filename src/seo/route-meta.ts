import { getExperiences, getSchools, getTravels } from "@/content"
import { profile } from "@/content/profile"
import { projects } from "@/content/projects"
import { localize } from "@/content/types"
import { getWatchTopics } from "@/content/watch"
import { defaultLanguage, supportedLanguages, type Language } from "@/i18n/config"
import { en } from "@/i18n/locales/en"
import { fr, type TranslationSchema } from "@/i18n/locales/fr"
import { localizedPath } from "@/i18n/paths"
import { projectPath } from "@/lib/project-path"
import { absoluteAssetUrl, absolutePageUrl, defaultOgImage, defaultOgImageSize } from "@/seo/site"

export type PageType = "website" | "profile" | "article"

export type HeadTag =
  | { readonly tag: "title"; readonly content: string }
  | {
      readonly tag: "meta"
      readonly attribute: "name" | "property"
      readonly key: string
      readonly content: string
    }
  | { readonly tag: "link"; readonly rel: string; readonly href: string; readonly hreflang?: string }

export interface RouteAlternate {
  readonly language: Language
  readonly url: string
}

export interface RouteMeta {
  readonly language: Language
  readonly path: string
  readonly url: string
  readonly title: string
  readonly description: string
  readonly image: string
  readonly isDefaultImage: boolean
  readonly type: PageType
  readonly alternates: readonly RouteAlternate[]
  readonly noIndex: boolean
}

export interface OgImageData {
  readonly name: string
  readonly title: string
  readonly tagline: string
  readonly photo: string
  readonly host: string
}

interface PageContent {
  readonly path: string
  readonly title: string
  readonly description: string
  readonly image: string | null
  readonly type: PageType
}

type PageDefinition = (language: Language) => PageContent

type TextSelector = (language: Language) => string

const resources: Readonly<Record<Language, TranslationSchema>> = { fr, en }
const ogLocales: Readonly<Record<Language, string>> = { fr: "fr_FR", en: "en_US" }
const maxDescriptionLength = 160

function tr(language: Language, select: (schema: TranslationSchema) => string): string {
  const value = select(resources[language])
  return value.length > 0 ? value : select(fr)
}

function truncate(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim()
  return normalized.length <= maxDescriptionLength
    ? normalized
    : `${normalized.slice(0, maxDescriptionLength - 1).trimEnd()}…`
}

function pageTitle(title: string): string {
  return `${title} — ${profile.fullName}`
}

function nonEmpty(value: string | undefined): string | null {
  return value !== undefined && value.length > 0 ? value : null
}

function staticPage(
  segments: readonly string[],
  type: PageType,
  title: TextSelector,
  description: TextSelector,
): PageDefinition {
  return (language) => ({
    path: localizedPath(language, ...segments),
    title: pageTitle(title(language)),
    description: description(language),
    image: null,
    type,
  })
}

function buildDefinitions(): readonly PageDefinition[] {
  const definitions: PageDefinition[] = [
    (language) => ({
      path: localizedPath(language),
      title: `${profile.fullName} — ${localize(profile.title, language)}`,
      description: localize(profile.tagline, language),
      image: null,
      type: "profile",
    }),
    staticPage(
      ["about"],
      "profile",
      (language) => tr(language, (s) => s.nav.about),
      (language) => tr(language, (s) => s.pages.about.subtitle),
    ),
    staticPage(
      ["experience"],
      "website",
      (language) => tr(language, (s) => s.nav.experience),
      (language) => tr(language, (s) => s.pages.experience.subtitle),
    ),
    staticPage(
      ["education"],
      "website",
      (language) => tr(language, (s) => s.nav.education),
      (language) => tr(language, (s) => s.pages.education.subtitle),
    ),
    staticPage(
      ["projects"],
      "website",
      (language) => tr(language, (s) => s.nav.projects),
      (language) => tr(language, (s) => s.pages.projects.subtitle),
    ),
    staticPage(
      ["skills"],
      "website",
      (language) => tr(language, (s) => s.nav.skills),
      (language) => tr(language, (s) => s.pages.skills.subtitle),
    ),
    staticPage(
      ["travels"],
      "website",
      (language) => tr(language, (s) => s.nav.travels),
      (language) => tr(language, (s) => s.pages.travels.subtitle),
    ),
    staticPage(
      ["watch"],
      "website",
      (language) => tr(language, (s) => s.nav.watch),
      (language) => tr(language, (s) => s.pages.watch.subtitle),
    ),
    staticPage(
      ["cv"],
      "profile",
      (language) => tr(language, (s) => s.nav.cv),
      (language) => `${localize(profile.title, language)} · ${profile.location}`,
    ),
  ]

  for (const experience of getExperiences()) {
    definitions.push((language) => ({
      path: localizedPath(language, "experience", experience.slug),
      title: pageTitle(experience.company),
      description: localize(experience.summary, language),
      image: null,
      type: "article",
    }))
  }

  for (const school of getSchools()) {
    definitions.push((language) => ({
      path: localizedPath(language, "education", school.slug),
      title: pageTitle(school.name),
      description: localize(school.summary, language),
      image: null,
      type: "article",
    }))
    for (const year of school.years ?? []) {
      definitions.push((language) => ({
        path: localizedPath(language, "education", school.slug, "years", year.id),
        title: pageTitle(`${localize(year.label, language)} · ${school.name}`),
        description:
          year.description === undefined
            ? localize(school.summary, language)
            : localize(year.description, language),
        image: null,
        type: "article",
      }))
    }
  }

  for (const project of projects) {
    definitions.push((language) => ({
      path: projectPath(language, project),
      title: pageTitle(localize(project.title, language)),
      description: localize(project.summary, language),
      image: nonEmpty(project.cover),
      type: "article",
    }))
  }

  for (const travel of getTravels()) {
    definitions.push((language) => ({
      path: localizedPath(language, "travels", travel.slug),
      title: pageTitle(localize(travel.title, language)),
      description: localize(travel.summary, language),
      image: nonEmpty(travel.cover),
      type: "article",
    }))
  }

  for (const topic of getWatchTopics()) {
    definitions.push((language) => ({
      path: localizedPath(language, "watch", topic.slug),
      title: pageTitle(localize(topic.title, language)),
      description: localize(topic.summary, language),
      image: nonEmpty(topic.cover),
      type: "article",
    }))
  }

  return definitions
}

let cachedDefinitions: readonly PageDefinition[] | null = null

function getDefinitions(): readonly PageDefinition[] {
  cachedDefinitions ??= buildDefinitions()
  return cachedDefinitions
}

function normalizePath(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
}

function toRouteMeta(definition: PageDefinition, language: Language): RouteMeta {
  const content = definition(language)
  return {
    language,
    path: content.path,
    url: absolutePageUrl(content.path),
    title: content.title,
    description: truncate(content.description),
    image: absoluteAssetUrl(content.image ?? defaultOgImage),
    isDefaultImage: content.image === null,
    type: content.type,
    alternates: supportedLanguages.map((alternate) => ({
      language: alternate,
      url: absolutePageUrl(definition(alternate).path),
    })),
    noIndex: false,
  }
}

export function getAllRouteMeta(): readonly RouteMeta[] {
  return getDefinitions().flatMap((definition) =>
    supportedLanguages.map((language) => toRouteMeta(definition, language)),
  )
}

export function getRouteMeta(language: Language, pathname: string): RouteMeta {
  const target = normalizePath(pathname)
  const definition = getDefinitions().find((candidate) => candidate(language).path === target)
  if (definition !== undefined) {
    return toRouteMeta(definition, language)
  }
  return {
    language,
    path: target,
    url: absolutePageUrl(target),
    title: pageTitle(tr(language, (s) => s.notFound.title)),
    description: tr(language, (s) => s.notFound.description),
    image: absoluteAssetUrl(defaultOgImage),
    isDefaultImage: true,
    type: "website",
    alternates: [],
    noIndex: true,
  }
}

export function buildHeadTags(meta: RouteMeta): readonly HeadTag[] {
  const tags: HeadTag[] = [
    { tag: "title", content: meta.title },
    { tag: "meta", attribute: "name", key: "description", content: meta.description },
    { tag: "meta", attribute: "property", key: "og:site_name", content: profile.fullName },
    { tag: "meta", attribute: "property", key: "og:type", content: meta.type },
    { tag: "meta", attribute: "property", key: "og:title", content: meta.title },
    { tag: "meta", attribute: "property", key: "og:description", content: meta.description },
    { tag: "meta", attribute: "property", key: "og:url", content: meta.url },
    { tag: "meta", attribute: "property", key: "og:image", content: meta.image },
    { tag: "meta", attribute: "property", key: "og:locale", content: ogLocales[meta.language] },
    { tag: "meta", attribute: "name", key: "twitter:card", content: "summary_large_image" },
    { tag: "meta", attribute: "name", key: "twitter:title", content: meta.title },
    { tag: "meta", attribute: "name", key: "twitter:description", content: meta.description },
    { tag: "meta", attribute: "name", key: "twitter:image", content: meta.image },
  ]

  for (const language of supportedLanguages) {
    if (language !== meta.language) {
      tags.push({ tag: "meta", attribute: "property", key: "og:locale:alternate", content: ogLocales[language] })
    }
  }

  if (meta.isDefaultImage) {
    tags.push(
      {
        tag: "meta",
        attribute: "property",
        key: "og:image:width",
        content: String(defaultOgImageSize.width),
      },
      {
        tag: "meta",
        attribute: "property",
        key: "og:image:height",
        content: String(defaultOgImageSize.height),
      },
    )
  }

  if (meta.noIndex) {
    tags.push({ tag: "meta", attribute: "name", key: "robots", content: "noindex" })
    return tags
  }

  tags.push({ tag: "link", rel: "canonical", href: meta.url })
  for (const alternate of meta.alternates) {
    tags.push({ tag: "link", rel: "alternate", href: alternate.url, hreflang: alternate.language })
  }
  const defaultAlternate = meta.alternates.find((alternate) => alternate.language === defaultLanguage)
  if (defaultAlternate !== undefined) {
    tags.push({ tag: "link", rel: "alternate", href: defaultAlternate.url, hreflang: "x-default" })
  }
  return tags
}

export function getOgImageData(): OgImageData {
  return {
    name: profile.fullName,
    title: localize(profile.title, defaultLanguage),
    tagline: localize(profile.tagline, defaultLanguage),
    photo: profile.photo,
    host: absolutePageUrl("")
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, ""),
  }
}