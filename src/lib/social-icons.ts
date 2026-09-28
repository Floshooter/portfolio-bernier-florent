import type { IconType } from "react-icons"
import { FaGithub, FaLinkedin, FaTwitch, FaXTwitter } from "react-icons/fa6"
import { SiLinktree } from "react-icons/si"
import type { SocialNetwork } from "@/content/types"

export const socialIcons: Readonly<Record<SocialNetwork, IconType>> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  x: FaXTwitter,
  twitch: FaTwitch,
  linktree: SiLinktree,
}

export const socialBrandColors: Readonly<Record<SocialNetwork, string | null>> = {
  linkedin: "#0A66C2",
  github: null,
  x: null,
  twitch: "#9146FF",
  linktree: "#43E55E",
}