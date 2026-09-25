import type { PartialDate, Period } from "@/content/types"
import type { Language } from "@/i18n/config"

export function formatPartialDate(value: PartialDate, language: Language): string {
  const [yearPart, monthPart, dayPart] = value.split("-")
  const year = Number(yearPart)
  const month = Number(monthPart)
  if (!Number.isInteger(year) || !Number.isInteger(month)) {
    return value
  }
  if (dayPart === undefined) {
    return new Intl.DateTimeFormat(language, { month: "long", year: "numeric" }).format(
      new Date(year, month - 1, 1),
    )
  }
  const day = Number(dayPart)
  if (!Number.isInteger(day)) {
    return value
  }
  return new Intl.DateTimeFormat(language, { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(year, month - 1, day),
  )
}

export function formatPeriod(period: Period, language: Language, presentLabel: string): string {
  const start = formatPartialDate(period.start, language)
  const end = period.end === null ? presentLabel : formatPartialDate(period.end, language)
  return start === end ? start : `${start} — ${end}`
}