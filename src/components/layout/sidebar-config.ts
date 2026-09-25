import {
  Building2,
  FolderGit2,
  GraduationCap,
  House,
  Mail,
  Newspaper,
  Plane,
  Share2,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react"
import type { TranslationSchema } from "@/i18n/locales/fr"

export type NavKey = keyof TranslationSchema["nav"]

export type SidebarSectionKey = keyof TranslationSchema["sidebar"]["sections"]

export type CollectionKey = "experience" | "education"

export interface PageEntry {
  readonly type: "page"
  readonly key: NavKey
  readonly path: string
  readonly icon: LucideIcon
}

export interface CollectionEntry {
  readonly type: "collection"
  readonly key: CollectionKey
  readonly icon: LucideIcon
}

export interface SocialsEntry {
  readonly type: "socials"
  readonly icon: LucideIcon
}

export interface ContactEntry {
  readonly type: "contact"
  readonly icon: LucideIcon
}

export type SidebarEntry = PageEntry | CollectionEntry | SocialsEntry | ContactEntry

export interface SidebarSection {
  readonly key: SidebarSectionKey
  readonly entries: readonly SidebarEntry[]
}

export const collectionPreviewLimit = 3

export const sidebarSections: readonly SidebarSection[] = [
  {
    key: "general",
    entries: [
      { type: "page", key: "home", path: "", icon: House },
      { type: "page", key: "about", path: "about", icon: UserRound },
    ],
  },
  {
    key: "journey",
    entries: [
      { type: "collection", key: "experience", icon: Building2 },
      { type: "collection", key: "education", icon: GraduationCap },
      { type: "page", key: "projects", path: "projects", icon: FolderGit2 },
    ],
  },
  {
    key: "profile",
    entries: [
      { type: "page", key: "skills", path: "skills", icon: Sparkles },
      { type: "page", key: "travels", path: "travels", icon: Plane },
      { type: "page", key: "watch", path: "watch", icon: Newspaper },
    ],
  },
  {
    key: "links",
    entries: [
      { type: "socials", icon: Share2 },
      { type: "contact", icon: Mail },
    ],
  },
]