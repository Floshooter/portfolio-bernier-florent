import { Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SkillRating } from "@/components/content/skill-rating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getSkillGroups } from "@/content"
import { profile } from "@/content/profile"
import { localize } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"
import { computeAge } from "@/lib/age"
import { assetPath } from "@/lib/assets"

interface SummaryRowProps {
  readonly label: string
  readonly value: string
}

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex justify-between gap-4 py-2.5">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  )
}

export function AboutSummaryCard() {
  const language = useLanguage()
  const { t } = useTranslation()
  const age = computeAge(profile.birthDate)
  const spokenLanguages =
    getSkillGroups().find((group) => group.category === "spoken-language")?.items ?? []

  return (
    <Card>
      <CardHeader className="flex flex-col items-center text-center">
        <Avatar className="size-20 ring-4 ring-primary/20">
          <AvatarImage src={assetPath(profile.photo)} alt="" />
          <AvatarFallback className="text-xl">{profile.initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="pt-2 text-lg">{profile.fullName}</CardTitle>
        <CardDescription>{localize(profile.title, language)}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
          {t("pages.about.summary.title")}
        </h2>
        <dl className="divide-y text-sm">
          {age !== null && (
            <SummaryRow
              label={t("pages.about.summary.age")}
              value={t("pages.about.summary.ageValue", { age: String(age) })}
            />
          )}
          <SummaryRow label={t("pages.about.summary.location")} value={profile.location} />
          <SummaryRow label={t("pages.about.summary.status")} value={localize(profile.title, language)} />
        </dl>
        {spokenLanguages.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">{t("pages.about.summary.languages")}</h3>
            <ul className="space-y-1.5">
              {spokenLanguages.map(({ id, skill }) => (
                <li key={id} className="flex items-center justify-between gap-3 text-sm">
                  <span>{localize(skill.name, language)}</span>
                  {skill.level !== undefined && <SkillRating level={skill.level} />}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            {t("pages.about.summary.contact")}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}