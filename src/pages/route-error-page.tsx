import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { isRouteErrorResponse, useRouteError } from "react-router"
import { Button } from "@/components/ui/button"

const chunkErrorPattern = /dynamically imported module|Importing a module script failed|error loading dynamically/i
const reloadFlagKey = "chunk-reload-attempted"

function isChunkLoadError(error: unknown): boolean {
  return error instanceof Error && chunkErrorPattern.test(error.message)
}

function tryReloadOnce(): boolean {
  try {
    if (window.sessionStorage.getItem(reloadFlagKey) !== null) {
      window.sessionStorage.removeItem(reloadFlagKey)
      return false
    }
    window.sessionStorage.setItem(reloadFlagKey, "1")
  } catch (storageError: unknown) {
    console.warn("Session storage indisponible, rechargement sans protection", storageError)
  }
  window.location.reload()
  return true
}

export function RouteErrorPage() {
  const error = useRouteError()
  const { t } = useTranslation()
  const shouldReload = isChunkLoadError(error)

  useEffect(() => {
    if (shouldReload && tryReloadOnce()) {
      return
    }
    console.error(error)
  }, [error, shouldReload])

  const detail = isRouteErrorResponse(error)
    ? `${String(error.status)} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : null

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">{t("error.title")}</h1>
      <p className="text-muted-foreground">{t("error.description")}</p>
      {detail !== null && <code className="text-sm">{detail}</code>}
      <Button asChild>
        <a href={import.meta.env.BASE_URL}>{t("notFound.backHome")}</a>
      </Button>
    </main>
  )
}