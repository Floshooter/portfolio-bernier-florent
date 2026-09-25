import "@/i18n/i18n"
import "@/index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "@/App"
import { ThemeProvider } from "@/theme/theme-provider"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Élément #root introuvable dans index.html")
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)