import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { Breadcrumb } from "@/components/content/breadcrumb"
import { OrganizationLogo } from "@/components/content/organization-logo"
import { ProjectCard } from "@/components/content/project-card"
import { PageHeader } from "@/components/page-header"
import { getProjectsBySchoolYear, getSchool, getSchoolYear } from "@/content"
import { localize } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { formatPeriod } from "@/lib/format"
import { NotFoundPage } from "@/pages/not-found-page"

const linkClassName = "underline-offset-4 hover:underline"

export function SchoolYearPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const { slug, yearId } = useParams()
  const school = getSchool(slug)
  const year = school === undefined ? undefined : getSchoolYear(school, yearId)

  if (school === undefined || year === undefined) {
    return <NotFoundPage />
  }

  const years = school.years ?? []
  const index = years.findIndex((item) => item.id === year.id)
  const previous = index > 0 ? years[index - 1] : undefined
  const next = years[index + 1]
  const hasAdjacent = previous !== undefined || next !== undefined
  const projects = getProjectsBySchoolYear(school.slug, year.id)
  const label = localize(year.label, language)

  return (
    <article className="space-y-8">
      <Breadcrumb
        items={[
          { label: t("nav.education"), to: localizedPath(language, "education") },
          { label: school.name, to: localizedPath(language, "education", school.slug) },
        ]}
        current={label}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <OrganizationLogo src={school.logo} name={school.name} size="lg" />
        <div className="space-y-2">
          <PageHeader title={label} subtitle={`${school.name} · ${localize(school.degree, language)}`} />
          {year.period !== undefined && (
            <p className="font-mono text-sm text-muted-foreground">
              {formatPeriod(year.period, language, t("period.present"))}
            </p>
          )}
        </div>
      </div>

      {year.description !== undefined && <p>{localize(year.description, language)}</p>}

      <section aria-labelledby="year-projects-title" className="space-y-4">
        <h2 id="year-projects-title" className="text-xl font-semibold tracking-tight">
          {t("common.projects")}
        </h2>
        {projects.length === 0 ? (
          <p className="text-muted-foreground">{t("pages.education.yearEmpty")}</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, projectIndex) => (
              <motion.li
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: projectIndex * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </ul>
        )}
      </section>

      {hasAdjacent && (
        <nav
          aria-label={t("common.adjacentNavigation")}
          className="flex flex-wrap justify-between gap-4 border-t pt-4 text-sm"
        >
          {previous !== undefined ? (
            <Link
              to={localizedPath(language, "education", school.slug, "years", previous.id)}
              className={linkClassName}
            >
              ← {localize(previous.label, language)}
            </Link>
          ) : (
            <span />
          )}
          {next !== undefined ? (
            <Link
              to={localizedPath(language, "education", school.slug, "years", next.id)}
              className={linkClassName}
            >
              {localize(next.label, language)} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}