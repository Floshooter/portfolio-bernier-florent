import { Star } from "lucide-react"
import { useTranslation } from "react-i18next"
import { maxSkillLevel, type SkillLevel } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"

interface SkillRatingProps {
  readonly level: SkillLevel
}

const starPositions = Array.from({ length: maxSkillLevel }, (_, index) => index)

export function SkillRating({ level }: SkillRatingProps) {
  const language = useLanguage()
  const { t } = useTranslation()
  const formattedLevel = new Intl.NumberFormat(language, { maximumFractionDigits: 1 }).format(level)
  const label = t("skillLevel.label", { value: formattedLevel, max: String(maxSkillLevel) })

  return (
    <span role="img" aria-label={label} title={label} className="inline-flex items-center gap-0.5">
      {starPositions.map((position) => {
        const fill = Math.min(Math.max(level - position, 0), 1)
        return (
          <span key={position} aria-hidden="true" className="relative inline-flex size-4">
            <Star className="size-4 text-muted-foreground/30" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${String(fill * 100)}%` }}>
                <Star className="size-4 fill-primary text-primary" />
              </span>
            )}
          </span>
        )
      })}
    </span>
  )
}