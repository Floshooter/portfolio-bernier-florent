import { ExternalLink as ExternalLinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { localize, type ExternalLink } from "@/content/types"
import { useLanguage } from "@/i18n/use-language"

interface ExternalLinkListProps {
  readonly links: readonly ExternalLink[]
}

export function ExternalLinkList({ links }: ExternalLinkListProps) {
  const language = useLanguage()

  if (links.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <Button key={link.url} asChild variant={index === 0 ? "default" : "outline"}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {localize(link.label, language)}
            <ExternalLinkIcon aria-hidden="true" />
          </a>
        </Button>
      ))}
    </div>
  )
}