import { useParams } from "react-router"
import { ProjectDetail } from "@/components/content/project-detail"
import { getPersonalProject } from "@/content"
import { NotFoundPage } from "@/pages/not-found-page"

export function PersonalProjectPage() {
  const { slug } = useParams()
  const project = getPersonalProject(slug)

  if (project === undefined) {
    return <NotFoundPage />
  }

  return <ProjectDetail project={project} />
}