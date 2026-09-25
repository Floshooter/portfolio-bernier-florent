import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ProjectCard } from "@/components/content/project-card"
import { Reveal } from "@/components/motion/reveal"
import { getFeaturedProjects } from "@/content"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

export function FeaturedProjectsSection() {
  const language = useLanguage()
  const { t } = useTranslation()
  const projects = getFeaturedProjects()

  if (projects.length === 0) {
    return null
  }

  return (
    <Reveal>
      <section aria-labelledby="featured-title" className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 id="featured-title" className="text-2xl font-semibold tracking-tight">
            {t("pages.home.featured.title")}
          </h2>
          <Link
            to={localizedPath(language, "projects")}
            className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
          >
            {t("pages.home.featured.seeAll")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
            >
              <ProjectCard project={project} showKind />
            </motion.li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}