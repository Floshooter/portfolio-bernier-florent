import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ProjectCard } from "@/components/content/project-card"
import { Reveal } from "@/components/motion/reveal"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { getPersonalProjects, getSkill, getUsedSkillIds } from "@/content"
import type { SkillId } from "@/content/skills"
import { localize } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"

type SkillFilter = SkillId | "all"

export function ProjectListPage() {
  const language = useLanguage()
  const { t } = useTranslation()
  const [filter, setFilter] = useState<SkillFilter>("all")
  const projects = getPersonalProjects()
  const usedSkills = getUsedSkillIds(projects)
  const filterOptions: readonly SkillFilter[] = ["all", ...usedSkills]
  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.skills.includes(filter))

  return (
    <section className="space-y-8">
      <PageHeader title={t("nav.projects")} subtitle={t("pages.projects.subtitle")} />
      {projects.length === 0 ? (
        <p className="text-muted-foreground">{t("common.empty")}</p>
      ) : (
        <>
          {usedSkills.length > 1 && (
            <div role="group" aria-label={t("pages.projects.filters.label")} className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option}
                  type="button"
                  size="sm"
                  variant={filter === option ? "default" : "outline"}
                  aria-pressed={filter === option}
                  onClick={() => {
                    setFilter(option)
                  }}
                >
                  {option === "all"
                    ? t("pages.projects.filters.all")
                    : localize(getSkill(option).name, language)}
                </Button>
              ))}
            </div>
          )}
          <Reveal>
            <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence initial={false} mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.li
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ProjectCard project={project} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </Reveal>
        </>
      )}
    </section>
  )
}