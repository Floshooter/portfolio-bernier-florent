import { ChevronRight, ExternalLink, PanelLeftClose, PanelLeftOpen, X } from "lucide-react"
import { motion } from "motion/react"
import { useState, type MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ProfileIdentity } from "@/components/layout/profile-identity"
import {
  collectionPreviewLimit,
  sidebarSections,
  type CollectionEntry,
  type ContactEntry,
  type PageEntry,
  type SidebarEntry,
  type SocialsEntry,
} from "@/components/layout/sidebar-config"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { getExperiences, getSchools } from "@/content"
import { profile } from "@/content/profile"
import { useIsActivePath } from "@/hooks/use-is-active-path"
import { localizedPath } from "@/i18n/paths"
import { useLanguage } from "@/i18n/use-language"

interface CollectionLink {
  readonly slug: string
  readonly label: string
}

const collapsibleContentClassName =
  "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"

function useCloseMobileSidebar(): () => void {
  const { isMobile, setOpenMobile } = useSidebar()
  return () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }
}

function ActiveIndicator() {
  return (
    <motion.span
      layoutId="sidebar-active-indicator"
      aria-hidden="true"
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className="absolute inset-y-1.5 left-0 z-10 w-0.5 rounded-full bg-sidebar-primary group-data-[collapsible=icon]:hidden"
    />
  )
}

function MobileSidebarHeader() {
  const { t } = useTranslation()
  const { isMobile, setOpenMobile } = useSidebar()

  if (!isMobile) {
    return null
  }

  const close = (): void => {
    setOpenMobile(false)
  }

  return (
    <SidebarHeader className="flex-row items-center justify-between gap-2 border-b border-sidebar-border p-3">
      <ProfileIdentity onNavigate={close} />
      <Button type="button" variant="ghost" size="icon" aria-label={t("sidebar.toggle")} onClick={close}>
        <X aria-hidden="true" />
      </Button>
    </SidebarHeader>
  )
}

