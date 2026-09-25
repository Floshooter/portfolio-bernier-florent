import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { SkillRating } from "@/components/content/skill-rating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCurrentSchools, getExperiences, getFeaturedProjects, getSchools, getSkillGroups } from "@/content"
import { about } from "@/content/about"
import { profile } from "@/content/profile"
import { localize, type Period, type SkillCategory } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { formatPeriod } from "@/lib/format"

interface CvSectionProps {
  readonly title: string
  readonly children: ReactNode
}

interface CvEntryProps {
  readonly title: string
  readonly subtitle: string
  readonly meta: string
  readonly description?: string
  readonly badge?: string
}

const nonTechnicalCategories: readonly SkillCategory[] = ["spoken-language", "soft-skill"]

function CvSection({ title, children }: CvSectionProps) {
  return (
    <section className="space-y-3 break-inside-avoid">
      <h3 className="border-b pb-1 text-xs font-semibold tracking-wider text-primary uppercase">{title}</h3>
      {children}
    </section>
  )
}

function CvEntry({ title, subtitle, meta, description, badge }: CvEntryProps) {
  return (
    <div className="space-y-1 break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-semibold">
          {title}
          {badge !== undefined && (
            <span className="ml-2 rounded border px-1.5 py-0.5 align-middle text-[10px] font-medium text-muted-foreground">
              {badge}
            </span>
          )}
        </p>
        <p className="font-mono text-xs text-muted-foreground">{meta}</p>
      </div>
      <p className="text-sm font-medium text-muted-foreground">{subtitle}</p>
      {description !== undefined && <p className="text-sm leading-relaxed">{description}</p>}
    </div>
  )
}

export function CvDocument() {
  const language = useLanguage()
  const { t } = useTranslation()
  const experiences = getExperiences()
  const schools = getSchools()
  const hasCurrentSchool = getCurrentSchools().length > 0
  const projects = getFeaturedProjects()
  const skillGroups = getSkillGroups()
  const technicalGroups = skillGroups.filter((group) => !nonTechnicalCategories.includes(group.category))
  const spokenLanguages = skillGroups.find((group) => group.category === "spoken-language")?.items ?? []
  const softSkills = skillGroups.find((group) => group.category === "soft-skill")?.items ?? []
  const formatRange = (period: Period): string => formatPeriod(period, language, t("period.present"))

  return (
    <div
      id="cv-print-area"
      className="mx-auto max-w-4xl rounded-xl border bg-card p-6 text-card-foreground shadow-sm sm:p-10"
    >
      <header className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center">
        <Avatar className="size-20 ring-4 ring-primary/20">
          <AvatarImage src={assetPath(profile.photo)} alt="" />
          <AvatarFallback className="text-xl">{profile.initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold tracking-tight">{profile.fullName}</h2>
          <p className="text-lg font-medium text-primary">{localize(profile.title, language)}</p>
          <p className="text-sm text-muted-foreground">{profile.location}</p>
        </div>
      </header>

      <div className="grid gap-8 pt-6 md:grid-cols-[1fr_15rem] print:grid-cols-[1fr_14rem]">
        <div className="space-y-8">
          <CvSection title={t("cv.sections.profile")}>
            <p className="text-sm leading-relaxed">{localize(profile.tagline, language)}</p>
          </CvSection>

          {experiences.length > 0 && (
            <CvSection title={t("cv.sections.experience")}>
              <ul className="space-y-4">
                {experiences.map((experience) => (
                  <li key={experience.slug}>
                    <CvEntry
                      title={experience.company}
                      badge={t(`contract.${experience.contract}`)}
                      subtitle={localize(experience.role, language)}
                      meta={`${formatRange(experience.period)} · ${experience.location}`}
                      description={localize(experience.summary, language)}
                    />
                  </li>
                ))}
              </ul>
            </CvSection>
          )}

          {(schools.length > 0 || profile.studyStatus !== null) && (
            <CvSection title={t("cv.sections.education")}>
              <ul className="space-y-4">
                {!hasCurrentSchool && profile.studyStatus !== null && (
                  <li className="text-sm italic text-muted-foreground">{localize(profile.studyStatus, language)}</li>
                )}
                {schools.map((school) => (
                  <li key={school.slug}>
                    <CvEntry
                      title={localize(school.degree, language)}
                      subtitle={school.name}
                      meta={`${formatRange(school.period)} · ${school.location}`}
                    />
                  </li>
                ))}
              </ul>
            </CvSection>
          )}

          {projects.length > 0 && (
            <CvSection title={t("cv.sections.projects")}>
              <ul className="space-y-3">
                {projects.map((project) => (
                  <li key={project.slug} className="break-inside-avoid text-sm">
                    <span className="font-semibold">{localize(project.title, language)}</span>
                    <span className="text-muted-foreground"> — {localize(project.summary, language)}</span>
                  </li>
                ))}
              </ul>
            </CvSection>
          )}
        </div>

        <aside className="space-y-8">
          <CvSection title={t("cv.sections.contact")}>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="break-all text-primary underline-offset-4 hover:underline">
                  {profile.email}
                </a>
              </li>
              {profile.socials.map((social) => (
                <li key={social.network}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all underline-offset-4 hover:underline"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </CvSection>

          {technicalGroups.length > 0 && (
            <CvSection title={t("cv.sections.skills")}>
              <dl className="space-y-2 text-sm">
                {technicalGroups.map((group) => (
                  <div key={group.category}>
                    <dt className="text-xs font-medium text-muted-foreground">
                      {t(`skillCategory.${group.category}`)}
                    </dt>
                    <dd>{group.items.map(({ skill }) => localize(skill.name, language)).join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </CvSection>
          )}

          {spokenLanguages.length > 0 && (
            <CvSection title={t("cv.sections.languages")}>
              <ul className="space-y-1.5 text-sm">
                {spokenLanguages.map(({ id, skill }) => (
                  <li key={id} className="flex items-center justify-between gap-2">
                    <span>{localize(skill.name, language)}</span>
                    {skill.level !== undefined && <SkillRating level={skill.level} />}
                  </li>
                ))}
              </ul>
            </CvSection>
          )}

          {softSkills.length > 0 && (
            <CvSection title={t("skillCategory.soft-skill")}>
              <p className="text-sm">{softSkills.map(({ skill }) => localize(skill.name, language)).join(" · ")}</p>
            </CvSection>
          )}

          {about.interests.length > 0 && (
            <CvSection title={t("cv.sections.interests")}>
              <p className="text-sm">
                {about.interests.map((interest) => localize(interest.title, language)).join(" · ")}
              </p>
            </CvSection>
          )}
        </aside>
      </div>
    </div>
  )
}