import type { School } from "@/content/types"

export const schools: readonly School[] = [
  {
    slug: "ipssi",
    name: "IPSSI Paris",
    degree: { fr: "BTS SIO — option SLAM" },
    period: { start: "2022-09", end: "2024-06" },
    location: "Paris",
    summary: {
      fr: "BTS Services informatiques aux organisations, option Solutions logicielles et applications métiers.",
    },
    description: {
      fr: "Deux années de formation en développement et en réseau, avec une spécialisation en développement d'applications et une part croissante consacrée à la cybersécurité.",
    },
    documents: [
      {
        label: { fr: "Tableau de synthèse" },
        path: "/media/schools/ipssi/BERNIER-FLORENT-TBS-E4.pdf",
      },
      {
        label: { fr: "Veille technologique - IA" },
        path: "/media/schools/ipssi/veilles/Veille technologique - IA.pdf",
      },
      {
        label: { fr: "Veille technologique - Réalité virtuelle" },
        path: "/media/schools/ipssi/veilles/Veille technologique - La réalité virtuelle.pdf",
      },
    ],
    years: [
      {
        id: "1",
        label: { fr: "1ère année" },
        period: { start: "2022-10-17", end: "2023-06-30" },
        description: { fr: "Tronc commun développement et réseau." },
      },
      {
        id: "2",
        label: { fr: "2e année" },
        period: { start: "2023-09", end: "2024-06-28" },
        description: { fr: "Spécialisation SLAM." },
      },
    ],
  },
]
