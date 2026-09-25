import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { about } from "@/content/about"
import { localize, type ObjectiveStatus } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "secondary" | "outline"

const statusVariants: Readonly<Record<ObjectiveStatus, BadgeVariant>> = {
  "in-progress": "default",
  planned: "secondary",
  done: "outline",
}

export function ObjectivesSection() {
  const language = useLanguage()
  const { t } = useTranslation()

  if (about.objectives.length === 0) {
    return null
  }

  return (
    <Reveal>
      <section aria-labelledby="objectives-title" className="space-y-6">
        <h2 id="objectives-title" className="text-2xl font-semibold tracking-tight">
          {t("pages.about.objectives.title")}
        </h2>
        <ol className="space-y-6 border-l pl-6">
          {about.objectives.map((objective, index) => (
            <motion.li
              key={objective.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
              className="relative space-y-1"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1.5 -left-[31px] size-3 rounded-full border-2 border-background",
                  objective.status === "in-progress" ? "bg-primary" : "bg-muted-foreground/40",
                )}
              />
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{localize(objective.title, language)}</h3>
                <Badge variant={statusVariants[objective.status]}>
                  {t(`pages.about.objectives.status.${objective.status}`)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{localize(objective.description, language)}</p>
            </motion.li>
          ))}
        </ol>
      </section>
    </Reveal>
  )
}