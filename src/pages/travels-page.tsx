import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Reveal } from "@/components/motion/reveal"
import { PageHeader } from "@/components/page-header"
import { TravelCard } from "@/components/travels/travel-card"
import { TravelCarousel } from "@/components/travels/travel-carousel"
import { getTravels } from "@/content"

export function TravelsPage() {
  const { t } = useTranslation()
  const travels = getTravels()

  return (
    <section className="space-y-10">
      <PageHeader title={t("nav.travels")} subtitle={t("pages.travels.subtitle")} />
      {travels.length === 0 ? (
        <p className="text-muted-foreground">{t("common.empty")}</p>
      ) : (
        <>
          <Reveal>
            <TravelCarousel travels={travels} />
          </Reveal>
          <section aria-labelledby="all-travels-title" className="space-y-4">
            <h2 id="all-travels-title" className="text-2xl font-semibold tracking-tight">
              {t("pages.travels.all")}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {travels.map((travel, index) => (
                <motion.li
                  key={travel.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                >
                  <TravelCard travel={travel} />
                </motion.li>
              ))}
            </ul>
          </section>
        </>
      )}
    </section>
  )
}