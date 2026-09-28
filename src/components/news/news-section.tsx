import { useState } from "react"
import { useTranslation } from "react-i18next"
import { NewsItemRow } from "@/components/news/news-item-row"
import { Button } from "@/components/ui/button"
import { localize } from "@/content/types"
import { getTheme } from "@/content/watch"
import { themes, type ThemeId } from "@/content/watch/themes"
import { useNews } from "@/hooks/use-news"
import { useNewsLastSeen } from "@/hooks/use-news-last-seen"
import { useLanguage } from "@/i18n/use-language"
import { formatRelativeTime } from "@/lib/relative-time"

type ThemeFilter = ThemeId | "all"

const pageSize = 12

export function NewsSection() {
  const language = useLanguage()
  const { t } = useTranslation()
  const news = useNews()
  const [lastSeen] = useNewsLastSeen()
  const [filter, setFilter] = useState<ThemeFilter>("all")
  const [visibleCount, setVisibleCount] = useState(pageSize)
  const [now] = useState(() => Date.now())

  const items = news.status === "ready" ? news.data.items : []
  const availableThemes = (Object.keys(themes) as ThemeId[]).filter((id) =>
    items.some((item) => item.themes.includes(id)),
  )
  const filterOptions: readonly ThemeFilter[] = ["all", ...availableThemes]
  const filteredItems = filter === "all" ? items : items.filter((item) => item.themes.includes(filter))
  const visibleItems = filteredItems.slice(0, visibleCount)

  const handleFilter = (option: ThemeFilter): void => {
    setFilter(option)
    setVisibleCount(pageSize)
  }

  const renderContent = () => {
    if (news.status === "loading") {
      return <p className="text-muted-foreground">{t("common.loading")}</p>
    }
    if (news.status === "error") {
      return <p className="text-muted-foreground">{t("news.error")}</p>
    }
    if (items.length === 0) {
      return <p className="text-muted-foreground">{t("news.empty")}</p>
    }
    return (
      <>
        {availableThemes.length > 1 && (
          <div role="group" aria-label={t("news.filters.label")} className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={filter === option ? "default" : "outline"}
                aria-pressed={filter === option}
                onClick={() => {
                  handleFilter(option)
                }}
              >
                {option === "all" ? t("news.filters.all") : localize(getTheme(option).name, language)}
              </Button>
            ))}
          </div>
        )}
        <ul className="divide-y rounded-xl border bg-card p-1">
          {visibleItems.map((item) => (
            <li key={item.id}>
              <NewsItemRow item={item} now={now} isUnread={Date.parse(item.publishedAt) > lastSeen} />
            </li>
          ))}
        </ul>
        {filteredItems.length > visibleCount && (
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setVisibleCount((count) => count + pageSize)
            }}
          >
            {t("news.loadMore")}
          </Button>
        )}
      </>
    )
  }

  return (
    <section id="news" aria-labelledby="news-title" className="scroll-mt-24 space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="space-y-1">
          <h2 id="news-title" className="text-2xl font-semibold tracking-tight">
            {t("news.title")}
          </h2>
          <p className="text-muted-foreground">{t("news.subtitle")}</p>
        </div>
        {news.status === "ready" && (
          <p className="font-mono text-xs text-muted-foreground">
            {t("news.updated", { date: formatRelativeTime(news.data.generatedAt, language, now) })}
          </p>
        )}
      </div>
      {renderContent()}
    </section>
  )
}