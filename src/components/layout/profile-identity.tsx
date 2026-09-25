import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { profile } from "@/content/profile"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"
import { assetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"

interface ProfileIdentityProps {
  readonly nameClassName?: string
  readonly onNavigate?: () => void
}

export function ProfileIdentity({ nameClassName, onNavigate }: ProfileIdentityProps) {
  const language = useLanguage()
  const { t } = useTranslation()

  return (
    <Link
      to={localizedPath(language)}
      aria-label={t("header.home")}
      onClick={onNavigate}
      className="flex min-w-0 items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Avatar className="size-9 shrink-0 ring-2 ring-primary/20">
        <AvatarImage src={assetPath(profile.photo)} alt="" />
        <AvatarFallback>{profile.initials}</AvatarFallback>
      </Avatar>
      <span className={cn("truncate text-lg font-semibold tracking-tight text-primary", nameClassName)}>
        {profile.fullName}
      </span>
    </Link>
  )
}