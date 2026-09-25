import { Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/theme/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const label = theme === "dark" ? t("theme.toLight") : t("theme.toDark")
  const Icon = theme === "dark" ? Sun : Moon

  return (
    <Button type="button" variant="ghost" size="icon" aria-label={label} title={label} onClick={toggleTheme}>
      <Icon aria-hidden="true" />
    </Button>
  )
}