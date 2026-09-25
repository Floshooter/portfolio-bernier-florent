import { RouterProvider } from "react-router/dom"
import { MaintenancePage } from "@/pages/maintenance-page"
import { router } from "@/router"

const isMaintenance = import.meta.env.VITE_MAINTENANCE === "true"

export default function App() {
  return isMaintenance ? <MaintenancePage /> : <RouterProvider router={router} />
}
