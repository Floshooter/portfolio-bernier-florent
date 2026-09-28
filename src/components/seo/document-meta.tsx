import { useEffect } from "react"
import { useLocation } from "react-router"
import { useLanguage } from "@/i18n/use-language"
import { applyHeadTags } from "@/seo/apply-head-tags"
import { buildHeadTags, getRouteMeta } from "@/seo/route-meta"

export function DocumentMeta() {
  const language = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    applyHeadTags(buildHeadTags(getRouteMeta(language, pathname)))
  }, [language, pathname])

  return null
}