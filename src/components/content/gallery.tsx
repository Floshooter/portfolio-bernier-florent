import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, type KeyboardEvent } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { localize, type GalleryImage } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"

interface GalleryProps {
  readonly images: readonly GalleryImage[]
  readonly title: string
}

export function Gallery({ images, title }: GalleryProps) {
  const language = useLanguage()
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return null
  }

  const activeImage = activeIndex === null ? undefined : images[activeIndex]
  const position =
    activeIndex === null
      ? ""
      : t("gallery.position", { current: String(activeIndex + 1), total: String(images.length) })

  const showPrevious = (): void => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length))
  }

  const showNext = (): void => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % images.length))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      showPrevious()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      showNext()
    }
  }

  return (
    <section aria-labelledby="gallery-title" className="space-y-3">
      <h2 id="gallery-title" className="text-xl font-semibold">
        {t("gallery.title")}
      </h2>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image, index) => {
          const alt = localize(image.alt, language)
          return (
            <li key={image.src}>
              <button
                type="button"
                aria-label={`${t("gallery.open")} : ${alt}`}
                onClick={() => {
                  setActiveIndex(index)
                }}
                className="group block w-full overflow-hidden rounded-lg border outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={assetPath(image.src)}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </li>
          )
        })}
      </ul>
      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActiveIndex(null)
          }
        }}
      >
        <DialogContent className="gap-2 p-2 sm:max-w-5xl" onKeyDown={handleKeyDown}>
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogDescription className="sr-only">{position}</DialogDescription>
          {activeImage !== undefined && (
            <img
              src={assetPath(activeImage.src)}
              alt={localize(activeImage.alt, language)}
              className="max-h-[80svh] w-full rounded-md object-contain"
            />
          )}
          {images.length > 1 && (
            <div className="flex items-center justify-between gap-2 px-2 pb-1">
              <Button type="button" variant="ghost" size="icon" aria-label={t("gallery.previous")} onClick={showPrevious}>
                <ChevronLeft aria-hidden="true" />
              </Button>
              <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
                {position}
              </span>
              <Button type="button" variant="ghost" size="icon" aria-label={t("gallery.next")} onClick={showNext}>
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}