import type { School } from "@/content/types"

export const schools: readonly School[] = [
  {
    slug: "ipssi",
    name: "IPSSI Paris",
    degree: { fr: "BTS SIO — option SLAM", en: "BTS SIO — option SLAM" },
    period: { start: "2022-09", end: "2024-06" },
    location: "Paris",
    summary: {
      fr: "BTS Services informatiques aux organisations, option Solutions logicielles et applications métiers.",
      en: "BTS IT Services for  organizations, option Software and applications.",
    },
    description: {
      fr: "Deux années de formation en développement et en réseau, avec une spécialisation en développement d'applications mobile et site web.",
      en: "2 years of training in development and networking, with a specialization in application mobile and website development."
    },
    documents: [
      {
        label: { fr: "Tableau de synthèse", en: "Summary table" },
        path: "/media/schools/ipssi/BERNIER-FLORENT-TBS-E4.pdf",
      },
    ],
    years: [
      {
        id: "1",
        label: { fr: "1ère année", en: "1st year" },
        period: { start: "2022-10-17", end: "2023-06-30" },
        description: { fr: "Tronc commun développement et réseau.", en: "Common development and networking." },
      },
      {
        id: "2",
        label: { fr: "2e année", en: "2nd year" },
        period: { start: "2023-09", end: "2024-06-28" },
        description: { fr: "Spécialisation SLAM.", en: "Specialization SLAM." },
      },
    ],
    logo: "/media/schools/ipssi/ipssi.jpeg",
  },
]
