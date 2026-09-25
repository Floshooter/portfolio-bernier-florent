import { experiences } from "@/content/experiences"
import { projects } from "@/content/projects"
import { schools } from "@/content/schools"
import { skills, type SkillId } from "@/content/skills"
import { travels } from "@/content/travels"
import {
  skillCategories,
  type Experience,
  type PartialDate,
  type Period,
  type Project,
  type ProjectParentKind,
  type School,
  type SchoolYear,
  type Skill,
  type SkillCategory,
  type Travel,
} from "@/content/types"

export interface SkillGroup {
  readonly category: SkillCategory
  readonly items: readonly { readonly id: SkillId; readonly skill: Skill }[]
}

export interface AdjacentItems<T> {
  readonly previous: T | undefined
  readonly next: T | undefined
}

export interface SiteStats {
  readonly experiences: number
  readonly projects: number
  readonly skills: number
  readonly countries: number
}

export interface ProjectParent {
  readonly kind: ProjectParentKind
  readonly slug: string
  readonly name: string
  readonly year?: SchoolYear
}

const partialDatePattern = /^(\d{4})-(0[1-9]|1[0-2])(?:-(0[1-9]|[12]\d|3[01]))?$/
const countryCodePattern = /^[A-Z]{2}$/
const featuredProjectLimit = 3

function comparePartialDates(a: PartialDate, b: PartialDate): number {
  const length = Math.min(a.length, b.length)
  return a.slice(0, length).localeCompare(b.slice(0, length))
}

function byStartDateDesc(a: { readonly period: Period }, b: { readonly period: Period }): number {
  return b.period.start.localeCompare(a.period.start)
}

function getAdjacent<T extends { readonly slug: string }>(
  ordered: readonly T[],
  slug: string,
): AdjacentItems<T> {
  const index = ordered.findIndex((item) => item.slug === slug)
  if (index === -1) {
    return { previous: undefined, next: undefined }
  }
  return { previous: ordered[index + 1], next: ordered[index - 1] }
}

export function getExperiences(): readonly Experience[] {
  return [...experiences].sort(byStartDateDesc)
}

export function getExperience(slug: string | undefined): Experience | undefined {
  return experiences.find((item) => item.slug === slug)
}

export function getCurrentExperiences(): readonly Experience[] {
  return getExperiences().filter((item) => item.period.end === null)
}

export function getAdjacentExperiences(slug: string): AdjacentItems<Experience> {
  return getAdjacent(getExperiences(), slug)
}

export function getSchools(): readonly School[] {
  return [...schools].sort(byStartDateDesc)
}

export function getSchool(slug: string | undefined): School | undefined {
  return schools.find((item) => item.slug === slug)
}

export function getCurrentSchools(): readonly School[] {
  return getSchools().filter((item) => item.period.end === null)
}

export function getAdjacentSchools(slug: string): AdjacentItems<School> {
  return getAdjacent(getSchools(), slug)
}

export function getSchoolYear(school: School, yearId: string | undefined): SchoolYear | undefined {
  return school.years?.find((year) => year.id === yearId)
}

export function getProjectsByParent(kind: ProjectParentKind, parentSlug: string): readonly Project[] {
  return projects.filter(
    (project) =>
      project.context.kind !== "personal" &&
      project.context.kind === kind &&
      project.context.slug === parentSlug,
  )
}

export function getProjectsBySchoolYear(schoolSlug: string, yearId: string | null): readonly Project[] {
  return projects.filter(
    (project) =>
      project.context.kind === "education" &&
      project.context.slug === schoolSlug &&
      (project.context.year ?? null) === yearId,
  )
}

export function getParentProject(
  kind: ProjectParentKind,
  parentSlug: string | undefined,
  projectSlug: string | undefined,
): Project | undefined {
  if (parentSlug === undefined || projectSlug === undefined) {
    return undefined
  }
  return getProjectsByParent(kind, parentSlug).find((project) => project.slug === projectSlug)
}

export function getPersonalProjects(): readonly Project[] {
  return projects.filter((project) => project.context.kind === "personal")
}

export function getPersonalProject(slug: string | undefined): Project | undefined {
  return getPersonalProjects().find((project) => project.slug === slug)
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured === true).slice(0, featuredProjectLimit)
}

export function getProjectParent(project: Project): ProjectParent | undefined {
  const { context } = project
  if (context.kind === "experience") {
    const experience = getExperience(context.slug)
    return experience === undefined
      ? undefined
      : { kind: "experience", slug: experience.slug, name: experience.company }
  }
  if (context.kind === "education") {
    const school = getSchool(context.slug)
    if (school === undefined) {
      return undefined
    }
    const year = context.year === undefined ? undefined : getSchoolYear(school, context.year)
    return year === undefined
      ? { kind: "education", slug: school.slug, name: school.name }
      : { kind: "education", slug: school.slug, name: school.name, year }
  }
  return undefined
}

function getProjectSiblings(project: Project): readonly Project[] {
  const { context } = project
  switch (context.kind) {
    case "personal":
      return getPersonalProjects()
    case "experience":
      return getProjectsByParent("experience", context.slug)
    case "education":
      return getProjectsBySchoolYear(context.slug, context.year ?? null)
  }
}

