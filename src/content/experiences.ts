import type { Experience } from "@/content/types"

export const experiences: readonly Experience[] = [
  {
    slug: "the-grid-cybercafe",
    company: "The Grid",
    role: { fr: "Fondateur et gérant" },
    contract: "business-owner",
    period: { start: "2025-05", end: null },
    location: "Vernon",
    summary: { fr: "Création et gestion de mon propre cybercafé." },
    description: {
      fr: "Ouverture et gestion quotidienne d'un cybercafé : accueil de la clientèle, gestion du parc informatique et développement de la présence en ligne.",
    },
    skills: ["typescript", "react", "nodejs", "vps", "express", "tailwind", "prisma", "mariadb"],
    documents: [],
    website: "https://www.thegridcybercafe.fr",
    logo: "/media/experiences/the-grid/thegrid.png"
  },
  {
    slug: "team-vitality",
    company: "Team Vitality",
    role: { fr: "Stagiaire développeur web" },
    contract: "internship",
    period: { start: "2023-05-09", end: "2023-06-28" },
    location: "Paris",
    summary: { fr: "Club e-sport international fondé en 2013." },
    description: {
      fr: "Team Vitality a été créée en 2013 par Nicolas Maurer et Fabien « Neo » Devide. Le club est présent sur plusieurs jeux à l'international, avec des locaux à Paris, au Stade de France, à Berlin et à Mumbai.",
    },
    skills: ["html", "css", "javascript", "python"],
    documents: [
      {
        label: { fr: "Rapport de stage" },
        path: "/media/experiences/team-vitality/projects/rapport_de_stage.pdf",
      },
    ],
    website: "https://vitality.gg",
    logo: "/media/experiences/team-vitality/vitality.png"
  },
  {
    slug: "pebete",
    company: "Pebete",
    role: { fr: "Stagiaire développeur web" },
    contract: "internship",
    period: { start: "2024-02-05", end: "2024-04-26" },
    location: "Paris",
    summary: { fr: "Service de garde d'animaux." },
    description: {
      fr: "Situé à Paris et actif depuis quelques années, Pabete est une entreprise de 10 personnes qui mettent en place un service de garde entre particuliers et professionnels, permettant à n'importe quel adhérent de proposer ses services de garde ou d'échange d'animaux.",
    },
    skills: ["php"],
    documents: [],
    website: "https://pabete.com",
    logo: "/media/experiences/pabete/pabete.png"
  },
]