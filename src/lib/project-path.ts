import type { Project } from "@/content/types"
import type { Language } from "@/i18n/config"
import { localizedPath } from "@/i18n/paths"

export function projectPath(language: Language, project: Project): string {
  const { context } = project
  switch (context.kind) {
    case "experience":
      return localizedPath(language, "experience", context.slug, project.slug)
    case "education":
      return localizedPath(language, "education", context.slug, project.slug)
    case "personal":
      return localizedPath(language, "projects", project.slug)
  }
}