import { useEffect, useState } from "react"
import { loadNews, type NewsFile } from "@/lib/news"

export type NewsState =
  | { readonly status: "loading" }
  | { readonly status: "error" }
  | { readonly status: "ready"; readonly data: NewsFile }

export function useNews(): NewsState {
  const [state, setState] = useState<NewsState>({ status: "loading" })

  useEffect(() => {
    let cancelled = false
    loadNews()
      .then((data) => {
        if (!cancelled) {
          setState({ status: "ready", data })
        }
      })
      .catch((error: unknown) => {
        console.error("Chargement des actualités impossible", error)
        if (!cancelled) {
          setState({ status: "error" })
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  return state
}