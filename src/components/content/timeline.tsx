import { AnimatePresence, motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { OrganizationLogo } from "@/components/content/organization-logo"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Period } from "@/content/types"
import { useFormatDuration } from "@/hooks/use-format-duration"
import { useLanguage } from "@/i18n/use-language"
import { formatPeriod } from "@/lib/format"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  readonly id: string
  readonly title: string
  readonly subtitle: string
  readonly summary: string
  readonly period: Period
  readonly to: string
  readonly logo: string | undefined
  readonly badge?: string
}

interface TimelineProps {
  readonly label: string
  readonly items: readonly TimelineItem[]
  readonly note?: string
}

const dotClassName = "absolute top-7 -left-[41px] size-4 rounded-full border-2 border-background"

function TimelineEntry({ item }: { readonly item: TimelineItem }) {
  const language = useLanguage()
  const { t } = useTranslation()
  const formatDuration = useFormatDuration()
  const isCurrent = item.period.end === null
  const duration = formatDuration(item.period)
  const periodLabel = formatPeriod(item.period, language, t("period.present"))

  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative"
    >
      <span aria-hidden="true" className={cn(dotClassName, isCurrent ? "bg-primary" : "bg-muted-foreground/40")}>
        {isCurrent && (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
        )}
      </span>
      <p className="mb-2 font-mono text-xs text-muted-foreground">
        {periodLabel}
        {duration !== null && <span> · {duration}</span>}
      </p>
      <Card className="relative transition-colors hover:border-primary/50">
        <CardHeader>
          <div className="flex items-start gap-4">
            <OrganizationLogo src={item.logo} name={item.title} />
            <div className="min-w-0 space-y-1.5">
              <CardTitle className="flex flex-wrap items-center gap-2">
                <Link
                  to={item.to}
                  className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
                >
                  {item.title}
                </Link>
                {item.badge !== undefined && <Badge variant="secondary">{item.badge}</Badge>}
              </CardTitle>
              <CardDescription>{item.subtitle}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{item.summary}</p>
        </CardContent>
      </Card>
    </motion.li>
  )
}

export function Timeline({ label, items, note }: TimelineProps) {
  return (
    <ol aria-label={label} className="ml-2 space-y-8 border-l pl-8">
      {note !== undefined && (
        <li className="relative">
          <span
            aria-hidden="true"
            className="absolute top-5 -left-[41px] size-4 rounded-full border-2 border-dashed border-muted-foreground bg-background"
          />
          <Card className="border-dashed">
            <CardHeader>
              <CardDescription className="text-base text-foreground">{note}</CardDescription>
            </CardHeader>
          </Card>
        </li>
      )}
      <AnimatePresence initial={false} mode="popLayout">
        {items.map((item) => (
          <TimelineEntry key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </ol>
  )
}