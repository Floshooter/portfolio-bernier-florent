import type { WatchTopic } from "@/content/watch/types"

export const watchTopics: readonly WatchTopic[] = [
  {
    slug: "intelligence-artificielle",
    title: {
      fr: "Intelligence artificielle",
      en: "Artificial intelligence",
    },
    summary: {
      fr: "Veille technologique sur l'intelligence artificielle, réalisée pendant mon BTS SIO.",
      en: "Tech watch on artificial intelligence, carried out during my BTS SIO.",
    },
    description: {
      fr: "Dans le cadre de mon BTS SIO, j'ai mené une veille technologique sur l'intelligence artificielle : son fonctionnement, ses usages et son évolution.\n\nLe document ci-dessous présente le résultat de cette veille.",
      en: "As part of my BTS SIO, I carried out a tech watch on artificial intelligence: how it works, how it is used and how it is evolving.\n\nThe document below presents the outcome of this watch.",
    },
    themes: ["ai"],
    school: { slug: "ipssi" },
    documents: [
      {
        label: { fr: "Veille technologique - IA", en: "Tech watch - AI" },
        path: "/media/schools/ipssi/veilles/veille-ia.pdf",
      },
    ],
    sources: [],
  },
  {
    slug: "realite-virtuelle",
    title: {
      fr: "La réalité virtuelle",
      en: "Virtual reality",
    },
    summary: {
      fr: "Veille technologique sur la réalité virtuelle, réalisée pendant mon BTS SIO.",
      en: "Tech watch on virtual reality, carried out during my BTS SIO.",
    },
    description: {
      fr: "Dans le cadre de mon BTS SIO, j'ai mené une veille technologique sur la réalité virtuelle : ses technologies, ses usages et ses perspectives.\n\nLe document ci-dessous présente le résultat de cette veille.",
      en: "As part of my BTS SIO, I carried out a tech watch on virtual reality: its technologies, its uses and its outlook.\n\nThe document below presents the outcome of this watch.",
    },
    themes: ["virtual-reality"],
    school: { slug: "ipssi" },
    documents: [
      {
        label: { fr: "Veille technologique - La réalité virtuelle", en: "Tech watch - Virtual reality" },
        path: "/media/schools/ipssi/veilles/veille-realite-virtuelle.pdf",
      },
    ],
    sources: [],
  },
]