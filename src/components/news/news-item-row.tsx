import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { localize } from "@/content/types"
import { getTheme } from "@/content/watch"
import { useLanguage } from "@/i18n/use-language"
import { isThemeId, type NewsItem } from "@/lib/news"
import { formatRelativeTime } from "@/lib/relative-time"
import { cn } from "@/lib/utils"

interface NewsItemRowProps {
  readonly item: NewsItem
  readonly now: number
  readonly isUnread?: boolean
  readonly compact?: boolean
}

export function NewsItemRow({ item, now, isUnread = false, compact = false }: NewsItemRowProps) {
  const language = useLanguage()
  const { t } = useTranslation()
  const knownThemes = item.themes.filter(isThemeId)

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-3 rounded-lg p-3 transition-colors outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        aria-hidden="true"
        className={cn("mt-2 size-2 shrink-0 rounded-full", isUnread ? "bg-highlight" : "bg-transparent")}
      />
      <span className="min-w-0 flex-1 space-y-1">
        <span
          lang={item.language}
          className={cn(
            "block leading-snug font-medium transition-colors group-hover:text-primary",
            compact && "line-clamp-2 text-sm",
          )}
        >
          {isUnread && <span className="sr-only">{t("news.new")} : </span>}
          {item.title}
        </span>
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <span>{item.source}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={item.publishedAt}>{formatRelativeTime(item.publishedAt, language, now)}</time>
          {!compact &&
            knownThemes.map((themeId) => (
              <Badge key={themeId} variant="outline" className="text-[10px]">
                {localize(getTheme(themeId).name, language)}
              </Badge>
            ))}
        </span>
      </span>
      <ExternalLink
        aria-hidden="true"
        className="mt-1 size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60"
      />
    </a>
  )
}