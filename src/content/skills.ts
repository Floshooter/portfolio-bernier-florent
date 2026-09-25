import type { Skill } from "@/content/types"

export const skills = {
  html: { name: { fr: "HTML" }, category: "markup", level: 3.5 },
  css: { name: { fr: "CSS" }, category: "styling", level: 3.5 },

  javascript: { name: { fr: "JavaScript" }, category: "programming", level: 4 },
  typescript: { name: { fr: "TypeScript" }, category: "programming", level: 4 },
  php: { name: { fr: "PHP" }, category: "programming", level: 2.5 },
  python: { name: { fr: "Python" }, category: "programming", level: 3.5 },
  dart: { name: { fr: "Dart" }, category: "programming", level: 2.5 },

  react: { name: { fr: "React" }, category: "framework", level: 4 },
  tailwind: { name: { fr: "Tailwind CSS" }, category: "framework", level: 4 },
  flutter: { name: { fr: "Flutter" }, category: "framework", level: 2.5 },
  express: { name: { fr: "Express" }, category: "framework", level: 3.5 },

  nodejs: { name: { fr: "Node.js" }, category: "runtime", level: 3.5 },

  prisma: { name: { fr: "Prisma" }, category: "orm", level: 4 },

  sql: { name: { fr: "SQL" }, category: "database", level: 4.5 },
  mariadb: { name: { fr: "MariaDB" }, category: "database", level: 3.5 },

  trello: { name: { fr: "Trello" }, category: "tool", level: 4 },
  github: { name: { fr: "GitHub" }, category: "tool", level: 3 },
  figma: { name: { fr: "Figma" }, category: "tool", level: 2 },
  glpi: { name: { fr: "GLPI" }, category: "tool", level: 2 },

  vps: { name: { fr: "Serveur VPS" }, category: "infrastructure", level: 4 },

  french: { name: { fr: "Français" }, category: "spoken-language", level: 5 },
  english: { name: { fr: "Anglais" }, category: "spoken-language", level: 4 },
} as const satisfies Record<string, Skill>

export type SkillId = keyof typeof skills