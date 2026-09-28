import type { AboutContent } from "@/content/types"

export const about: AboutContent = {
  bio: [
    {
      fr: "Passionné d'informatique, j'ai commencé par un bac STI2D option SIN (Systèmes d'information et numérique), avant de rejoindre une classe préparatoire intégrée pour me rapprocher du développement.",
      en: "Passionate about computer science, I started with a STI2D option NSI (Numerical Sciences and Informatics), before joining a preparatory class to get closer to development."
    },
    {
      fr: "C'est en BTS SIO, option SLAM (Solutions logicielles et applications métiers), à l'IPSSI Paris que j'ai trouvé ma voie : le développement d'applications. J'y ai réalisé de nombreux projets et effectué un stage chez Team Vitality, où j'ai pu allier code et esport.",
      en: "It was in BTS SIO, option SLAM (Software and applications), at IPSSI Paris that I found my way : application development. I did many projects and worked at Team Vitality, where I could combine code and esport."
    },
    {
      fr: "Aujourd'hui, je gère mon propre cybercafé, dont j'ai développé le site de A à Z : interface React, API Node.js et hébergement sur mon propre serveur. En parallèle, je stream, je prépare un projet d'agence de développement web et je continue de me former sur mon temps libre.",
      en: "Today, I am managing my own Internet café, which I have developed from A to Z: React interface, Node.js API and hosting on my own server.In parallel, I stream, I prepare a web development agency project and I continue to train myself on my free time."
    },
    {
      fr: "J'ai mis mes études en pause pour me consacrer à ce projet, avec un objectif clair : reprendre un Bac+3, puis un Bac+5.",
      en: "I have paused my studies to dedicate myself to this project, with a clear goal : to resume a Bac+3, then a Bac+5."
    },
  ],
  objectives: [
    {
      id: "cybercafe",
      status: "in-progress",
      title: { fr: "Développer le cybercafé", en: "Develop the cybercafe" },
      description: {
        fr: "Faire grandir mon commerce et faire évoluer son site, avec une nouvelle version basée sur MariaDB et Prisma.",
        en: "Grow my commerce and evolve its site, wite a new version based on MariaDB and Prisma."
      },
    },
    {
      id: "bachelor",
      status: "planned",
      title: { fr: "Reprendre mes études en Bac+3", en: "Resume my studies in Bac+3" },
      description: { 
        fr: "Consolider mes compétences en développement avec une licence ou un bachelor.",
        en: "Renforce my skills in development with a licence or a bachelor."
      },
    },
    {
      id: "master",
      status: "planned",
      title: { fr: "Obtenir un Bac+5", en: "Get a Bac+5" },
      description: {
        fr: "Un master orienté cybersécurité ou intelligence artificielle, ou dans le jeu vidéo.",
        en: "A master focused on cybersecurity ou artificial intelligence, or in video games."
      },
    },
    {
      id: "agency",
      status: "planned",
      title: { fr: "Lancer mon agence de développement web", en: "Start my web development agency." },
      description: { 
        fr: "Transformer mon projet d'agence en activité, avec mes premiers clients.",
        en: "Turn my web development agency into an activity, with my first clients."
      },
    },
  ],
  interests: [
    {
      id: "video-games",
      icon: "gamepad",
      title: { fr: "Jeu vidéo", en: "Video games" },
      description: {
        fr: "Joueur depuis toujours, c'est aussi un domaine dans lequel j'aimerais travailler un jour.",
        en: "Player since always, it is also a sector in which I would like to work one day."
      },
    },
    {
      id: "esport",
      icon: "trophy",
      title: { fr: "Esport", en: "Esport" },
      description: {
        fr: "Je suis la scène compétitive de près, un intérêt renforcé par mon stage chez Team Vitality.",
        en: "I follow the competitive scene closely, an interest reinforced by my intership at Team Vitality."
      },
      path: "experience/team-vitality",
    },
    {
      id: "streaming",
      icon: "radio",
      title: { fr: "Streaming", en: "Streaming" },
      description: { 
        fr: "Je diffuse en direct et j'anime ma communauté.",
        en: "I stream and I animate my community"
      },
      path: "projects/streams",
    },
    {
      id: "travels",
      icon: "plane",
      title: { fr: "Voyages", en: "Travels" },
      description: { 
        fr: "Découvrir d'autres pays et pratiquer l'anglais sur le terrain.",
        en: "Discover other countries and practice English there."
      },
      path: "travels",
    },
    {
      id: "computing",
      icon: "cpu",
      title: { fr: "Informatique", en: "Computing" },
      description: {
        fr: "Matériel, logiciel, nouvelles technologies : j'aime comprendre comment tout fonctionne.",
        en: "Hardware, software, new technologies : I like to understand how everything works."
      },
      path: "skills",
    },
    {
      id: "cars",
      icon: "car",
      title: { fr: "Automobile", en: "Cars" },
      description: { 
        fr: "Passionné de voitures.",
        en: "Passionate about cars."
      },
    },
  ],
}