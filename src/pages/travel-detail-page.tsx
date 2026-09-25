import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { Breadcrumb } from "@/components/content/breadcrumb"
import { Gallery } from "@/components/content/gallery"
import { PageHeader } from "@/components/page-header"
import { getTravel, getTravels } from "@/content"
import { localize } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { getCountryName } from "@/lib/country"
import { formatPeriod } from "@/lib/format"
import { NotFoundPage } from "@/pages/not-found-page"

const linkClassName = "underline-offset-4 hover:underline"

export function TravelDetailPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const { slug } = useParams()
  const travel = getTravel(slug)

  if (travel === undefined) {
    return <NotFoundPage />
  }

  const ordered = getTravels()
  const index = ordered.findIndex((item) => item.slug === travel.slug)
  const previous = ordered[index + 1]
  const next = index > 0 ? ordered[index - 1] : undefined
  const hasAdjacent = previous !== undefined || next !== undefined
  const title = localize(travel.title, language)
  const paragraphs = localize(travel.description, language)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0)

  return (
    <article className="space-y-8">
      <Breadcrumb items={[{ label: t("nav.travels"), to: localizedPath(language, "travels") }]} current={title} />
      <img
        src={assetPath(travel.cover)}
        alt=""
        className="aspect-video w-full rounded-2xl border object-cover lg:aspect-[21/9]"
      />
      <div className="space-y-3">
        <PageHeader title={title} subtitle={localize(travel.subtitle, language)} />
        <p className="font-mono text-sm text-muted-foreground">
          {getCountryName(travel.country, language)} · {formatPeriod(travel.period, language, t("period.present"))}
        </p>
      </div>
      <div className="max-w-3xl space-y-4 leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Gallery images={travel.images} title={title} />
      {hasAdjacent && (
        <nav
          aria-label={t("common.adjacentNavigation")}
          className="flex flex-wrap justify-between gap-4 border-t pt-4 text-sm"
        >
          {previous !== undefined ? (
            <Link to={localizedPath(language, "travels", previous.slug)} className={linkClassName}>
              ← {localize(previous.title, language)}
            </Link>
          ) : (
            <span />
          )}
          {next !== undefined ? (
            <Link to={localizedPath(language, "travels", next.slug)} className={linkClassName}>
              {localize(next.title, language)} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}