export function getAdjacentProjects(project: Project): AdjacentItems<Project> {
  const siblings = getProjectSiblings(project)
  const index = siblings.findIndex((item) => item.slug === project.slug)
  if (index === -1) {
    return { previous: undefined, next: undefined }
  }
  return { previous: siblings[index - 1], next: siblings[index + 1] }
}

export function getUsedSkillIds(items: readonly Project[]): readonly SkillId[] {
  const ids = Object.keys(skills) as SkillId[]
  return ids.filter((id) => items.some((item) => item.skills.includes(id)))
}

export function getTravels(): readonly Travel[] {
  return [...travels].sort(byStartDateDesc)
}

export function getTravel(slug: string | undefined): Travel | undefined {
  return travels.find((item) => item.slug === slug)
}

export function getSkill(id: SkillId): Skill {
  return skills[id]
}

export function getSkillGroups(): readonly SkillGroup[] {
  const ids = Object.keys(skills) as SkillId[]
  return skillCategories
    .map((category) => ({
      category,
      items: ids
        .filter((id) => skills[id].category === category)
        .map((id) => ({ id, skill: getSkill(id) })),
    }))
    .filter((group) => group.items.length > 0)
}

export function getSiteStats(): SiteStats {
  return {
    experiences: experiences.length,
    projects: projects.length,
    skills: Object.keys(skills).length,
    countries: new Set(travels.map((travel) => travel.country)).size,
  }
}

function assertUniqueValues(collection: string, values: readonly string[]): void {
  const seen = new Set<string>()
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`[content] Identifiant en double dans ${collection} : "${value}"`)
    }
    seen.add(value)
  }
}

function assertSkillsExist(owner: string, ids: readonly string[]): void {
  const knownIds = new Set<string>(Object.keys(skills))
  for (const id of ids) {
    if (!knownIds.has(id)) {
      throw new Error(`[content] Compétence inconnue "${id}" dans ${owner} (absente de skills.ts)`)
    }
  }
}

function assertPartialDate(owner: string, label: string, value: PartialDate): void {
  const match = partialDatePattern.exec(value)
  if (match === null) {
    throw new Error(
      `[content] ${label} invalide pour ${owner} : "${value}" (format AAAA-MM ou AAAA-MM-JJ)`,
    )
  }
  const [, yearPart, monthPart, dayPart] = match
  if (dayPart === undefined) {
    return
  }
  const year = Number(yearPart)
  const month = Number(monthPart)
  const day = Number(dayPart)
  const date = new Date(year, month - 1, day)
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    throw new Error(`[content] ${label} inexistante pour ${owner} : "${value}"`)
  }
}

function assertPeriod(owner: string, period: Period | undefined): void {
  if (period === undefined) {
    return
  }
  assertPartialDate(owner, "Date de début", period.start)
  if (period.end === null) {
    return
  }
  assertPartialDate(owner, "Date de fin", period.end)
  if (comparePartialDates(period.end, period.start) < 0) {
    throw new Error(`[content] La date de fin précède la date de début pour ${owner}`)
  }
}

function assertProjectContext(project: Project): void {
  const { context } = project
  if (context.kind === "experience" && !experiences.some((item) => item.slug === context.slug)) {
    throw new Error(
      `[content] Le projet "${project.slug}" référence une entreprise inconnue : "${context.slug}"`,
    )
  }
  if (context.kind !== "education") {
    return
  }
  const school = schools.find((item) => item.slug === context.slug)
  if (school === undefined) {
    throw new Error(
      `[content] Le projet "${project.slug}" référence un établissement inconnu : "${context.slug}"`,
    )
  }
  if (context.year !== undefined && getSchoolYear(school, context.year) === undefined) {
    throw new Error(
      `[content] Le projet "${project.slug}" référence une année inconnue de "${school.slug}" : "${context.year}"`,
    )
  }
}

function validateContent(): void {
  assertUniqueValues("experiences", experiences.map((item) => item.slug))
  assertUniqueValues("schools", schools.map((item) => item.slug))
  assertUniqueValues("projects", projects.map((item) => item.slug))
  assertUniqueValues("travels", travels.map((item) => item.slug))

  for (const experience of experiences) {
    const owner = `l'expérience "${experience.slug}"`
    assertPeriod(owner, experience.period)
    assertSkillsExist(owner, experience.skills)
  }
  for (const school of schools) {
    assertPeriod(`l'établissement "${school.slug}"`, school.period)
    const years = school.years ?? []
    assertUniqueValues(`les années de "${school.slug}"`, years.map((year) => year.id))
    for (const year of years) {
      assertPeriod(`l'année "${year.id}" de "${school.slug}"`, year.period)
    }
  }
  for (const travel of travels) {
    assertPeriod(`le voyage "${travel.slug}"`, travel.period)
    if (!countryCodePattern.test(travel.country)) {
      throw new Error(
        `[content] Code pays invalide pour le voyage "${travel.slug}" : "${travel.country}" (format ISO, ex. FR)`,
      )
    }
  }
  for (const project of projects) {
    const owner = `le projet "${project.slug}"`
    assertPeriod(owner, project.period)
    assertSkillsExist(owner, project.skills)
    assertProjectContext(project)
  }

  const featuredCount = projects.filter((project) => project.featured === true).length
  if (featuredCount > featuredProjectLimit) {
    console.warn(
      `[content] ${String(featuredCount)} projets marqués "featured", seuls les ${String(featuredProjectLimit)} premiers sont affichés`,
    )
  }
}

if (import.meta.env.DEV) {
  validateContent()
}