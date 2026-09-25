import { useTranslation } from "react-i18next"
import { getSkill } from "@/content"
import type { SkillId } from "@/content/skills"
import { localize } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"

interface SkillListProps {
  readonly ids: readonly SkillId[]
}

export function SkillList({ ids }: SkillListProps) {
  const language = useLanguage()
  const { t } = useTranslation()

  if (ids.length === 0) {
    return null
  }

  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">{t("common.skills")}</h2>
      <ul className="flex flex-wrap gap-2">
        {ids.map((id) => (
          <li key={id} className="rounded-md border px-2 py-1 text-sm">
            {localize(getSkill(id).name, language)}
          </li>
        ))}
      </ul>
    </section>
  )
}
