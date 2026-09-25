import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { AnimatedCounter } from "@/components/motion/animated-counter"
import { Reveal } from "@/components/motion/reveal"
import { getSiteStats } from "@/content"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

type StatKey = "experiences" | "projects" | "skills" | "countries"

interface StatItem {
  readonly key: StatKey
  readonly value: number
  readonly path: string | null
}

function StatCard({ item }: { readonly item: StatItem }) {
  const language = useLanguage()
  const { t } = useTranslation()
  const label = t(`pages.home.stats.${item.key}`)

  return (
    <div className="relative flex flex-col-reverse gap-1 rounded-xl border bg-card p-5 transition-colors hover:border-primary/50">
      <dt className="text-sm text-muted-foreground">
        {item.path === null ? (
          label
        ) : (
          <Link
            to={localizedPath(language, item.path)}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {label}
          </Link>
        )}
      </dt>
      <dd className="text-4xl font-semibold tracking-tight text-primary tabular-nums">
        <AnimatedCounter value={item.value} />
      </dd>
    </div>
  )
}

export function StatsSection() {
  const { t } = useTranslation()
  const stats = getSiteStats()
  const items: readonly StatItem[] = [
    { key: "experiences", value: stats.experiences, path: "experience" },
    { key: "projects", value: stats.projects, path: null },
    { key: "skills", value: stats.skills, path: "skills" },
    { key: "countries", value: stats.countries, path: "travels" },
  ]

  return (
    <Reveal>
      <section aria-labelledby="stats-title">
        <h2 id="stats-title" className="sr-only">
          {t("pages.home.stats.title")}
        </h2>
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <StatCard key={item.key} item={item} />
          ))}
        </dl>
      </section>
    </Reveal>
  )
}