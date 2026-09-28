import type { Skill } from "@/content/types"

export const skills = {
  html: { name: { fr: "HTML", en: "HTML" }, category: "markup", level: 3.5 },
  css: { name: { fr: "CSS", en: "CSS" }, category: "styling", level: 3.5 },

  javascript: { name: { fr: "JavaScript", en: "JavaScript" }, category: "programming", level: 4 },
  typescript: { name: { fr: "TypeScript", en: "TypeScript" }, category: "programming", level: 4 },
  php: { name: { fr: "PHP", en: "PHP" }, category: "programming", level: 2.5 },
  python: { name: { fr: "Python", en: "Python" }, category: "programming", level: 3.5 },
  dart: { name: { fr: "Dart", en: "Dart" }, category: "programming", level: 2.5 },

  react: { name: { fr: "React", en: "React" }, category: "framework", level: 4 },
  tailwind: { name: { fr: "Tailwind CSS", en: "Tailwind CSS" }, category: "framework", level: 4 },
  flutter: { name: { fr: "Flutter", en: "Flutter" }, category: "framework", level: 2.5 },
  express: { name: { fr: "Express", en: "Express" }, category: "framework", level: 3.5 },

  nodejs: { name: { fr: "Node.js", en: "Node.js" }, category: "runtime", level: 3.5 },

  prisma: { name: { fr: "Prisma", en: "Prisma" }, category: "orm", level: 4 },

  sql: { name: { fr: "SQL", en: "SQL" }, category: "database", level: 4.5 },
  mariadb: { name: { fr: "MariaDB", en: "MariaDB" }, category: "database", level: 3.5 },

  trello: { name: { fr: "Trello", en: "Trello" }, category: "tool", level: 4 },
  github: { name: { fr: "GitHub", en: "GitHub" }, category: "tool", level: 3 },
  figma: { name: { fr: "Figma", en: "Figma" }, category: "tool", level: 2 },
  glpi: { name: { fr: "GLPI", en: "GLPI" }, category: "tool", level: 2 },

  vps: { name: { fr: "Serveur VPS", en: "VPS server" }, category: "infrastructure", level: 4 },

  french: { name: { fr: "Français", en: "French" }, category: "spoken-language", level: 5 },
  english: { name: { fr: "Anglais", en: "English" }, category: "spoken-language", level: 4 },
} as const satisfies Record<string, Skill>

export type SkillId = keyof typeof skills