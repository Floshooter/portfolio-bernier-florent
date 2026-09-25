import { createContext, use } from "react"
import type { Theme } from "@/theme/theme"

export interface ThemeContextValue {
  readonly theme: Theme
  readonly setTheme: (theme: Theme) => void
  readonly toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme(): ThemeContextValue {
  const context = use(ThemeContext)
  if (context === null) {
    throw new Error("useTheme doit être utilisé à l'intérieur de <ThemeProvider>")
  }
  return context
}