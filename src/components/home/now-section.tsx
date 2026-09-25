import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { OrganizationLogo } from "@/components/content/organization-logo"
import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentExperiences, getCurrentSchools, getExperiences, getSchools } from "@/content"
import { profile } from "@/content/profile"
import { localize, type Period } from "@/content/types"
import type { Language } from "@/i18n/config"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { formatPartialDate, formatPeriod } from "@/lib/format"

interface NowCardProps {
  readonly label: string
  readonly title: string
  readonly description: string
  readonly meta: string
  readonly to: string
  readonly logo: string | undefined
  readonly badge?: string
}

const labelClassName = "text-xs font-medium tracking-wider text-muted-foreground uppercase"

function NowCard({ label, title, description, meta, to, logo, badge }: NowCardProps) {
  return (
    <Card className="relative h-full transition-colors hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start gap-3">
          <OrganizationLogo src={logo} name={title} size="sm" />
          <div className="min-w-0 space-y-1.5">
            <p className={labelClassName}>{label}</p>
            <CardTitle className="flex flex-wrap items-center gap-2">
              <Link
                to={to}
                className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
              >
                {title}
              </Link>
              {badge !== undefined && <Badge variant="secondary">{badge}</Badge>}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-mono text-xs text-muted-foreground">{meta}</p>
      </CardContent>
    </Card>
  )
}

function StatusCard({ label, text }: { readonly label: string; readonly text: string }) {
  return (
    <Card className="h-full border-dashed">
      <CardHeader>
        <p className={labelClassName}>{label}</p>
        <CardDescription className="text-base text-foreground">{text}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function usePeriodLabel(): (period: Period, language: Language) => string {
  const { t } = useTranslation()
  return (period, language) =>
    period.end === null
      ? t("pages.home.now.since", { date: formatPartialDate(period.start, language) })
      : formatPeriod(period, language, t("period.present"))
}

export function NowSection() {
  const language = useLanguage()
  const { t } = useTranslation()
  const periodLabel = usePeriodLabel()
  const experience = getCurrentExperiences()[0] ?? getExperiences()[0]
  const currentSchool = getCurrentSchools()[0]
  const latestSchool = getSchools()[0]

  const renderEducation = () => {
    if (currentSchool !== undefined) {
      return (
        <NowCard
          label={t("pages.home.now.studies")}
          title={currentSchool.name}
          description={localize(currentSchool.degree, language)}
          meta={periodLabel(currentSchool.period, language)}
          to={localizedPath(language, "education", currentSchool.slug)}
          logo={currentSchool.logo}
        />
      )
    }
    if (profile.studyStatus !== null) {
      return <StatusCard label={t("pages.home.now.studies")} text={localize(profile.studyStatus, language)} />
    }
    if (latestSchool !== undefined) {
      return (
        <NowCard
          label={t("pages.home.now.studies")}
          title={latestSchool.name}
          description={localize(latestSchool.degree, language)}
          meta={periodLabel(latestSchool.period, language)}
          to={localizedPath(language, "education", latestSchool.slug)}
          logo={latestSchool.logo}
        />
      )
    }
    return null
  }

  return (
    <Reveal>
      <section aria-labelledby="now-title" className="space-y-4">
        <h2 id="now-title" className="text-2xl font-semibold tracking-tight">
          {t("pages.home.now.title")}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experience !== undefined && (
            <NowCard
              label={t("pages.home.now.work")}
              title={experience.company}
              description={localize(experience.role, language)}
              meta={`${periodLabel(experience.period, language)} · ${experience.location}`}
              to={localizedPath(language, "experience", experience.slug)}
              logo={experience.logo}
              badge={t(`contract.${experience.contract}`)}
            />
          )}
          {renderEducation()}
        </div>
      </section>
    </Reveal>
  )
}