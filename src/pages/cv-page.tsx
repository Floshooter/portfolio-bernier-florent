import { Download, ExternalLink, Printer } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router"
import { CvDocument } from "@/components/cv/cv-document"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { profile } from "@/content/profile"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"

type CvView = "web" | "pdf"

function isCvView(value: string | null): value is CvView {
  return value === "web" || value === "pdf"
}

export function CvPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedView = searchParams.get("view")
  const view: CvView = isCvView(requestedView) ? requestedView : "web"
  const localizedCv = profile.cv[language]
  const pdfPath = assetPath(localizedCv ?? profile.cv.fr)
  const isFallback = localizedCv === null

  const handleViewChange = (value: string): void => {
    if (!isCvView(value)) {
      return
    }
    setSearchParams(value === "pdf" ? { view: "pdf" } : {}, { replace: true })
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
        <PageHeader title={t("nav.cv")} />
        <div className="flex flex-wrap gap-2">
          {view === "web" && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                window.print()
              }}
            >
              <Printer aria-hidden="true" />
              {t("cv.print")}
            </Button>
          )}
          <Button asChild>
            <a href={pdfPath} download>
              <Download aria-hidden="true" />
              {t("cv.download")}
            </a>
          </Button>
        </div>
      </div>

      <Tabs value={view} onValueChange={handleViewChange}>
        <TabsList aria-label={t("cv.tabs.label")} className="print:hidden">
          <TabsTrigger value="web">{t("cv.tabs.web")}</TabsTrigger>
          <TabsTrigger value="pdf">{t("cv.tabs.pdf")}</TabsTrigger>
        </TabsList>

        <TabsContent value="web" className="mt-4">
          <CvDocument />
        </TabsContent>

        <TabsContent value="pdf" className="mt-4 space-y-4">
          {isFallback && (
            <p role="status" className="rounded-md border bg-muted p-3 text-sm">
              {t("cv.translationPending")}
            </p>
          )}
          <div className="flex justify-end">
            <Button asChild variant="ghost" size="sm">
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                {t("cv.open")}
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          </div>
          <object data={pdfPath} type="application/pdf" className="h-[80svh] w-full rounded-lg border">
            <p className="p-4">
              {t("cv.unsupported")}{" "}
              <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="underline">
                {t("cv.open")}
              </a>
            </p>
          </object>
        </TabsContent>
      </Tabs>
    </section>
  )
}