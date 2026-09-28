import { motion } from "motion/react"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router"
import { NewsSection } from "@/components/news/news-section"
import { PageHeader } from "@/components/page-header"
import { WatchCard } from "@/components/watch/watch-card"
import { getWatchTopics } from "@/content/watch"

export function WatchPage() {
  const { t } = useTranslation()
  const { hash } = useLocation()
  const topics = getWatchTopics()

  useEffect(() => {
    if (hash.length <= 1) {
      return
    }
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth" })
  }, [hash])

  return (
    <section className="space-y-12">
      <PageHeader title={t("nav.watch")} subtitle={t("pages.watch.subtitle")} />
      <section aria-labelledby="watch-topics-title" className="space-y-4">
        <h2 id="watch-topics-title" className="text-2xl font-semibold tracking-tight">
          {t("pages.watch.topics")}
        </h2>
        {topics.length === 0 ? (
          <p className="text-muted-foreground">{t("common.empty")}</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <motion.li
                key={topic.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
              >
                <WatchCard topic={topic} />
              </motion.li>
            ))}
          </ul>
        )}
      </section>
      <NewsSection />
    </section>
  )
}