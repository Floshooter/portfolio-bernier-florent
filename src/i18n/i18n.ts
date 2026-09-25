import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import {
  defaultLanguage,
  detectPreferredLanguage,
  isSupportedLanguage,
  supportedLanguages,
  type Language,
} from "@/i18n/config"
import { en } from "@/i18n/locales/en"
import { fr } from "@/i18n/locales/fr"
import { stripBasePath } from "@/i18n/paths"

function getInitialLanguage(): Language {
  const segment = stripBasePath(window.location.pathname).split("/")[1]
  return isSupportedLanguage(segment) ? segment : detectPreferredLanguage()
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: getInitialLanguage(),
    fallbackLng: defaultLanguage,
    supportedLngs: [...supportedLanguages],
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error: unknown) => {
    console.error("Initialisation d'i18next impossible", error)
  })

export default i18n