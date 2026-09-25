export const themes = ["light", "dark"] as const

export type Theme = (typeof themes)[number]

const storageKey = "theme"
const darkSchemeQuery = "(prefers-color-scheme: dark)"
const themeColors: Readonly<Record<Theme, string>> = {
  light: "#ffffff",
  dark: "#09090b",
}

export function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && themes.some((theme) => theme === value)
}

export function getDeviceTheme(): Theme {
  return window.matchMedia(darkSchemeQuery).matches ? "dark" : "light"
}

export function readInitialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(storageKey)
    return isTheme(stored) ? stored : getDeviceTheme()
  } catch (error: unknown) {
    console.warn("Lecture du thème enregistré impossible", error)
    return getDeviceTheme()
  }
}

export function storeTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(storageKey, theme)
  } catch (error: unknown) {
    console.warn("Enregistrement du thème impossible", error)
  }
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  const freezeTransitions = document.createElement("style")
  freezeTransitions.appendChild(
    document.createTextNode("*,*::before,*::after{transition:none!important}"),
  )
  document.head.appendChild(freezeTransitions)

  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", themeColors[theme])
  })

  window.getComputedStyle(document.body).getPropertyValue("opacity")
  window.setTimeout(() => {
    freezeTransitions.remove()
  }, 1)
}