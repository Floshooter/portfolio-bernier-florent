import { Globe } from "lucide-react"

interface WebsiteLinkProps {
  readonly url: string | undefined
}

function getDisplayHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function WebsiteLink({ url }: WebsiteLinkProps) {
  if (url === undefined || url.length === 0) {
    return null
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
    >
      <Globe aria-hidden="true" className="size-4" />
      {getDisplayHost(url)}
    </a>
  )
}