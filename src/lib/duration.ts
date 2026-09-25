import type { PartialDate, Period } from "@/content/types"

export interface Duration {
  readonly years: number
  readonly months: number
}

interface YearMonthParts {
  readonly year: number
  readonly month: number
}

function parseYearMonth(value: PartialDate): YearMonthParts | null {
  const [yearPart, monthPart] = value.split("-")
  const year = Number(yearPart)
  const month = Number(monthPart)
  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    return null
  }
  return { year, month }
}

export function computeDuration(period: Period, today: Date = new Date()): Duration | null {
  const start = parseYearMonth(period.start)
  const end =
    period.end === null
      ? { year: today.getFullYear(), month: today.getMonth() + 1 }
      : parseYearMonth(period.end)
  if (start === null || end === null) {
    return null
  }
  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1
  if (totalMonths <= 0) {
    return null
  }
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 }
}