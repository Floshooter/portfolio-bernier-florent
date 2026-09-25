import { ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

export interface BreadcrumbItem {
  readonly label: string
  readonly to: string
}

interface BreadcrumbProps {
  readonly items: readonly BreadcrumbItem[]
  readonly current: string
}

export function Breadcrumb({ items, current }: BreadcrumbProps) {
  const { t } = useTranslation()

  return (
    <nav aria-label={t("common.breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.to} className="flex items-center gap-1.5">
            <Link to={item.to} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
            <ChevronRight aria-hidden="true" className="size-3.5" />
          </li>
        ))}
        <li aria-current="page" className="font-medium text-foreground">
          {current}
        </li>
      </ol>
    </nav>
  )
}