function PageItem({ entry }: { readonly entry: PageEntry }) {
  const language = useLanguage()
  const { t } = useTranslation()
  const isActivePath = useIsActivePath()
  const closeMobile = useCloseMobileSidebar()
  const to = localizedPath(language, entry.path)
  const isActive = isActivePath(to, entry.path === "")
  const label = t(`nav.${entry.key}`)
  const Icon = entry.icon

  return (
    <SidebarMenuItem>
      {isActive && <ActiveIndicator />}
      <SidebarMenuButton asChild isActive={isActive} tooltip={label}>
        <Link to={to} onClick={closeMobile} aria-current={isActive ? "page" : undefined}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function CollectionItem({ entry }: { readonly entry: CollectionEntry }) {
  const language = useLanguage()
  const { t } = useTranslation()
  const isActivePath = useIsActivePath()
  const closeMobile = useCloseMobileSidebar()
  const basePath = localizedPath(language, entry.key)
  const isSectionActive = isActivePath(basePath)
  const [open, setOpen] = useState(isSectionActive)
  const [wasSectionActive, setWasSectionActive] = useState(isSectionActive)

  if (isSectionActive !== wasSectionActive) {
    setWasSectionActive(isSectionActive)
    if (isSectionActive) {
      setOpen(true)
    }
  }

  const items: readonly CollectionLink[] =
    entry.key === "experience"
      ? getExperiences().map((experience) => ({ slug: experience.slug, label: experience.company }))
      : getSchools().map((school) => ({ slug: school.slug, label: school.name }))
  const preview = items.slice(0, collectionPreviewLimit)
  const hasMore = items.length > collectionPreviewLimit
  const label = t(`nav.${entry.key}`)
  const Icon = entry.icon

  return (
    <Collapsible asChild open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        {isSectionActive && <ActiveIndicator />}
        <SidebarMenuButton asChild isActive={isSectionActive} tooltip={label}>
          <Link
            to={basePath}
            onClick={closeMobile}
            aria-current={isActivePath(basePath, true) ? "page" : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </Link>
        </SidebarMenuButton>
        {preview.length > 0 && (
          <>
            <CollapsibleTrigger asChild>
              <SidebarMenuAction
                aria-label={t("sidebar.toggleSection", { section: label })}
                className="transition-transform duration-200 data-[state=open]:rotate-90"
              >
                <ChevronRight aria-hidden="true" />
              </SidebarMenuAction>
            </CollapsibleTrigger>
            <CollapsibleContent className={collapsibleContentClassName}>
              <SidebarMenuSub>
                {preview.map((item) => {
                  const to = localizedPath(language, entry.key, item.slug)
                  const isActive = isActivePath(to)
                  return (
                    <SidebarMenuSubItem key={item.slug}>
                      <SidebarMenuSubButton asChild isActive={isActive}>
                        <Link to={to} onClick={closeMobile} aria-current={isActive ? "page" : undefined}>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  )
                })}
                {hasMore && (
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link to={basePath} onClick={closeMobile} className="text-muted-foreground">
                        <span>{t("sidebar.seeAll")}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                )}
              </SidebarMenuSub>
            </CollapsibleContent>
          </>
        )}
      </SidebarMenuItem>
    </Collapsible>
  )
}

function SocialsItem({ entry }: { readonly entry: SocialsEntry }) {
  const { t } = useTranslation()
  const { state, isMobile, setOpen: setSidebarOpen } = useSidebar()
  const [open, setOpen] = useState(false)
  const label = t("sidebar.socials")
  const Icon = entry.icon

  if (profile.socials.length === 0) {
    return null
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (state === "collapsed" && !isMobile) {
      event.preventDefault()
      setSidebarOpen(true)
      setOpen(true)
    }
  }

  return (
    <Collapsible asChild open={open} onOpenChange={setOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={label} onClick={handleClick}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <ChevronRight
              aria-hidden="true"
              className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className={collapsibleContentClassName}>
          <SidebarMenuSub>
            {profile.socials.map((social) => (
              <SidebarMenuSubItem key={social.network}>
                <SidebarMenuSubButton asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <span>{social.label}</span>
                    <ExternalLink aria-hidden="true" className="ml-auto" />
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

function ContactItem({ entry }: { readonly entry: ContactEntry }) {
  const { t } = useTranslation()
  const label = t("sidebar.contact")
  const Icon = entry.icon

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild tooltip={label}>
        <a href={`mailto:${profile.email}`}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function SidebarEntryItem({ entry }: { readonly entry: SidebarEntry }) {
  switch (entry.type) {
    case "page":
      return <PageItem entry={entry} />
    case "collection":
      return <CollectionItem entry={entry} />
    case "socials":
      return <SocialsItem entry={entry} />
    case "contact":
      return <ContactItem entry={entry} />
  }
}

function getEntryKey(entry: SidebarEntry): string {
  return entry.type === "page" || entry.type === "collection" ? entry.key : entry.type
}

function CollapseToggle() {
  const { t } = useTranslation()
  const { state, isMobile, toggleSidebar } = useSidebar()

  if (isMobile) {
    return null
  }

  const isCollapsed = state === "collapsed"
  const label = isCollapsed ? t("sidebar.expand") : t("sidebar.collapse")
  const Icon = isCollapsed ? PanelLeftOpen : PanelLeftClose

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={label} onClick={toggleSidebar}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function AppSidebar() {
  const { t } = useTranslation()

  return (
    <Sidebar collapsible="icon" className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
      <MobileSidebarHeader />
      <SidebarContent>
        <nav aria-label={t("common.mainNavigation")} className="flex flex-col gap-2">
          {sidebarSections.map((section) => (
            <SidebarGroup key={section.key}>
              <SidebarGroupLabel className="text-xs font-medium tracking-wider uppercase">
                {t(`sidebar.sections.${section.key}`)}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.entries.map((entry) => (
                    <SidebarEntryItem key={getEntryKey(entry)} entry={entry} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border group-data-[mobile=true]:hidden">
        <CollapseToggle />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}