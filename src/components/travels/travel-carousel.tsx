import Autoplay from "embla-carousel-autoplay"
import { useReducedMotion } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { localize, type Travel } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { getCountryName } from "@/lib/country"
import { formatPeriod } from "@/lib/format"
import { cn } from "@/lib/utils"

interface TravelCarouselProps {
  readonly travels: readonly Travel[]
}

const autoplayDelay = 6000

export function TravelCarousel({ travels }: TravelCarouselProps) {
  const language = useLanguage()
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const plugins = useMemo(
    () =>
      shouldReduceMotion === true
        ? []
        : [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })],
    [shouldReduceMotion],
  )

  useEffect(() => {
    if (api === undefined) {
      return undefined
    }
    const handleSelect = (): void => {
      setSelectedIndex(api.selectedScrollSnap())
    }
    api.on("select", handleSelect)
    api.on("reInit", handleSelect)
    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  const hasMultiple = travels.length > 1

  return (
    <div className="space-y-4">
      <Carousel setApi={setApi} opts={{ loop: hasMultiple }} plugins={plugins} aria-label={t("pages.travels.carousel")}>
        <CarouselContent>
          {travels.map((travel, index) => (
            <CarouselItem key={travel.slug}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border sm:aspect-video lg:aspect-[21/9]">
                <img
                  src={assetPath(travel.cover)}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-6 text-white md:p-10">
                  <p className="font-mono text-xs text-white/80">
                    {getCountryName(travel.country, language)} ·{" "}
                    {formatPeriod(travel.period, language, t("period.present"))}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                    <Link
                      to={localizedPath(language, "travels", travel.slug)}
                      className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-white"
                    >
                      {localize(travel.title, language)}
                    </Link>
                  </h2>
                  <p className="text-white/90 md:text-lg">{localize(travel.subtitle, language)}</p>
                  <p className="line-clamp-2 max-w-2xl text-sm text-white/80">
                    {localize(travel.summary, language)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMultiple && (
          <>
            <CarouselPrevious aria-label={t("pages.travels.previous")} className="left-4 hidden md:flex" />
            <CarouselNext aria-label={t("pages.travels.next")} className="right-4 hidden md:flex" />
          </>
        )}
      </Carousel>
      {hasMultiple && (
        <div className="flex justify-center gap-2">
          {travels.map((travel, index) => (
            <button
              key={travel.slug}
              type="button"
              aria-label={t("pages.travels.goTo", { index: String(index + 1) })}
              aria-current={index === selectedIndex ? "true" : undefined}
              onClick={() => {
                api?.scrollTo(index)
              }}
              className={cn(
                "h-2 rounded-full transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
                index === selectedIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}