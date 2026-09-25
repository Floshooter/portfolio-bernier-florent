import { isSupportedLanguage, type Language } from "@/i18n/config"

const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "")

export const routerBasename = basePath === "" ? "/" : basePath

export function stripBasePath(pathname: string): string {
  if (basePath === "" || !pathname.startsWith(basePath)) {
    return pathname
  }
  const rest = pathname.slice(basePath.length)
  return rest.startsWith("/") ? rest : `/${rest}`
}

export function localizedPath(language: Language, ...segments: readonly string[]): string {
  const cleaned = segments
    .map((segment) => segment.replace(/^\/+|\/+$/g, ""))
    .filter((segment) => segment.length > 0)
  return cleaned.length === 0 ? `/${language}` : `/${language}/${cleaned.join("/")}`
}

export function replacePathLanguage(pathname: string, language: Language): string {
  const segments = pathname.split("/").filter((segment) => segment.length > 0)
  const rest = isSupportedLanguage(segments[0]) ? segments.slice(1) : segments
  return localizedPath(language, ...rest)
}