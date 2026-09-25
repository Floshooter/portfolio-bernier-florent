import type { Language } from "@/i18n/config"

export function getCountryName(code: string, language: Language): string {
  try {
    return new Intl.DisplayNames([language], { type: "region" }).of(code) ?? code
  } catch (error: unknown) {
    console.warn(`Nom du pays introuvable pour le code "${code}"`, error)
    return code
  }
}