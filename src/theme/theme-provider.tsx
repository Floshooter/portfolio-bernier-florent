import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { applyTheme, readInitialTheme, storeTheme, type Theme } from "@/theme/theme"
import { ThemeContext, type ThemeContextValue } from "@/theme/theme-context"

interface ThemeProviderProps {
  readonly children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const persistTheme = useCallback((next: Theme) => {
    storeTheme(next)
    setTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark"
      storeTheme(next)
      return next
    })
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme: persistTheme, toggleTheme }),
    [theme, persistTheme, toggleTheme],
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}