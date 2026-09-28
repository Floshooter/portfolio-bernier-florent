import type { Language } from "@/i18n/config"

const units: readonly (readonly [Intl.RelativeTimeFormatUnit, number])[] = [
  ["year", 31_536_000],
  ["month", 2_592_000],
  ["week", 604_800],
  ["day", 86_400],
  ["hour", 3_600],
  ["minute", 60],
]

export function formatRelativeTime(isoDate: string, language: Language, now: number): string {
  const formatter = new Intl.RelativeTimeFormat(language, { numeric: "auto" })
  const diffSeconds = Math.round((Date.parse(isoDate) - now) / 1000)
  for (const [unit, seconds] of units) {
    if (Math.abs(diffSeconds) >= seconds) {
      return formatter.format(Math.round(diffSeconds / seconds), unit)
    }
  }
  return formatter.format(0, "minute")
}