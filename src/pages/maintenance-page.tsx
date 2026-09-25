import { useTranslation } from "react-i18next"

export function MaintenancePage() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-2 p-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">{t("maintenance.title")}</h1>
      <p className="text-muted-foreground">{t("maintenance.description")}</p>
    </main>
  )
}
