import type { AboutContent } from "@/content/types"

export const about: AboutContent = {
  bio: [
    {
      fr: "Passionné d'informatique, j'ai commencé par un bac STI2D option SIN (Systèmes d'information et numérique), avant de rejoindre une classe préparatoire intégrée pour me rapprocher du développement.",
    },
    {
      fr: "C'est en BTS SIO, option SLAM, à l'IPSSI Paris que j'ai trouvé ma voie : le développement d'applications. J'y ai réalisé de nombreux projets et effectué un stage chez Team Vitality, où j'ai pu allier code et esport.",
    },
    {
      fr: "Aujourd'hui, je gère mon propre cybercafé, dont j'ai développé le site de A à Z : interface React, API Node.js et hébergement sur mon propre serveur. En parallèle, je stream, je prépare un projet d'agence de développement web et je continue de me former sur mon temps libre.",
    },
    {
      fr: "J'ai mis mes études en pause pour me consacrer à ce projet, avec un objectif clair : reprendre un Bac+3, puis un Bac+5.",
    },
  ],
  objectives: [
    {
      id: "cybercafe",
      status: "in-progress",
      title: { fr: "Développer le cybercafé" },
      description: {
        fr: "Faire grandir mon commerce et faire évoluer son site, avec une nouvelle version basée sur MariaDB et Prisma.",
      },
    },
    {
      id: "bachelor",
      status: "planned",
      title: { fr: "Reprendre mes études en Bac+3" },
      description: { fr: "Consolider mes compétences en développement avec une licence ou un bachelor." },
    },
    {
      id: "master",
      status: "planned",
      title: { fr: "Obtenir un Bac+5" },
      description: {
        fr: "Un master orienté cybersécurité ou intelligence artificielle, ou dans le jeu vidéo.",
      },
    },
    {
      id: "agency",
      status: "planned",
      title: { fr: "Lancer mon agence de développement web" },
      description: { fr: "Transformer mon projet d'agence en activité, avec mes premiers clients." },
    },
  ],
  interests: [
    {
      id: "video-games",
      icon: "gamepad",
      title: { fr: "Jeu vidéo" },
      description: {
        fr: "Joueur depuis toujours, c'est aussi un domaine dans lequel j'aimerais travailler un jour.",
      },
    },
    {
      id: "esport",
      icon: "trophy",
      title: { fr: "Esport" },
      description: {
        fr: "Je suis la scène compétitive de près, un intérêt renforcé par mon stage chez Team Vitality.",
      },
      path: "experience/team-vitality",
    },
    {
      id: "streaming",
      icon: "radio",
      title: { fr: "Streaming" },
      description: { fr: "Je diffuse en direct et j'anime ma communauté." },
      path: "projects/streams",
    },
    {
      id: "travels",
      icon: "plane",
      title: { fr: "Voyages" },
      description: { fr: "Découvrir d'autres pays et pratiquer l'anglais sur le terrain." },
      path: "travels",
    },
    {
      id: "computing",
      icon: "cpu",
      title: { fr: "Informatique" },
      description: {
        fr: "Matériel, logiciel, nouvelles technologies : j'aime comprendre comment tout fonctionne.",
      },
      path: "skills",
    },
    {
      id: "cars",
      icon: "car",
      title: { fr: "Automobile" },
      description: { fr: "Passionné de voitures." },
    },
  ],
}