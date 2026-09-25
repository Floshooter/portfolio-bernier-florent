import { ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { isSupportedLanguage, supportedLanguages } from "@/i18n/config"
import { languageFlags } from "@/i18n/language-flags"
import { replacePathLanguage } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

const flagClassName = "h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm ring-1 ring-black/10"

export function LanguageSwitcher() {
  const current = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const CurrentFlag = languageFlags[current]
  const triggerLabel = `${t("language.label")} : ${t(`language.${current}`)}`

  const handleSelect = (value: string): void => {
    if (!isSupportedLanguage(value) || value === current) {
      return
    }
    const destination = `${replacePathLanguage(location.pathname, value)}${location.search}${location.hash}`
    void navigate(destination)
    i18n.changeLanguage(value).catch((error: unknown) => {
      console.error("Changement de langue impossible", error)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="sm" className="gap-2" aria-label={triggerLabel} title={triggerLabel}>
          <CurrentFlag aria-hidden="true" className={flagClassName} />
          <span className="font-mono text-xs uppercase">{current}</span>
          <ChevronDown aria-hidden="true" className="size-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel>{t("language.label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={current} onValueChange={handleSelect}>
          {supportedLanguages.map((code) => {
            const Flag = languageFlags[code]
            return (
              <DropdownMenuRadioItem key={code} value={code} lang={code} className="gap-2.5">
                <Flag aria-hidden="true" className={flagClassName} />
                <span>{t(`language.${code}`)}</span>
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}