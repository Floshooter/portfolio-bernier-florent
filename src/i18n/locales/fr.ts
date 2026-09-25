type DeepString<T> = {
  readonly [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>
}

export const fr = {
  common: {
    mainNavigation: "Navigation principale",
    breadcrumb: "Fil d'Ariane",
    back: "Retour",
    empty: "Aucun élément pour le moment.",
    skills: "Compétences",
    documents: "Documents",
    links: "Liens",
    projects: "Projets réalisés",
    adjacentNavigation: "Navigation entre les pages",
    loading: "Chargement…",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    experience: "Expériences",
    education: "Formation",
    projects: "Projets",
    skills: "Compétences",
    travels: "Voyages",
    watch: "Veilles",
    cv: "CV",
  },
  header: {
    home: "Retour à l'accueil",
    cv: "Voir mon CV",
  },
  sidebar: {
    sections: {
      general: "Général",
      journey: "Parcours",
      profile: "Profil",
      links: "Liens",
    },
    socials: "Mes réseaux",
    contact: "Contact",
    seeAll: "Voir tout",
    collapse: "Réduire",
    expand: "Agrandir",
    toggle: "Ouvrir ou fermer le menu",
    toggleSection: "Afficher ou masquer {{section}}",
  },
  language: {
    label: "Langue du site",
    fr: "Français",
    en: "English",
  },
  theme: {
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre",
  },
  contract: {
    "business-owner": "Chef d'entreprise",
    apprenticeship: "Alternance",
    internship: "Stage",
    permanent: "CDI",
    "fixed-term": "CDD",
    temporary: "Intérim",
    freelance: "Freelance",
    "student-job": "Job étudiant",
  },
  projectKind: {
    experience: "Pro",
    education: "École",
    personal: "Perso",
  },
  projectStatus: {
    "in-progress": "En cours",
    completed: "Terminé",
    paused: "En pause",
  },
  project: {
    allSkills: "Voir toutes mes compétences",
  },
  gallery: {
    title: "Galerie",
    open: "Agrandir l'image",
    previous: "Image précédente",
    next: "Image suivante",
    position: "Image {{current}} sur {{total}}",
  },
  skillCategory: {
    markup: "Balisage",
    styling: "Mise en forme",
    programming: "Langages de programmation",
    framework: "Frameworks et librairies",
    runtime: "Environnements d'exécution",
    orm: "ORM",
    database: "Bases de données",
    tool: "Outils",
    infrastructure: "Infrastructure et hébergement",
    "spoken-language": "Langues parlées",
    "soft-skill": "Savoir-être",
  },
  skillLevel: {
    label: "Niveau : {{value}} sur {{max}}",
  },
  period: {
    present: "aujourd'hui",
  },
  duration: {
    years_one: "{{count}} an",
    years_many: "{{count}} ans",
    years_other: "{{count}} ans",
    months_one: "{{count}} mois",
    months_many: "{{count}} mois",
    months_other: "{{count}} mois",
  },
  pages: {
    home: {
      hero: {
        cv: "Voir mon CV",
        contact: "Me contacter",
      },
      now: {
        title: "En ce moment",
        work: "Activité",
        studies: "Études",
        since: "Depuis {{date}}",
      },
      stats: {
        title: "En chiffres",
        experiences: "Expériences",
        projects: "Projets",
        skills: "Compétences",
        countries: "Pays visités",
      },
      featured: {
        title: "Projets phares",
        seeAll: "Tous mes projets",
      },
    },
    about: {
      subtitle: "Qui je suis, ce que je fais et ce qui me motive.",
      presentation: "Présentation",
      journeyLinks: {
        experience: "Voir mes expériences",
        education: "Voir ma formation",
      },
      summary: {
        title: "En bref",
        age: "Âge",
        ageValue: "{{age}} ans",
        location: "Localisation",
        status: "Situation",
        languages: "Langues",
        contact: "Me contacter",
      },
      objectives: {
        title: "Objectifs",
        status: {
          "in-progress": "En cours",
          planned: "Prévu",
          done: "Atteint",
        },
      },
      interests: {
        title: "Centres d'intérêt",
        learnMore: "En savoir plus",
      },
    },
    experience: {
      subtitle: "Les entreprises dans lesquelles j'ai travaillé.",
      filters: {
        label: "Filtrer par type de contrat",
        all: "Tous",
      },
    },
    education: {
      subtitle: "Les établissements où j'ai étudié.",
      years: "Années",
      commonProjects: "Projets communs",
      projectCount_one: "{{count}} projet",
      projectCount_many: "{{count}} projets",
      projectCount_other: "{{count}} projets",
      yearEmpty: "Aucun projet pour cette année pour le moment.",
    },
    projects: {
      subtitle: "Mes projets personnels, en cours ou terminés.",
      filters: {
        label: "Filtrer par technologie",
        all: "Toutes",
      },
    },
    skills: {
      subtitle: "Compétences techniques, langues et savoir-être.",
    },
    travels: {
      subtitle: "Les endroits que j'ai visités.",
      carousel: "Carrousel des voyages",
      previous: "Voyage précédent",
      next: "Voyage suivant",
      goTo: "Aller au voyage {{index}}",
      all: "Tous les voyages",
    },
    watch: {
      subtitle: "Section en préparation.",
    },
  },
  cv: {
    download: "Télécharger le PDF",
    open: "Ouvrir dans un onglet",
    print: "Imprimer",
    unsupported: "Votre navigateur ne peut pas afficher le PDF.",
    translationPending: "La version anglaise du CV arrive bientôt. Le CV en français est affiché.",
    tabs: {
      label: "Format du CV",
      web: "Version web",
      pdf: "PDF",
    },
    sections: {
      profile: "Profil",
      experience: "Expériences",
      education: "Formation",
      projects: "Projets phares",
      contact: "Contact",
      skills: "Compétences",
      languages: "Langues",
      interests: "Centres d'intérêt",
    },
  },
  notFound: {
    title: "Page introuvable",
    description: "La page demandée n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
  error: {
    title: "Une erreur est survenue",
    description: "Rechargez la page ou revenez à l'accueil.",
  },
  maintenance: {
    badge: "Maintenance en cours",
    title: "Le site fait peau neuve",
    description: "Quelques réglages sont en cours. Le site revient très vite, avec du nouveau.",
    progress: "Mise à jour en cours",
    meanwhile: "En attendant, vous pouvez me contacter ou consulter mon CV.",
    contact: "Me contacter",
    downloadCv: "Télécharger mon CV",
  },
} as const

export type TranslationSchema = DeepString<typeof fr>