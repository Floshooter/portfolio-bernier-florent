import { useTranslation } from "react-i18next"

export function AppLoader() {
  const { t } = useTranslation()

  return (
    <div role="status" aria-live="polite" className="flex min-h-svh items-center justify-center">
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent motion-reduce:animate-none"
      />
      <span className="sr-only">{t("common.loading")}</span>
    </div>
  )
}