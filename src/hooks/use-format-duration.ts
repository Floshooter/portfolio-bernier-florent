import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import type { Period } from "@/content/types"
import { computeDuration } from "@/lib/duration"

export function useFormatDuration(): (period: Period) => string | null {
  const { t } = useTranslation()

  return useCallback(
    (period: Period) => {
      const duration = computeDuration(period)
      if (duration === null) {
        return null
      }
      const parts: string[] = []
      if (duration.years > 0) {
        parts.push(t("duration.years", { count: duration.years }))
      }
      if (duration.months > 0) {
        parts.push(t("duration.months", { count: duration.months }))
      }
      return parts.length > 0 ? parts.join(" ") : null
    },
    [t],
  )
}