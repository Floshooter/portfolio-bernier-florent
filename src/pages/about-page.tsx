import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { AboutSummaryCard } from "@/components/about/about-summary-card"
import { InterestsSection } from "@/components/about/interests-section"
import { ObjectivesSection } from "@/components/about/objectives-section"
import { Reveal } from "@/components/motion/reveal"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { about } from "@/content/about"
import { localize } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

export function AboutPage() {
  const language = useLanguage()
  const { t } = useTranslation()

  return (
    <div className="space-y-16">
      <PageHeader title={t("nav.about")} subtitle={t("pages.about.subtitle")} />

      <div className="grid gap-8 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <section aria-labelledby="presentation-title" className="space-y-4">
            <h2 id="presentation-title" className="text-2xl font-semibold tracking-tight">
              {t("pages.about.presentation")}
            </h2>
            {about.bio.map((paragraph) => (
              <p key={paragraph.fr} className="leading-relaxed text-muted-foreground first-of-type:text-foreground">
                {localize(paragraph, language)}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline">
                <Link to={localizedPath(language, "experience")}>
                  {t("pages.about.journeyLinks.experience")}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={localizedPath(language, "education")}>
                  {t("pages.about.journeyLinks.education")}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.1} className="self-start lg:sticky lg:top-24">
          <AboutSummaryCard />
        </Reveal>
      </div>

      <ObjectivesSection />
      <InterestsSection />
    </div>
  )
}