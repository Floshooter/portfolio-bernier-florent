export const supportedLanguages = ["fr", "en"] as const

export type Language = (typeof supportedLanguages)[number]

export const defaultLanguage: Language = "fr"

const storageKey = "lang"

export function isSupportedLanguage(value: unknown): value is Language {
  return typeof value === "string" && supportedLanguages.some((language) => language === value)
}

export function readStoredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(storageKey)
    return isSupportedLanguage(stored) ? stored : null
  } catch (error: unknown) {
    console.warn("Lecture de la langue enregistrée impossible", error)
    return null
  }
}

export function storeLanguage(language: Language): void {
  try {
    window.localStorage.setItem(storageKey, language)
  } catch (error: unknown) {
    console.warn("Enregistrement de la langue impossible", error)
  }
}

export function detectPreferredLanguage(): Language {
  const stored = readStoredLanguage()
  if (stored !== null) {
    return stored
  }
  for (const locale of window.navigator.languages) {
    const base = locale.split("-")[0]?.toLowerCase()
    if (isSupportedLanguage(base)) {
      return base
    }
  }
  return defaultLanguage
}
