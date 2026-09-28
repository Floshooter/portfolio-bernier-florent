import type { SocialLink, Profile } from "@/content/types"

const socialLinks: readonly SocialLink[] = [
  { network: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/florent-bernier-876696246/" },
  { network: "github", label: "GitHub", url: "https://github.com/Floshooter" },
  { network: "x", label: "X", url: "https://twitter.com/Floshooter1" },
  { network: "twitch", label: "Twitch", url: "https://www.twitch.tv/floshooter" },
  { network: "linktree", label: "Linktree", url: "https://linktr.ee/floshooter" },
]

export const profile: Profile = {
  fullName: "Florent Bernier",
  initials: "FB",
  birthDate: "2002-09-26",
  location: "Vernon",
  title: { fr: "Développeur web & mobile", en: "Web and mobile developer" },
  tagline: {
    fr: "Je développe des sites web et des applications mobile, et j'ai ouvert mon propre cybercafé. Entre code, entrepreneuriat et streaming, ce site rassemble tout mon parcours.",
    en: "I develop websites and mobile applications, and I opened my own Internet cafe. Between code, entrepreneurship and streaming, this site gathers all my journey."
  },
  studyStatus: { 
    fr: "Études en pause. Reprise prévue : Bac+3, puis Bac+5.", 
    en: "Studies paused. Resume expected : Bac+3, then Bac+5."
  },
  photo: "/media/avatar.png",
  email: "florent.bernierl@gmail.com",
  socials: socialLinks.filter((link) => link.url.length > 0),
  cv: {
    fr: "/cv/florent-bernier-cv-fr.pdf",
    en: "/cv/florent-bernier-cv-en.pdf",
  },
}