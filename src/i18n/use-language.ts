import { useParams } from "react-router"
import { isSupportedLanguage, type Language } from "@/i18n/config"

export function useLanguage(): Language {
  const { lang } = useParams()
  if (!isSupportedLanguage(lang)) {
    throw new Error(`Langue invalide dans l'URL : ${String(lang)}`)
  }
  return lang
}
