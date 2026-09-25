import { ExternalLink, FileText, Mail } from "lucide-react"
import { motion, type Variants } from "motion/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { profile } from "@/content/profile"
import { localize } from "@/content/types"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function HeroSection() {
  const language = useLanguage()
  const { t } = useTranslation()

  return (
    <motion.section
      aria-labelledby="hero-title"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left"
    >
      <motion.div variants={itemVariants} className="shrink-0">
        <Avatar className="size-32 ring-4 ring-primary/20 md:size-40">
          <AvatarImage src={assetPath(profile.photo)} alt={profile.fullName} />
          <AvatarFallback className="text-3xl">{profile.initials}</AvatarFallback>
        </Avatar>
      </motion.div>
      <div className="space-y-4">
        <motion.h1
          id="hero-title"
          variants={itemVariants}
          className="text-4xl font-semibold tracking-tight md:text-5xl"
        >
          {profile.fullName}
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl font-medium text-primary">
          {localize(profile.title, language)}
        </motion.p>
        <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
          {localize(profile.tagline, language)}
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:justify-start">
          <Button asChild>
            <Link to={localizedPath(language, "cv")}>
              <FileText aria-hidden="true" />
              {t("pages.home.hero.cv")}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              {t("pages.home.hero.contact")}
            </a>
          </Button>
          {profile.socials.map((social) => (
            <Button key={social.network} asChild variant="ghost">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.label}
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}