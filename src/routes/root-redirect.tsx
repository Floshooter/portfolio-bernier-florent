import { Navigate } from "react-router"
import { detectPreferredLanguage } from "@/i18n/config"

export function RootRedirect() {
  return <Navigate replace to={`/${detectPreferredLanguage()}`} />
}
