import { useCallback, useState } from "react"

const storageKey = "news-last-seen"

function readLastSeen(): number {
  try {
    const stored = window.localStorage.getItem(storageKey)
    const timestamp = stored === null ? 0 : Date.parse(stored)
    return Number.isNaN(timestamp) ? 0 : timestamp
  } catch (error: unknown) {
    console.warn("Lecture des actualités vues impossible", error)
    return 0
  }
}

export function useNewsLastSeen(): readonly [number, (isoDate: string) => void] {
  const [lastSeen, setLastSeen] = useState(readLastSeen)

  const markSeen = useCallback((isoDate: string) => {
    const timestamp = Date.parse(isoDate)
    if (Number.isNaN(timestamp)) {
      return
    }
    try {
      window.localStorage.setItem(storageKey, isoDate)
    } catch (error: unknown) {
      console.warn("Enregistrement des actualités vues impossible", error)
    }
    setLastSeen(timestamp)
  }, [])

  return [lastSeen, markSeen] as const
}