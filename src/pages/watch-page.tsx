import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"

export function WatchPage() {
  const { t } = useTranslation()
  return <PageHeader title={t("nav.watch")} subtitle={t("pages.watch.subtitle")} />
}
