import { FR, GB } from "country-flag-icons/react/3x2"
import type { Language } from "@/i18n/config"

export type FlagComponent = typeof FR

export const languageFlags: Readonly<Record<Language, FlagComponent>> = {
  fr: FR,
  en: GB,
}