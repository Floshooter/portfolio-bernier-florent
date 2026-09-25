import { useState } from "react"
import { assetPath } from "@/lib/assets"
import { cn } from "@/lib/utils"

type LogoSize = "sm" | "md" | "lg"

interface OrganizationLogoProps {
  readonly src: string | undefined
  readonly name: string
  readonly size?: LogoSize
}

const sizeClassNames: Readonly<Record<LogoSize, string>> = {
  sm: "size-10 text-xs",
  md: "size-12 text-sm",
  lg: "size-16 text-base",
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
}

export function OrganizationLogo({ src, name, size = "md" }: OrganizationLogoProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const showImage = src !== undefined && src.length > 0 && failedSrc !== src

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white",
        sizeClassNames[size],
      )}
    >
      {showImage ? (
        <img
          src={assetPath(src)}
          alt=""
          loading="lazy"
          className="size-full object-contain p-1.5"
          onError={() => {
            setFailedSrc(src)
          }}
        />
      ) : (
        <span aria-hidden="true" className="font-semibold text-zinc-700">
          {getInitials(name)}
        </span>
      )}
    </span>
  )
}