import { useTranslation } from "react-i18next"
import { localize, type DocumentFile } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"

interface DocumentListProps {
  readonly documents: readonly DocumentFile[]
}

const linkClassName = "underline-offset-4 hover:underline"

export function DocumentList({ documents }: DocumentListProps) {
  const language = useLanguage()
  const { t } = useTranslation()

  if (documents.length === 0) {
    return null
  }

  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">{t("common.documents")}</h2>
      <ul className="list-inside list-disc">
        {documents.map((file) => (
          <li key={file.path}>
            <a href={assetPath(file.path)} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              {localize(file.label, language)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}