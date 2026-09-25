import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

export function NotFoundPage() {
  const language = useLanguage()
  const { t } = useTranslation()

  return (
    <section className="flex flex-col items-start gap-4">
      <PageHeader title={t("notFound.title")} subtitle={t("notFound.description")} />
      <Button asChild>
        <Link to={localizedPath(language)}>{t("notFound.backHome")}</Link>
      </Button>
    </section>
  )
}
