import { BriefcaseBusiness } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ProfileIdentity } from "@/components/layout/profile-identity"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

export function SiteHeader() {
  const language = useLanguage()
  const { t } = useTranslation()
  const cvLabel = t("header.cv")

  return (
    <header className="sticky top-0 z-50 flex h-(--header-height) w-full shrink-0 items-center border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full min-w-0 items-center gap-2 px-4">
        <SidebarTrigger className="shrink-0 md:hidden" aria-label={t("sidebar.toggle")} />
        <ProfileIdentity nameClassName="hidden min-[400px]:inline" />
        <div className="ml-auto flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button asChild variant="ghost" size="icon">
            <Link to={localizedPath(language, "cv")} aria-label={cvLabel} title={cvLabel}>
              <BriefcaseBusiness aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}