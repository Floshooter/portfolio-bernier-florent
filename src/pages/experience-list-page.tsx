import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Timeline, type TimelineItem } from "@/components/content/timeline"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { getExperiences } from "@/content"
import { contractTypes, localize, type ContractType } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

type ContractFilter = ContractType | "all"

export function ExperienceListPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const [filter, setFilter] = useState<ContractFilter>("all")
  const experiences = getExperiences()

  const availableContracts = contractTypes.filter((contract) =>
    experiences.some((experience) => experience.contract === contract),
  )
  const filterOptions: readonly ContractFilter[] = ["all", ...availableContracts]
  const visibleExperiences =
    filter === "all" ? experiences : experiences.filter((experience) => experience.contract === filter)

  const items: readonly TimelineItem[] = visibleExperiences.map((experience) => ({
    id: experience.slug,
    title: experience.company,
    subtitle: localize(experience.role, language),
    summary: localize(experience.summary, language),
    period: experience.period,
    to: localizedPath(language, "experience", experience.slug),
    logo: experience.logo,
    badge: t(`contract.${experience.contract}`),
  }))

  return (
    <section className="space-y-8">
      <PageHeader title={t("nav.experience")} subtitle={t("pages.experience.subtitle")} />
      {experiences.length === 0 ? (
        <p className="text-muted-foreground">{t("common.empty")}</p>
      ) : (
        <>
          {availableContracts.length > 1 && (
            <div role="group" aria-label={t("pages.experience.filters.label")} className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option}
                  type="button"
                  size="sm"
                  variant={filter === option ? "default" : "outline"}
                  aria-pressed={filter === option}
                  onClick={() => {
                    setFilter(option)
                  }}
                >
                  {option === "all" ? t("pages.experience.filters.all") : t(`contract.${option}`)}
                </Button>
              ))}
            </div>
          )}
          <Timeline label={t("nav.experience")} items={items} />
        </>
      )}
    </section>
  )
}