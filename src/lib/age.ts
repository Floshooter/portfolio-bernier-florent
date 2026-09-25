import type { YearMonthDay } from "@/content/types"

export function computeAge(birthDate: YearMonthDay, today: Date = new Date()): number | null {
  const [year, month, day] = birthDate.split("-").map(Number)
  if (
    year === undefined ||
    month === undefined ||
    day === undefined ||
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    return null
  }
  const currentMonth = today.getMonth() + 1
  const hasHadBirthday =
    currentMonth > month || (currentMonth === month && today.getDate() >= day)
  const age = today.getFullYear() - year - (hasHadBirthday ? 0 : 1)
  return age >= 0 ? age : null
}