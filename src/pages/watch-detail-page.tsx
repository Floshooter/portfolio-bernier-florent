import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { Breadcrumb } from "@/components/content/breadcrumb"
import { DocumentList } from "@/components/content/document-list"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { getSchool, getSchoolYear } from "@/content"
import { localize } from "@/content/types"
import { getTheme, getWatchTopic } from "@/content/watch"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { formatPeriod } from "@/lib/format"
import { NotFoundPage } from "@/pages/not-found-page"

const linkClassName = "text-primary underline-offset-4 hover:underline"

export function WatchDetailPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const { slug } = useParams()
  const topic = getWatchTopic(slug)

  if (topic === undefined) {
    return <NotFoundPage />
  }

  const title = localize(topic.title, language)
  const school = topic.school === undefined ? undefined : getSchool(topic.school.slug)
  const year =
    school === undefined || topic.school?.year === undefined
      ? undefined
      : getSchoolYear(school, topic.school.year)
  const paragraphs = localize(topic.description, language)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0)

  return (
    <article className="space-y-8">
      <Breadcrumb items={[{ label: t("nav.watch"), to: localizedPath(language, "watch") }]} current={title} />

      {topic.cover !== undefined && topic.cover.length > 0 && (
        <img
          src={assetPath(topic.cover)}
          alt=""
          className="aspect-[21/9] w-full rounded-xl border object-cover"
        />
      )}

      <div className="space-y-4">
        {topic.themes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topic.themes.map((themeId) => (
              <Badge key={themeId} variant="secondary">
                {localize(getTheme(themeId).name, language)}
              </Badge>
            ))}
          </div>
        )}
        <PageHeader title={title} subtitle={localize(topic.summary, language)} />
        {(topic.period !== undefined || school !== undefined) && (
          <p className="text-sm text-muted-foreground">
            {topic.period !== undefined && (
              <span className="font-mono">{formatPeriod(topic.period, language, t("period.present"))}</span>
            )}
            {topic.period !== undefined && school !== undefined && <span> · </span>}
            {school !== undefined && (
              <span>
                {t("pages.watch.school")}{" "}
                <Link
                  to={
                    year === undefined
                      ? localizedPath(language, "education", school.slug)
                      : localizedPath(language, "education", school.slug, "years", year.id)
                  }
                  className={linkClassName}
                >
                  {school.name}
                  {year !== undefined && ` · ${localize(year.label, language)}`}
                </Link>
              </span>
            )}
          </p>
        )}
      </div>

      <div className="max-w-3xl space-y-4 leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <DocumentList documents={topic.documents} />

      {topic.sources.length > 0 && (
        <section aria-labelledby="watch-sources-title" className="space-y-2">
          <h2 id="watch-sources-title" className="text-xl font-semibold">
            {t("pages.watch.sources")}
          </h2>
          <ul className="space-y-1.5">
            {topic.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 ${linkClassName}`}
                >
                  {localize(source.label, language)}
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}