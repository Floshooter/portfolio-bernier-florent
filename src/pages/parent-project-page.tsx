import { useParams } from "react-router"
import { ProjectDetail } from "@/components/content/project-detail"
import { getParentProject } from "@/content"
import type { ProjectParentKind } from "@/content/types"
import { NotFoundPage } from "@/pages/not-found-page"

interface ParentProjectPageProps {
  readonly kind: ProjectParentKind
}

export function ParentProjectPage({ kind }: ParentProjectPageProps) {
  const { slug, projectSlug } = useParams()
  const project = getParentProject(kind, slug, projectSlug)

  if (project === undefined) {
    return <NotFoundPage />
  }

  return <ProjectDetail project={project} />
}