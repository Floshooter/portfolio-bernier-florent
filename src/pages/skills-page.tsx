import { useTranslation } from "react-i18next"
import { SkillRating } from "@/components/content/skill-rating"
import { Reveal } from "@/components/motion/reveal"
import { PageHeader } from "@/components/page-header"
import { getSkillGroups, type SkillGroup } from "@/content"
import { localize } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"

type SkillGroupItem = SkillGroup["items"][number]

function byLevelDesc(a: SkillGroupItem, b: SkillGroupItem): number {
  return (b.skill.level ?? 0) - (a.skill.level ?? 0)
}

export function SkillsPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const groups = getSkillGroups()

  return (
    <section className="space-y-10">
      <PageHeader title={t("nav.skills")} subtitle={t("pages.skills.subtitle")} />
      {groups.map((group, index) => (
        <Reveal key={group.category} delay={index * 0.05}>
          <section aria-labelledby={`skills-${group.category}`} className="space-y-3">
            <h2 id={`skills-${group.category}`} className="text-xl font-semibold tracking-tight">
              {t(`skillCategory.${group.category}`)}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[...group.items].sort(byLevelDesc).map(({ id, skill }) => (
                <li
                  key={id}
                  className="flex items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3"
                >
                  <span className="font-medium">{localize(skill.name, language)}</span>
                  {skill.level !== undefined && <SkillRating level={skill.level} />}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      ))}
    </section>
  )
}