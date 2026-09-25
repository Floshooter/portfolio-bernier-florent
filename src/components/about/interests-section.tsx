import { ArrowRight, Car, Cpu, Gamepad2, Plane, Radio, Trophy, type LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Reveal } from "@/components/motion/reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { about } from "@/content/about"
import { localize, type Interest, type InterestIcon } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

const interestIcons: Readonly<Record<InterestIcon, LucideIcon>> = {
  gamepad: Gamepad2,
  trophy: Trophy,
  radio: Radio,
  plane: Plane,
  cpu: Cpu,
  car: Car,
}

function InterestCard({ interest }: { readonly interest: Interest }) {
  const language = useLanguage()
  const { t } = useTranslation()
  const Icon = interestIcons[interest.icon]
  const title = localize(interest.title, language)

  return (
    <Card className="relative h-full transition-colors hover:border-primary/50">
      <CardHeader>
        <span className="mb-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{localize(interest.description, language)}</CardDescription>
      </CardHeader>
      {interest.path !== undefined && (
        <CardContent className="mt-auto">
          <Link
            to={localizedPath(language, interest.path)}
            aria-label={`${t("pages.about.interests.learnMore")} : ${title}`}
            className="inline-flex items-center gap-1 text-sm text-primary outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {t("pages.about.interests.learnMore")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </CardContent>
      )}
    </Card>
  )
}

export function InterestsSection() {
  const { t } = useTranslation()

  if (about.interests.length === 0) {
    return null
  }

  return (
    <Reveal>
      <section aria-labelledby="interests-title" className="space-y-6">
        <h2 id="interests-title" className="text-2xl font-semibold tracking-tight">
          {t("pages.about.interests.title")}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.interests.map((interest, index) => (
            <motion.li
              key={interest.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
            >
              <InterestCard interest={interest} />
            </motion.li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}