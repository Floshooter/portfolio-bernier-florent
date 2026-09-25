import { useCallback } from "react"
import { useLocation } from "react-router"

function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
}

export function useIsActivePath(): (target: string, exact?: boolean) => boolean {
  const { pathname } = useLocation()
  const current = normalize(pathname)

  return useCallback(
    (target: string, exact = false) => {
      const normalizedTarget = normalize(target)
      if (exact) {
        return current === normalizedTarget
      }
      return current === normalizedTarget || current.startsWith(`${normalizedTarget}/`)
    },
    [current],
  )
}