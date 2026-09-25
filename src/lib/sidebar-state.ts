const sidebarCookieName = "sidebar_state"

export function readSidebarDefaultOpen(): boolean {
  try {
    const entry = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${sidebarCookieName}=`))
    return entry === undefined ? true : entry.slice(sidebarCookieName.length + 1) !== "false"
  } catch (error: unknown) {
    console.warn("Lecture de l'état de la sidebar impossible", error)
    return true
  }
}