import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { DocumentList } from "@/components/content/document-list"
import { OrganizationLogo } from "@/components/content/organization-logo"
import { ProjectCard } from "@/components/content/project-card"
import { WebsiteLink } from "@/components/content/website-link"
import { PageHeader } from "@/components/page-header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAdjacentSchools, getProjectsBySchoolYear, getSchool } from "@/content"
import { localize } from "@/content/types"
import { useFormatDuration } from "@/hooks/use-format-duration"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { formatPeriod } from "@/lib/format"
import { NotFoundPage } from "@/pages/not-found-page"

const linkClassName = "underline-offset-4 hover:underline"

export function EducationDetailPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const formatDuration = useFormatDuration()
  const { slug } = useParams()
  const school = getSchool(slug)

  if (school === undefined) {
    return <NotFoundPage />
  }

  const years = school.years ?? []
  const hasYears = years.length > 0
  const commonProjects = getProjectsBySchoolYear(school.slug, null)
  const { previous, next } = getAdjacentSchools(school.slug)
  const hasAdjacent = previous !== undefined || next !== undefined
  const duration = formatDuration(school.period)
  const period = formatPeriod(school.period, language, t("period.present"))
  const periodLabel = duration === null ? period : `${period} (${duration})`

  return (
    <article className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <OrganizationLogo src={school.logo} name={school.name} size="lg" />
        <div className="space-y-3">
          <PageHeader
            title={school.name}
            subtitle={`${localize(school.degree, language)} · ${periodLabel} · ${school.location}`}
          />
          <WebsiteLink url={school.website} />
        </div>
      </div>

      <p>{localize(school.description, language)}</p>

      {hasYears && (
        <section aria-labelledby="years-title" className="space-y-4">
          <h2 id="years-title" className="text-xl font-semibold tracking-tight">
            {t("pages.education.years")}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {years.map((year) => {
              const count = getProjectsBySchoolYear(school.slug, year.id).length
              return (
                <li key={year.id}>
                  <Card className="relative h-full transition-colors hover:border-primary/50">
                    <CardHeader>
                      <CardTitle>
                        <Link
                          to={localizedPath(language, "education", school.slug, "years", year.id)}
                          className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
                        >
                          {localize(year.label, language)}
                        </Link>
                      </CardTitle>
                      <CardDescription className="font-mono text-xs">
                        {t("pages.education.projectCount", { count })}
                        {year.period !== undefined &&
                          ` · ${formatPeriod(year.period, language, t("period.present"))}`}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {commonProjects.length > 0 && (
        <section aria-labelledby="school-projects-title" className="space-y-4">
          <h2 id="school-projects-title" className="text-xl font-semibold tracking-tight">
            {hasYears ? t("pages.education.commonProjects") : t("common.projects")}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <DocumentList documents={school.documents} />

      {hasAdjacent && (
        <nav
          aria-label={t("common.adjacentNavigation")}
          className="flex flex-wrap justify-between gap-4 border-t pt-4 text-sm"
        >
          {previous !== undefined ? (
            <Link to={localizedPath(language, "education", previous.slug)} className={linkClassName}>
              ← {previous.name}
            </Link>
          ) : (
            <span />
          )}
          {next !== undefined ? (
            <Link to={localizedPath(language, "education", next.slug)} className={linkClassName}>
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}