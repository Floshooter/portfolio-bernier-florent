import { MotionConfig } from "motion/react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Navigate, Outlet, useLocation, useNavigation, useParams } from "react-router"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { detectPreferredLanguage, isSupportedLanguage, storeLanguage } from "@/i18n/config"
import { readSidebarDefaultOpen } from "@/lib/sidebar-state"

export function LanguageLayout() {
  const { lang } = useParams()
  const location = useLocation()
  const navigation = useNavigation()
  const { i18n } = useTranslation()
  const [sidebarDefaultOpen] = useState(readSidebarDefaultOpen)
  const isNavigating = navigation.state === "loading"

  useEffect(() => {
    if (!isSupportedLanguage(lang)) {
      return
    }
    document.documentElement.lang = lang
    storeLanguage(lang)
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang).catch((error: unknown) => {
        console.error("Changement de langue impossible", error)
      })
    }
  }, [lang, i18n])

  if (!isSupportedLanguage(lang)) {
    return (
      <Navigate
        replace
        to={`/${detectPreferredLanguage()}${location.pathname}${location.search}${location.hash}`}
      />
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={0}>
        {isNavigating && (
          <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5 animate-pulse bg-primary" />
        )}
        <div className="[--header-height:4rem]">
          <SidebarProvider defaultOpen={sidebarDefaultOpen} className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset aria-busy={isNavigating}>
                <div className="mx-auto w-full max-w-5xl flex-1 p-6 md:p-10">
                  <Outlet />
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </TooltipProvider>
    </MotionConfig>
  )
}