import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Breadcrumb, type BreadcrumbItem } from "@/components/content/breadcrumb"
import { DocumentList } from "@/components/content/document-list"
import { ExternalLinkList } from "@/components/content/external-link-list"
import { Gallery } from "@/components/content/gallery"
import { ProjectStatusBadge } from "@/components/content/project-status-badge"
import { SkillList } from "@/components/content/skill-list"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { getAdjacentProjects, getProjectParent, type ProjectParent } from "@/content"
import { localize, type Project } from "@/content/types"
import { useFormatDuration } from "@/hooks/use-format-duration"
import type { Language } from "@/i18n/config"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { formatPeriod } from "@/lib/format"
import { projectPath } from "@/lib/project-path"

interface ProjectDetailProps {
  readonly project: Project
}

const linkClassName = "underline-offset-4 hover:underline"

function buildParentCrumbs(
  parent: ProjectParent,
  language: Language,
  sectionLabel: string,
): readonly BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [
    { label: sectionLabel, to: localizedPath(language, parent.kind) },
    { label: parent.name, to: localizedPath(language, parent.kind, parent.slug) },
  ]
  if (parent.year !== undefined) {
    crumbs.push({
      label: localize(parent.year.label, language),
      to: localizedPath(language, "education", parent.slug, "years", parent.year.id),
    })
  }
  return crumbs
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const language = useLanguage()
  const { t } = useTranslation()
  const formatDuration = useFormatDuration()
  const title = localize(project.title, language)
  const parent = getProjectParent(project)
  const { previous, next } = getAdjacentProjects(project)
  const hasAdjacent = previous !== undefined || next !== undefined

  const crumbs: readonly BreadcrumbItem[] =
    parent === undefined
      ? [{ label: t("nav.projects"), to: localizedPath(language, "projects") }]
      : buildParentCrumbs(parent, language, t(`nav.${parent.kind}`))

  const duration = project.period === undefined ? null : formatDuration(project.period)
  const periodLabel =
    project.period === undefined ? null : formatPeriod(project.period, language, t("period.present"))

  return (
    <article className="space-y-8">
      <Breadcrumb items={crumbs} current={title} />

      {project.cover !== undefined && project.cover.length > 0 && (
        <img
          src={assetPath(project.cover)}
          alt=""
          className="aspect-[21/9] w-full rounded-xl border object-cover"
        />
      )}

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{t(`projectKind.${project.context.kind}`)}</Badge>
          {project.status !== undefined && <ProjectStatusBadge status={project.status} />}
        </div>
        <PageHeader title={title} subtitle={localize(project.summary, language)} />
        {periodLabel !== null && (
          <p className="font-mono text-sm text-muted-foreground">
            {periodLabel}
            {duration !== null && <span> · {duration}</span>}
          </p>
        )}
      </div>

      <ExternalLinkList links={project.links} />

      <p className="leading-relaxed">{localize(project.description, language)}</p>

      {project.skills.length > 0 && (
        <div className="space-y-2">
          <SkillList ids={project.skills} />
          <Link to={localizedPath(language, "skills")} className={`text-sm text-primary ${linkClassName}`}>
            {t("project.allSkills")}
          </Link>
        </div>
      )}

      <Gallery images={project.images ?? []} title={title} />

      <DocumentList documents={project.documents} />

      {hasAdjacent && (
        <nav
          aria-label={t("common.adjacentNavigation")}
          className="flex flex-wrap justify-between gap-4 border-t pt-4 text-sm"
        >
          {previous !== undefined ? (
            <Link to={projectPath(language, previous)} className={linkClassName}>
              ← {localize(previous.title, language)}
            </Link>
          ) : (
            <span />
          )}
          {next !== undefined ? (
            <Link to={projectPath(language, next)} className={linkClassName}>
              {localize(next.title, language)} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}