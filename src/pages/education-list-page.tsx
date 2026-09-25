import { useTranslation } from "react-i18next"
import { Timeline, type TimelineItem } from "@/components/content/timeline"
import { PageHeader } from "@/components/page-header"
import { getCurrentSchools, getSchools } from "@/content"
import { profile } from "@/content/profile"
import { localize } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

export function EducationListPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const schools = getSchools()
  const note =
    getCurrentSchools().length === 0 && profile.studyStatus !== null
      ? localize(profile.studyStatus, language)
      : undefined

  const items: readonly TimelineItem[] = schools.map((school) => ({
    id: school.slug,
    title: school.name,
    subtitle: localize(school.degree, language),
    summary: localize(school.summary, language),
    period: school.period,
    to: localizedPath(language, "education", school.slug),
    logo: school.logo,
  }))

  return (
    <section className="space-y-8">
      <PageHeader title={t("nav.education")} subtitle={t("pages.education.subtitle")} />
      {schools.length === 0 && note === undefined ? (
        <p className="text-muted-foreground">{t("common.empty")}</p>
      ) : (
        <Timeline label={t("nav.education")} items={items} note={note} />
      )}
    </section>
  )
}