import { Newspaper } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { localize } from "@/content/types"
import { getTheme } from "@/content/watch"
import type { WatchTopic } from "@/content/watch/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { formatPeriod } from "@/lib/format"

export function WatchCard({ topic }: { readonly topic: WatchTopic }) {
  const language = useLanguage()
  const { t } = useTranslation()

  return (
    <Card className="group relative h-full gap-0 overflow-hidden pt-0 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <div className="aspect-video overflow-hidden border-b bg-muted">
        {topic.cover !== undefined && topic.cover.length > 0 ? (
          <img
            src={assetPath(topic.cover)}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-linear-to-br from-highlight/15 via-accent to-primary/15">
            <Newspaper aria-hidden="true" className="size-10 text-primary/60" />
          </div>
        )}
      </div>
      <CardHeader className="gap-2 pt-5">
        {topic.themes.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {topic.themes.map((themeId) => (
              <Badge key={themeId} variant="secondary">
                {localize(getTheme(themeId).name, language)}
              </Badge>
            ))}
          </div>
        )}
        <CardTitle>
          <Link
            to={localizedPath(language, "watch", topic.slug)}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {localize(topic.title, language)}
          </Link>
        </CardTitle>
        <CardDescription>{localize(topic.summary, language)}</CardDescription>
      </CardHeader>
      {topic.period !== undefined && (
        <CardContent className="mt-auto pt-4">
          <p className="font-mono text-xs text-muted-foreground">
            {formatPeriod(topic.period, language, t("period.present"))}
          </p>
        </CardContent>
      )}
    </Card>
  )
}