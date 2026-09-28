import type { Experience } from "@/content/types"

export const experiences: readonly Experience[] = [
  {
    slug: "the-grid-cybercafe",
    company: "The Grid",
    role: { fr: "Fondateur et gérant", en: "Founder and CEO" },
    contract: "business-owner",
    period: { start: "2025-05", end: null },
    location: "Vernon",
    summary: { 
      fr: "Création et gestion de mon propre cybercafé.",
      en: "Managing my own cybercafe."
    },
    description: {
      fr: "Ouverture et gestion quotidienne d'un cybercafé : accueil de la clientèle, gestion du parc informatique et développement de la présence en ligne.",
      en: "Opening and daily management of a cybercafe : customer service, management of the computer park and development of the online presence."
    },
    skills: ["typescript", "react", "nodejs", "vps", "express", "tailwind", "prisma", "mariadb"],
    documents: [],
    website: "https://www.thegridcybercafe.fr",
    logo: "/media/experiences/the-grid/thegrid.png"
  },
  {
    slug: "team-vitality",
    company: "Team Vitality",
    role: { fr: "Stagiaire développeur web", en: "Web developer intership" },
    contract: "internship",
    period: { start: "2023-05-09", end: "2023-06-28" },
    location: "Paris",
    summary: { fr: "Club e-sport international fondé en 2013.", en: "International e-esport club founded in 2013." },
    description: {
      fr: "Team Vitality a été créée en 2013 par Nicolas Maurer et Fabien « Neo » Devide. Le club est présent sur plusieurs jeux à l'international, avec des locaux à Paris, au Stade de France, à Berlin et à Mumbai.",
      en: "Team Vitality was founded in 2013 by Nicolas Maurer and Fabien « Neo » Devide. The club is present on several games internationally, with offices in Paris, at the Stade de France, in Berlin, and in Mumbai."
    },
    skills: ["html", "css", "javascript", "python"],
    documents: [
      {
        label: { fr: "Rapport de stage", en: "Internship report" },
        path: "/media/experiences/team-vitality/projects/rapport_de_stage.pdf",
      },
    ],
    website: "https://vitality.gg",
    logo: "/media/experiences/team-vitality/vitality.png"
  },
  {
    slug: "pebete",
    company: "Pebete",
    role: { fr: "Stagiaire développeur web", en: "Web developer intership" },
    contract: "internship",
    period: { start: "2024-02-05", end: "2024-04-26" },
    location: "Paris",
    summary: { fr: "Service de garde d'animaux.", en: "Animal care service" },
    description: {
      fr: "Situé à Paris et actif depuis quelques années, Pabete est une entreprise de 10 personnes qui mettent en place un service de garde entre particuliers et professionnels, permettant à n'importe quel adhérent de proposer ses services de garde ou d'échange d'animaux.",
      en: "Situated in Paris and active for several years, Pabete is a company of 10 people who set up a care service between individuals and professionals, allowing any member to offer services for care or animal exchange."
    },
    skills: ["php"],
    documents: [],
    website: "https://pabete.com",
    logo: "/media/experiences/pabete/pabete.png"
  },
]