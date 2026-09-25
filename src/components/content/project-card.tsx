import { FolderGit2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ProjectStatusBadge } from "@/components/content/project-status-badge"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getSkill } from "@/content"
import { localize, type Project } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { projectPath } from "@/lib/project-path"

interface ProjectCardProps {
  readonly project: Project
  readonly showKind?: boolean
  readonly maxSkills?: number
}

function ProjectCover({ src }: { readonly src: string | undefined }) {
  return (
    <div className="aspect-video overflow-hidden border-b bg-muted">
      {src !== undefined && src.length > 0 ? (
        <img
          src={assetPath(src)}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-linear-to-br from-primary/15 via-accent to-highlight/15">
          <FolderGit2 aria-hidden="true" className="size-10 text-primary/60" />
        </div>
      )}
    </div>
  )
}

export function ProjectCard({ project, showKind = false, maxSkills = 4 }: ProjectCardProps) {
  const language = useLanguage()
  const { t } = useTranslation()
  const visibleSkills = project.skills.slice(0, maxSkills)
  const hiddenSkillCount = project.skills.length - visibleSkills.length

  return (
    <Card className="group relative h-full gap-0 overflow-hidden pt-0 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <ProjectCover src={project.cover} />
      <CardHeader className="gap-2 pt-5">
        {(showKind || project.status !== undefined) && (
          <div className="flex flex-wrap gap-1.5">
            {showKind && <Badge variant="secondary">{t(`projectKind.${project.context.kind}`)}</Badge>}
            {project.status !== undefined && <ProjectStatusBadge status={project.status} />}
          </div>
        )}
        <CardTitle>
          <Link
            to={projectPath(language, project)}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {localize(project.title, language)}
          </Link>
        </CardTitle>
        <CardDescription>{localize(project.summary, language)}</CardDescription>
      </CardHeader>
      {visibleSkills.length > 0 && (
        <CardContent className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {visibleSkills.map((id) => (
            <Badge key={id} variant="outline">
              {localize(getSkill(id).name, language)}
            </Badge>
          ))}
          {hiddenSkillCount > 0 && <Badge variant="outline">+{hiddenSkillCount}</Badge>}
        </CardContent>
      )}
    </Card>
  )
}