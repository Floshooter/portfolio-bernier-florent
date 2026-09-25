import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { localize, type Travel } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { getCountryName } from "@/lib/country"
import { formatPeriod } from "@/lib/format"

export function TravelCard({ travel }: { readonly travel: Travel }) {
  const language = useLanguage()
  const { t } = useTranslation()

  return (
    <Card className="group relative h-full gap-0 overflow-hidden pt-0 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <div className="aspect-video overflow-hidden border-b bg-muted">
        <img
          src={assetPath(travel.cover)}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="gap-1.5 pt-5">
        <p className="font-mono text-xs text-muted-foreground">
          {getCountryName(travel.country, language)} · {formatPeriod(travel.period, language, t("period.present"))}
        </p>
        <CardTitle>
          <Link
            to={localizedPath(language, "travels", travel.slug)}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {localize(travel.title, language)}
          </Link>
        </CardTitle>
        <CardDescription>{localize(travel.subtitle, language)}</CardDescription>
      </CardHeader>
    </Card>
  )
}