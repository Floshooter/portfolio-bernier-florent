import type { Theme } from "@/content/watch/types"

export const themes = {
    ai: { 
        name: { 
            fr: "Intelligence artificielle", 
            en: "Artificial intelligence" 
        } 
    },
    "video-games": { 
        name: { 
            fr: "Jeu vidéo",
            en: "Video games" 
        } 
    },
    esport: { 
        name: { 
            fr: "Esport", 
            en: "Esports" 
        } 
    },
    cybersecurity: { 
        name: { 
            fr: "Cybersécurité", 
            en: "Cybersecurity" 
        } 
    },
    "virtual-reality": { 
        name: { 
            fr: "Réalité virtuelle", 
            en: "Virtual reality" 
        } 
    },
} as const satisfies Record<string, Theme>

export type ThemeId = keyof typeof themes