import { Bell } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { NewsItemRow } from "@/components/news/news-item-row"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useNews } from "@/hooks/use-news"
import { useNewsLastSeen } from "@/hooks/use-news-last-seen"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { formatRelativeTime } from "@/lib/relative-time"

const previewLimit = 6
const maxBadgeCount = 9

export function NewsBell() {
  const language = useLanguage()
  const { t } = useTranslation()
  const news = useNews()
  const [lastSeen, markSeen] = useNewsLastSeen()
  const [open, setOpen] = useState(false)
  const [now] = useState(() => Date.now())

  const items = news.status === "ready" ? news.data.items : []
  const unreadCount = items.filter((item) => Date.parse(item.publishedAt) > lastSeen).length
  const hasUnread = unreadCount > 0
  const label = hasUnread ? t("news.unread", { count: unreadCount }) : t("news.title")

  const handleOpenChange = (nextOpen: boolean): void => {
    setOpen(nextOpen)
    const latest = items[0]
    if (!nextOpen && latest !== undefined) {
      markSeen(latest.publishedAt)
    }
  }

  const renderContent = () => {
    if (news.status === "loading") {
      return <p className="p-4 text-sm text-muted-foreground">{t("common.loading")}</p>
    }
    if (news.status === "error") {
      return <p className="p-4 text-sm text-muted-foreground">{t("news.error")}</p>
    }
    if (items.length === 0) {
      return <p className="p-4 text-sm text-muted-foreground">{t("news.empty")}</p>
    }
    return (
      <ul>
        {items.slice(0, previewLimit).map((item) => (
          <li key={item.id}>
            <NewsItemRow item={item} now={now} isUnread={Date.parse(item.publishedAt) > lastSeen} compact />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button type="button" variant="ghost" size="icon" className="relative" aria-label={label} title={label}>
          <motion.span
            aria-hidden="true"
            className="flex origin-top"
            animate={hasUnread ? { rotate: [0, 14, -12, 8, -4, 0] } : { rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.6 }}
          >
            <Bell />
          </motion.span>
          {hasUnread && (
            <span
              aria-hidden="true"
              className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-highlight px-1 text-[10px] leading-none font-semibold text-highlight-foreground ring-2 ring-background"
            >
              {unreadCount > maxBadgeCount ? `${String(maxBadgeCount)}+` : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[min(24rem,calc(100vw-2rem))] p-0">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <p className="font-semibold">{t("news.title")}</p>
          {news.status === "ready" && (
            <p className="text-xs text-muted-foreground">
              {t("news.updated", { date: formatRelativeTime(news.data.generatedAt, language, now) })}
            </p>
          )}
        </div>
        <div className="max-h-96 overflow-y-auto p-1">{renderContent()}</div>
        <div className="border-t p-2">
          <Button asChild variant="ghost" className="w-full">
            <Link
              to={`${localizedPath(language, "watch")}#news`}
              onClick={() => {
                handleOpenChange(false)
              }}
            >
              {t("news.seeAll")}
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}