import type { SkillId } from "@/content/skills"
import type { Language } from "@/i18n/config"

export interface LocalizedText {
  readonly fr: string
  readonly en?: string
}

export type YearMonth = `${number}-${number}`

export type YearMonthDay = `${number}-${number}-${number}`

export type PartialDate = YearMonth | YearMonthDay

export interface Period {
  readonly start: PartialDate
  readonly end: PartialDate | null
}

export const contractTypes = [
  "business-owner",
  "apprenticeship",
  "internship",
  "permanent",
  "fixed-term",
  "temporary",
  "freelance",
  "student-job",
] as const

export type ContractType = (typeof contractTypes)[number]

export const skillCategories = [
  "markup",
  "styling",
  "programming",
  "framework",
  "runtime",
  "orm",
  "database",
  "tool",
  "infrastructure",
  "spoken-language",
  "soft-skill",
] as const

export type SkillCategory = (typeof skillCategories)[number]

export const skillLevels = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] as const

export type SkillLevel = (typeof skillLevels)[number]

export const maxSkillLevel = 5

export const projectStatuses = ["in-progress", "completed", "paused"] as const

export type ProjectStatus = (typeof projectStatuses)[number]

export interface ExternalLink {
  readonly label: LocalizedText
  readonly url: string
}

export interface DocumentFile {
  readonly label: LocalizedText
  readonly path: string
}

export interface GalleryImage {
  readonly src: string
  readonly alt: LocalizedText
}

export interface Experience {
  readonly slug: string
  readonly company: string
  readonly role: LocalizedText
  readonly contract: ContractType
  readonly period: Period
  readonly location: string
  readonly summary: LocalizedText
  readonly description: LocalizedText
  readonly skills: readonly SkillId[]
  readonly documents: readonly DocumentFile[]
  readonly website?: string
  readonly logo?: string
}

export interface SchoolYear {
  readonly id: string
  readonly label: LocalizedText
  readonly period?: Period
  readonly description?: LocalizedText
}

export interface School {
  readonly slug: string
  readonly name: string
  readonly degree: LocalizedText
  readonly period: Period
  readonly location: string
  readonly summary: LocalizedText
  readonly description: LocalizedText
  readonly documents: readonly DocumentFile[]
  readonly years?: readonly SchoolYear[]
  readonly website?: string
  readonly logo?: string
}

export type ProjectContext =
  | { readonly kind: "experience"; readonly slug: string }
  | { readonly kind: "education"; readonly slug: string; readonly year?: string }
  | { readonly kind: "personal" }

export type ProjectKind = ProjectContext["kind"]

export type ProjectParentKind = Exclude<ProjectKind, "personal">

export interface Project {
  readonly slug: string
  readonly context: ProjectContext
  readonly title: LocalizedText
  readonly summary: LocalizedText
  readonly description: LocalizedText
  readonly period?: Period
  readonly status?: ProjectStatus
  readonly cover?: string
  readonly images?: readonly GalleryImage[]
  readonly skills: readonly SkillId[]
  readonly links: readonly ExternalLink[]
  readonly documents: readonly DocumentFile[]
  readonly featured?: boolean
}

export interface Skill {
  readonly name: LocalizedText
  readonly category: SkillCategory
  readonly level?: SkillLevel
}

export interface Travel {
  readonly slug: string
  readonly title: LocalizedText
  readonly subtitle: LocalizedText
  readonly summary: LocalizedText
  readonly description: LocalizedText
  readonly country: string
  readonly period: Period
  readonly cover: string
  readonly images: readonly GalleryImage[]
}

export type SocialNetwork = "linkedin" | "github" | "x" | "twitch" | "linktree"

export interface SocialLink {
  readonly network: SocialNetwork
  readonly label: string
  readonly url: string
}

export interface Profile {
  readonly fullName: string
  readonly initials: string
  readonly title: LocalizedText
  readonly tagline: LocalizedText
  readonly studyStatus: LocalizedText | null
  readonly birthDate: YearMonthDay
  readonly location: string
  readonly photo: string
  readonly email: string
  readonly socials: readonly SocialLink[]
  readonly cv: {
    readonly fr: string
    readonly en: string | null
  }
}

export const objectiveStatuses = ["in-progress", "planned", "done"] as const

export type ObjectiveStatus = (typeof objectiveStatuses)[number]

export interface Objective {
  readonly id: string
  readonly status: ObjectiveStatus
  readonly title: LocalizedText
  readonly description: LocalizedText
}

export type InterestIcon = "gamepad" | "trophy" | "radio" | "plane" | "cpu" | "car"

export interface Interest {
  readonly id: string
  readonly icon: InterestIcon
  readonly title: LocalizedText
  readonly description: LocalizedText
  readonly path?: string
}

export interface AboutContent {
  readonly bio: readonly LocalizedText[]
  readonly objectives: readonly Objective[]
  readonly interests: readonly Interest[]
}

export function localize(text: LocalizedText, language: Language): string {
  const value = text[language]
  return value !== undefined && value.length > 0 ? value : text.fr
}