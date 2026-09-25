import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import type { ProjectStatus } from "@/content/types"

type BadgeVariant = "default" | "secondary" | "outline"

const statusVariants: Readonly<Record<ProjectStatus, BadgeVariant>> = {
  "in-progress": "default",
  completed: "outline",
  paused: "secondary",
}

export function ProjectStatusBadge({ status }: { readonly status: ProjectStatus }) {
  const { t } = useTranslation()
  return <Badge variant={statusVariants[status]}>{t(`projectStatus.${status}`)}</Badge>
}