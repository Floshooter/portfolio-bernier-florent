import type { CSSProperties } from "react"
import type { SocialNetwork } from "@/content/types"
import { socialBrandColors, socialIcons } from "@/lib/social-icons"
import { cn } from "@/lib/utils"

interface SocialIconProps {
  readonly network: SocialNetwork
  readonly className?: string
}

export function SocialIcon({ network, className }: SocialIconProps) {
  const Icon = socialIcons[network]
  const brandStyle = { "--brand": socialBrandColors[network] ?? "var(--foreground)" } as CSSProperties

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      style={brandStyle}
      className={cn("size-4 shrink-0 transition-colors", className)}
    />
  )
}