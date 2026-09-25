import { Download, ExternalLink, Mail, Settings, Wrench } from "lucide-react"
import { MotionConfig, motion, type Variants } from "motion/react"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { profile } from "@/content/profile"
import { localize } from "@/content/types"
import {
  defaultLanguage,
  isSupportedLanguage,
  storeLanguage,
  supportedLanguages,
  type Language,
} from "@/i18n/config"
import { languageFlags } from "@/i18n/language-flags"
import { assetPath } from "@/lib/assets"

const currentYear = new Date().getFullYear()

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const gridStyle = {
  backgroundImage:
    "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
  WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
} as const

const flagClassName = "h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm ring-1 ring-black/10"

function AnimatedBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-60" style={gridStyle} />
      <motion.div
        className="absolute -top-40 -left-40 size-[28rem] rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 90, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 -bottom-40 size-[28rem] rounded-full bg-highlight/20 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

function MaintenanceIcon() {
  return (
    <div aria-hidden="true" className="relative flex size-16 items-center justify-center">
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Settings className="size-14" strokeWidth={1.5} />
      </motion.span>
      <motion.span
        className="absolute -right-1 -bottom-1 flex size-8 items-center justify-center rounded-full border bg-background text-highlight shadow-sm"
        animate={{ rotate: [0, -25, 0, 25, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Wrench className="size-4" />
      </motion.span>
    </div>
  )
}

function ProgressBar({ label }: { readonly label: string }) {
  return (
    <div role="progressbar" aria-label={label} className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <motion.div
        className="h-full w-1/3 rounded-full bg-linear-to-r from-primary to-highlight"
        animate={{ x: ["-100%", "300%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

function MaintenanceLanguageSwitcher({ current }: { readonly current: Language }) {
  const { t, i18n } = useTranslation()

  const handleSelect = (language: Language): void => {
    if (language === current) {
      return
    }
    storeLanguage(language)
    i18n.changeLanguage(language).catch((error: unknown) => {
      console.error("Changement de langue impossible", error)
    })
  }

  return (
    <div role="group" aria-label={t("language.label")} className="flex gap-1">
      {supportedLanguages.map((code) => {
        const Flag = languageFlags[code]
        const isActive = code === current
        return (
          <Button
            key={code}
            type="button"
            size="sm"
            variant={isActive ? "secondary" : "ghost"}
            aria-pressed={isActive}
            aria-label={t(`language.${code}`)}
            lang={code}
            className="gap-2"
            onClick={() => {
              handleSelect(code)
            }}
          >
            <Flag aria-hidden="true" className={flagClassName} />
            <span className="font-mono text-xs uppercase">{code}</span>
          </Button>
        )
      })}
    </div>
  )
}

export function MaintenancePage() {
  const { t, i18n } = useTranslation()
  const resolvedLanguage = i18n.resolvedLanguage
  const language: Language = isSupportedLanguage(resolvedLanguage) ? resolvedLanguage : defaultLanguage
  const cvPath = assetPath(profile.cv[language] ?? profile.cv.fr)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = `${t("maintenance.title")} — ${profile.fullName}`
  }, [language, t])

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-svh flex-col overflow-hidden">
        <AnimatedBackdrop />

        <header className="relative z-10 flex items-center justify-end gap-2 p-4">
          <ThemeToggle />
          <MaintenanceLanguageSwitcher current={language} />
        </header>

        <main className="relative z-10 flex flex-1 items-center justify-center px-4 pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-xl space-y-8 rounded-2xl border bg-card/70 p-8 text-center shadow-xl backdrop-blur-md sm:p-10"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
              <Avatar className="size-16 ring-4 ring-primary/20">
                <AvatarImage src={assetPath(profile.photo)} alt="" />
                <AvatarFallback>{profile.initials}</AvatarFallback>
              </Avatar>
              <MaintenanceIcon />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-highlight" />
                </span>
                {t("maintenance.badge")}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("maintenance.title")}</h1>
              <p className="text-muted-foreground">{t("maintenance.description")}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProgressBar label={t("maintenance.progress")} />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm text-muted-foreground">{t("maintenance.meanwhile")}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <a href={`mailto:${profile.email}`}>
                    <Mail aria-hidden="true" />
                    {t("maintenance.contact")}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={cvPath} download>
                    <Download aria-hidden="true" />
                    {t("maintenance.downloadCv")}
                  </a>
                </Button>
              </div>
              {profile.socials.length > 0 && (
                <ul className="flex flex-wrap justify-center gap-1">
                  {profile.socials.map((social) => (
                    <li key={social.network}>
                      <Button asChild variant="ghost" size="sm">
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          {social.label}
                          <ExternalLink aria-hidden="true" />
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            <motion.p variants={itemVariants} className="border-t pt-6 text-xs text-muted-foreground">
              {profile.fullName} · {localize(profile.title, language)} · {currentYear}
            </motion.p>
          </motion.div>
        </main>
      </div>
    </MotionConfig>
  )
}