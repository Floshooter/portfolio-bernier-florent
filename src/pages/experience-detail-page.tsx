import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { DocumentList } from "@/components/content/document-list"
import { OrganizationLogo } from "@/components/content/organization-logo"
import { ProjectLinks } from "@/components/content/project-links"
import { SkillList } from "@/components/content/skill-list"
import { WebsiteLink } from "@/components/content/website-link"
import { PageHeader } from "@/components/page-header"
import { getAdjacentExperiences, getExperience, getProjectsByParent } from "@/content"
import { localize } from "@/content/types"
import { useFormatDuration } from "@/hooks/use-format-duration"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { formatPeriod } from "@/lib/format"
import { NotFoundPage } from "@/pages/not-found-page"

export function ExperienceDetailPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const formatDuration = useFormatDuration()
  const { slug } = useParams()
  const experience = getExperience(slug)

  if (experience === undefined) {
    return <NotFoundPage />
  }

  const projects = getProjectsByParent("experience", experience.slug)
  const { previous, next } = getAdjacentExperiences(experience.slug)
  const hasAdjacent = previous !== undefined || next !== undefined
  const duration = formatDuration(experience.period)
  const period = formatPeriod(experience.period, language, t("period.present"))
  const periodLabel = duration === null ? period : `${period} (${duration})`

  return (
    <article className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <OrganizationLogo src={experience.logo} name={experience.company} size="lg" />
        <div className="space-y-3">
          <PageHeader
            title={experience.company}
            subtitle={`${localize(experience.role, language)} · ${t(`contract.${experience.contract}`)} · ${periodLabel} · ${experience.location}`}
          />
          <WebsiteLink url={experience.website} />
        </div>
      </div>
      <p>{localize(experience.description, language)}</p>
      <ProjectLinks
        title={t("common.projects")}
        projects={projects}
        buildPath={(project) => localizedPath(language, "experience", experience.slug, project.slug)}
      />
      <SkillList ids={experience.skills} />
      <DocumentList documents={experience.documents} />
      {hasAdjacent && (
        <nav
          aria-label={t("common.adjacentNavigation")}
          className="flex flex-wrap justify-between gap-4 border-t pt-4 text-sm"
        >
          {previous !== undefined ? (
            <Link
              to={localizedPath(language, "experience", previous.slug)}
              className="underline-offset-4 hover:underline"
            >
              ← {previous.company}
            </Link>
          ) : (
            <span />
          )}
          {next !== undefined ? (
            <Link
              to={localizedPath(language, "experience", next.slug)}
              className="underline-offset-4 hover:underline"
            >
              {next.company} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}