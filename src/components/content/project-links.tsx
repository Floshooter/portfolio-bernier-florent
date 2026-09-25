import { Link } from "react-router"
import { localize, type Project } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"

interface ProjectLinksProps {
  readonly title: string
  readonly projects: readonly Project[]
  readonly buildPath: (project: Project) => string
}

export function ProjectLinks({ title, projects, buildPath }: ProjectLinksProps) {
  const language = useLanguage()

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="rounded-lg border p-4">
            <Link
              to={buildPath(project)}
              className="font-medium underline-offset-4 hover:underline"
            >
              {localize(project.title, language)}
            </Link>
            <p className="text-sm text-muted-foreground">{localize(project.summary, language)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
