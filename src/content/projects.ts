import type { Project } from "@/content/types"

export const projects: readonly Project[] = [
  {
    slug: "site-web",
    status: "completed",
    context: { kind: "experience", slug: "the-grid-cybercafe" },
    title: { fr: "Site du cybercafé" },
    summary: { fr: "Site du cybercafé, du front-end à l'hébergement." },
    description: {
      fr: "Conception, développement et mise en ligne du site du cybercafé. Version actuelle : interface React et TypeScript, API Node.js avec Express, hébergée sur un VPS OVH avec nom de domaine OVH. Nouvelle version en cours avec une base de données MariaDB gérée via Prisma.",
    },
    skills: ["typescript", "react", "nodejs", "express", "tailwind", "prisma", "mariadb", "vps"],
    links: [
      {
        label: { fr: "Site du cybercafé" },
        url: "https://www.thegridcybercafe.fr",
      },
    ],
    documents: [],
    featured: true,
    cover: "/media/experiences/the-grid/thegrid.png",
    images: [
      { src: "/media/experiences/the-grid/projects/hero.png", alt: { fr: "Section d'accueil" } },
      { src: "/media/experiences/the-grid/projects/services.png", alt: { fr: "Section des services" } },
      { src: "/media/experiences/the-grid/projects/pricing.png", alt: { fr: "Section des tarifs" } },
      { src: "/media/experiences/the-grid/projects/config.png", alt: { fr: "Section de configuration" } },
      { src: "/media/experiences/the-grid/projects/howitworks.png", alt: { fr: "Section du règlement" } },
      { src: "/media/experiences/the-grid/projects/events.png", alt: { fr: "Section des événements" } },
      { src: "/media/experiences/the-grid/projects/faq.png", alt: { fr: "Section des FAQs" } },
      { src: "/media/experiences/the-grid/projects/booking.png", alt: { fr: "Section de réservation" } },
      { src: "/media/experiences/the-grid/projects/contact.png", alt: { fr: "Section de contact" } },
      { src: "/media/experiences/the-grid/projects/access.png", alt: { fr: "Section d'accès" } },
    ],
  },
  {
    slug: "agence-web",
    status: "in-progress",
    context: { kind: "personal" },
    title: { fr: "Site d'agence de développement web" },
    summary: { fr: "Site vitrine de mon projet d'agence de développement web." },
    description: {
      fr: "Conception du site de ma futur agence de développement web et mobile. Pour l'instant, ce n'est que du test pour développer mes compétences, et aussi tester des choses auprès des commercans de ma ville. J'essaye de proposer des prix raisonnables pour ce que je compte produire, et avant que ce projet soit lancé, il faut que je test plusieurs projets différents (applications mobiles, logiciels métiers, sites vitrine, etc.) afin de justifier les prix. ",
    },
    skills: ["react", "tailwind", "nodejs", "mariadb", "typescript", "english", "french", "prisma"],
    links: [],
    documents: [],
    featured: true,
    cover: "/media/projects/floshooter-digital/floshooter-digital.png",
    images: [],
  },
  {
    slug: "streams",
    status: "paused",
    context: { kind: "personal" },
    title: { fr: "Streams" },
    summary: { fr: "Création de contenu en direct." },
    description: {
      fr: "Diffusion de contenu en direct sur les jeux vidéos tels que Rocket League ou Counter-Strike 2. Il est prévu à terme avec la croissance de la chaîne, de se diriger vers d'autres petits indépendants, de gestion et de simulation auxquels j'aime jouer dans mon temps-libre, et qui sont calmes pour des lives. Evidemment, d'autres contenus pourront arriver aussi, juste le temps nous le dira. ",
    },
    skills: ["french", "english"],
    links: [
      {
        label: { fr: "Lien du stream" },
        url: "https://www.twitch.tv/floshooter",
      },
    ],
    documents: [],
    featured: true,
    cover: "/media/projects/stream/Floshooter - 2026-.png",
    images: [],
  },
  {
    slug: "portfolio",
    status: "in-progress",
    context: { kind: "personal" },
    title: { fr: "Portfolio" },
    summary: { fr: "Ce site : mon parcours complet, bilingue et animé." },
    description: {
      fr: "Refonte de mon portfolio avec Vite, React, TypeScript, Tailwind CSS, shadcn/ui et Motion. De nouveaux détails ont été rajouté, car en 2 ans, de nombreux événements ont eu lieu.",
    },
    skills: ["typescript", "react", "tailwind", "french", "english"],
    links: [
      {
        label: { fr: "Lien du portfolio" },
        url: "https://floshooter.github.io/portfolio-bernier-florent/",
      },
    ],
    documents: [],
    cover: "/media/projects/portfoliov2/portfolio.png",
    images: [],
  },
  {
    slug: "phishing",
    status: "completed",
    context: { kind: "experience", slug: "team-vitality" },
    title: { fr: "Sensibilisation des employés au phishing" },
    summary: { fr: "Mission 1 du stage chez Team Vitality." },
    description: {
      fr: "Tester la sécurité auprès des employés et les sensibiliser aux tentatives d'hameçonnage. Pour celà, j'ai donc créé de toute pièce une copie d'un site d'un jeu vidéo (Valve, propriétaire de Counter-Strike, et Steam), avec un formulaire à remplir. Un faux mail a été envoyé comprenant une fausse soirée organisée, après un événement, qui lui, existait bel et bien (Major Paris 2023), dans lequel j'invitais le staff de l'équipe à une soirée de remerciement après la finale de l'événement, afin de discuter du futur du jeu, qui après cet événement, a reçu un changement majeur (passage de Counter-Strike: Global Offensive, à Counter-Strike 2). Dans ce formulaire, on demandait : nom et prénom, adresse mail, et mot de passe. Lorsqu'un employé remplissait le formulaire, en récupérait les informations via javascript pour le système de back, et python pour l'écriture des informations dans un google sheet (où seul le mot de passe n'était pas stocké évvidemment). Nous avons utilisé cron pour une vérification toutes les 10 minutes des informations reçues, et d'un serveur physique, avec faux nom de domaine pour rendre le projet crédible.",
    },
    skills: ["css", "html", "javascript", "french", "english", "php", "python"],
    links: [],
    documents: [
      {
        label: { fr: "Documentation du phishing" },
        path: "/media/experiences/team-vitality/projects/phishing/Mission1.pdf",
      }
    ],
    images: [
      { src: "/media/experiences/team-vitality/projects/phishing/html1.png", alt: { fr: "Première partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html2.png", alt: { fr: "Seconde partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html3.png", alt: { fr: "Troisième partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html4.png", alt: { fr: "Quatrième partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html5.png", alt: { fr: "Cinquième partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html6.png", alt: { fr: "Sixieme partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/js1.png", alt: { fr: "Septieme partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/js2.png", alt: { fr: "Huitieme partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/php1.png", alt: { fr: "Neuvieme partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/pyp1.png", alt: { fr: "Dixieme partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/pyp2.png", alt: { fr: "Onzieme partie du code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/send_mail.png", alt: { fr: "Système d'envoie de mail" }},
      { src: "/media/experiences/team-vitality/projects/phishing/mail.png", alt: { fr: "Mail envoyé via un script" }},
      { src: "/media/experiences/team-vitality/projects/phishing/cron_job.png", alt: { fr: "Cron pour la verification d'une réponse au formulaire" }},
      { src: "/media/experiences/team-vitality/projects/phishing/ggsheet1.png", alt: { fr: "Résultat du formulaire reçu" }},
      { src: "/media/experiences/team-vitality/projects/phishing/ggsheet2.png", alt: { fr: "Résultat du formulaire reçu" }},
      { src: "/media/experiences/team-vitality/projects/phishing/site1.png", alt: { fr: "Image du site et test" }},
      { src: "/media/experiences/team-vitality/projects/phishing/site2.png", alt: { fr: "Image du site et test" }},
      { src: "/media/experiences/team-vitality/projects/phishing/site3.png", alt: { fr: "Image du site et test" }},
    ],
  },
  {
    slug: "ligue-corpo-2023-overlay",
    status: "completed",
    context: { kind: "experience", slug: "team-vitality" },
    title: { fr: "Overlay pour la Ligue Corpo 2023" },
    summary: { fr: "Mission 2 du stage chez Team Vitality." },
    description: {
      fr: "Préparation d'un overlay de diffusion pour la Ligue Corpo 2023, un tournoi League Of Legend, organisé par Team Vitality, où des employés de différentes entreprises tels que la SNCF GAMING, ORANGE ou encore AFFLELOU se reassemblent pour une compétition. Mon but ici, était de créer un overlay, qui sera utilisé lors de la diffusion en directe, afin de rendre dynamique la partie choix des personnages. L'overlay était animé, et affichait correctement l'image du personnage qui a été choisi par chaque joueur. ",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    documents: [
      {
        label: { fr: "Documentation de l'overlay" },
        path: "/media/experiences/team-vitality/projects/overlay-twitch/Mission2.pdf",
      }
    ],
    images: [
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html1.png", alt: { fr: "Première partie du fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html2.png", alt: { fr: "Seconde partie du fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html3.png", alt: { fr: "Troisième partie du fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html-bonus.png", alt: { fr: "Quatrième partie du fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html-bonus2.png", alt: { fr: "Cinquième partie du fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js1.png", alt: { fr: "Première partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js2.png", alt: { fr: "Deuxième partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js3.png", alt: { fr: "Troisième partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus1.png", alt: { fr: "Quatrième partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus2.png", alt: { fr: "Cinquième partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus3.png", alt: { fr: "Sixieme partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus4.png", alt: { fr: "Septieme partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus5.png", alt: { fr: "Huitieme partie du backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/overlay1.png", alt: { fr: "Image de l'overlay" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/overlay2.png", alt: { fr: "Image de l'overlay" }},
    ]
  },
  {
    slug: "api-meteo",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Création d'une API meteo" },
    summary: { fr: "Projet de première année d'IPSSI" },
    description: {
      fr: "Création d'une API meteo, utilisant la documentation de l'API openweathermap. Les données sont ensuite affichées sur un site web. ",
    },
    skills: ["html", "css", "javascript", "french", "english"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/API-meteo/1.png",
    documents: [
      {
        label: { fr: "Documentation de l'API Météo" },
        path: "/media/schools/ipssi/projects/1ere-annee/API-meteo/API Météo.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/API-meteo/1.png", alt: { fr: "Résultat du code" }},
    ]
  },
  {
    slug: "calculatrice",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Création d'une calculatrice" },
    summary: { fr: "Projet de première année d'IPSSI" },
    description: {
      fr: "Création d'une calculatrice faite en HTML, CSS, et Javascript.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/calculatrice/1.png",
    documents: [
      {
        label: { fr: "Documentation de la calculatrice" },
        path: "/media/schools/ipssi/projects/1ere-annee/calculatrice/Calculatrice.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/calculatrice/1.png", alt: { fr: "Test du code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/calculatrice/2.png", alt: { fr: "Test du code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/calculatrice/3.png", alt: { fr: "Test du code" }},
    ]
  },
  {
    slug: "GLPI",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "VM Debian & GLPI" },
    summary: { fr: "Mise en place d'une VM Debian et installation de GLPI" },
    description: {
      fr: "Mise en place d'une VM Debian et installation de GLPI, afin de pouvoir créer un système de tickets.",
    },
    skills: ["french", "english", "glpi"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/glpi/glpi.jpeg",
    documents: [
      {
        label: { fr: "Documentation de GLPI" },
        path: "/media/schools/ipssi/projects/1ere-annee/glpi/GLPI - Florent Bernier.pdf",
      },
    ],
    images: []
  },
  {
    slug: "map-interactive",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Map interactive" },
    summary: { fr: "Mise en place d'une map interactive" },
    description: {
      fr: "Mise en place d'une map interactive, de la ville de Paris, avec des points d'interets. Des boutons des lieux sont cliquables, pointant l'endroit sur la map et donnant les informations du lieu.",
    },
    skills: ["react", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/map-interactive/2.png",
    documents: [
      {
        label: { fr: "Documentation de la map interactive" },
        path: "/media/schools/ipssi/projects/1ere-annee/map-interactive/Map Intéractive.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/map-interactive/1.png", alt: { fr: "Résultat du code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/map-interactive/2.png", alt: { fr: "Résultat du code" }},
    ]
  },
  {
    slug: "projet-biblio",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Projet bilbiothèque" },
    summary: { fr: "Création d'un site de livre" },
    description: {
      fr: "Ce projet avait pour but de créer un projet grandeur nature afin de valider nos compétences en PHP, HTML, CSS et Javascript. C'est un site e-commerce, permettant l'achat de livres. ",
    },
    skills: ["html", "css", "javascript", "php"],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation du projet bibliothèque" },
        path: "/media/schools/ipssi/projects/1ere-annee/projetbiblio/Projet Bibliothèque - Florent Bernier.pdf",
      },
    ],
    images: []
  },
  {
    slug: "random-quote",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Citation aléatoire" },
    summary: { fr: "Création d'un site de citation" },
    description: {
      fr: "Site permettant d'afficher une citation aléatoire parmis une liste prédéfini par mes soins.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/randomquote/1.png",
    documents: [
      {
        label: { fr: "Documentation de la citation aléatoire" },
        path: "/media/schools/ipssi/projects/1ere-annee/randomquote/RandomQuote.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/randomquote/1.png", alt: { fr: "Résultat du code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/randomquote/2.png", alt: { fr: "Résultat du code" }},
    ]
  },
  {
    slug: "shifumi",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Mini-jeu Shifumi" },
    summary: { fr: "Création d'un shifumi" },
    description: {
      fr: "Création d'un mini-jeu, le Shifumi. Le code génère une action parmis la pierre, la feuille et le ciseau, le joueur fait de même, et le résultat s'affiche par la suite. Les points sont comptés, et le premier à 3 points à gagné.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/shifumi/1.png",
    documents: [
      {
        label: { fr: "Documentation du mini-jeu Shifumi" },
        path: "/media/schools/ipssi/projects/1ere-annee/shifumi/Shifumi.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/shifumi/1.png", alt: { fr: "Résultat du code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/shifumi/2.png", alt: { fr: "Résultat du code" }},
    ]
  },
  {
    slug: "todo-list",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "To-Do List" },
    summary: { fr: "Création d'une To-Do List" },
    description: {
      fr: "Création d'une To-Do List en Javascript, avec validation des taches, sauvegarde en mémoire des actions et affichage des taches.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/todojs/1.png",
    documents: [
      {
        label: { fr: "Documentation de la To-Do List" },
        path: "/media/schools/ipssi/projects/1ere-annee/todojs/TodoJS.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/todojs/1.png", alt: { fr: "Résultat du code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/todojs/2.png", alt: { fr: "Résultat du code" }},
    ]
  },
  {
    slug: "e-commerce",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "2" },
    title: { fr: "Site e-commerce" },
    summary: { fr: "Création d'un site e-commerce complet" },
    description: {
      fr: "Pour ce projet, nous étions en groupe de 3, et avons pour but de créer un site e-commerce en HTML/CSS, JS, PHP et MySQL. Il avait pour but d'avoir une page d'inscription, de connexion, une page d'accès à son compte, une page de produit, et une page de panier.",
    },
    skills: ["html", "css", "javascript", "php", "sql"],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation du site e-commerce" },
        path: "/media/schools/ipssi/projects/2e-annee/ecommerce/BTSSIO_-_CDC_-_E-Commerce.pdf",
      },
    ],
    images: []
  },
  {
    slug: "inventaire",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "2" },
    title: { fr: "Inventaire du parc informatique" },
    summary: { fr: "Inventaire du parc informatique afin de commencer le projet final" },
    description: {
      fr: "Nous avons dû, en tant que SLAM, faire l'inventaire du parc informatique dans la salle des serveurs, et repertorier tout ce qui a dans la salle, afin de voir si tout est prêt et rien ne manque afin de commencer le projet final.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'inventaire" },
        path: "/media/schools/ipssi/projects/2e-annee/inventaire/Inventaire.pdf",
      },
    ],
    images: []
  },
  {
    slug: "poke-app",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "2" },
    title: { fr: "Développement d'une application PokeAPI" },
    summary: { fr: "Première application mobile avec l'API Pokémon" },
    description: {
      fr: "Pour terminer cette année, nous avons commencé à prendre de l'avance et avons commencé à apprendre Flutter et Dart, afin de créer une application mobile. L'application mobile avait premièrement pour but d'apprendre les langages de programmation mobile, mais aussi de découvrir de nouvelles méthodes de développement (mobile), et savoir utiliser une API.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation du PokeAPI" },
        path: "/media/schools/ipssi/projects/2e-annee/poke/pokeapi.pdf",
      },
    ],
    images: []
  },
  {
    slug: "ap1-horizonweb",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP1 - Horizon Web" },
    summary: { fr: "Création d'une entreprise fictive" },
    description: {
      fr: "Pour démarrer le projet, on nous a demandé en groupe de 3, de créer une entreprise fictive. Il fallait trouver une idée de site, créer l'organigramme de l'entreprise, créer un extrait KBIS, créer des bulletins de paie, ou encore des faux contrats de vente. Nous avons  choisi une agence de développement web, où nous proposons création de site, maintenance et hébergement.",
    },
    skills: [],
    links: [],
    cover: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_accueil.png",
    documents: [
      {
        label: { fr: "Documentation de l'AP1" },
        path: "/media/schools/ipssi/projects/ap1-horizonweb/AP1 - Horizon Web.pdf",
      },
    ],
    images: [
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_accueil.png",
        alt: { fr: "Page d'accueil du site Horizon Web" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_about.png",
        alt: { fr: "Page de présentation de l'entreprise" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_services_1.png",
        alt: { fr: "Page des services, première partie" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_services_2.png",
        alt: { fr: "Page des services, seconde partie" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_forfait_dev.png",
        alt: { fr: "Forfait développement" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_forfait_hebergement.png",
        alt: { fr: "Forfait hébergement" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_forfait_maintenance.png",
        alt: { fr: "Forfait maintenance" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_contact.png",
        alt: { fr: "Page de contact" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_1.png",
        alt: { fr: "Conditions générales d'utilisation, partie 1" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_2.png",
        alt: { fr: "Conditions générales d'utilisation, partie 2" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_3.png",
        alt: { fr: "Conditions générales d'utilisation, partie 3" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_4.png",
        alt: { fr: "Conditions générales d'utilisation, partie 4" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_5.png",
        alt: { fr: "Conditions générales d'utilisation, partie 5" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/Organigramme.png",
        alt: { fr: "Organigramme de l'entreprise fictive" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/fiche de poste.png",
        alt: { fr: "Fiche de poste" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/fiche de paie.png",
        alt: { fr: "Fiche de paie" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/document-kbis.png",
        alt: { fr: "Extrait Kbis de l'entreprise" },
      },
    ],
  },
  {
    slug: "ap2-m2l",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP2 - M2L" },
    summary: { fr: "Mise en place des MCD, MPD, et MLD" },
    description: {
      fr: "Conception des schémas MCD, MPD, et MLD, afin de mieux comprendre le fonctionnement du projet. On voit toutes les relations possibles, prévues par mes soins, afin de faciliter le jour du développement du site et de l'application.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'AP2" },
        path: "/media/schools/ipssi/projects/ap2-m2l/AP2-M2L.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "ap3-m2l",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP3 - M2L" },
    summary: { fr: "Mise en place d'un cahier des charges et du site internet" },
    description: {
      fr: "Après la mise en place des schémas conceptuels, j'ai commencé à faire le cahier des charges du projet, avec les différentes tables du site, les schémas, les rôles demandés, et à répondre aux contraintes données par le projet. Quand le cahier des charges a été validé par mes soins et la Maison de Loraine, j'ai commencé la conception du site web.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'AP3 - Cahier des charges" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-CDC.pdf",
      },
      {
        label: { fr: "Documentation de l'AP3 - Utilisateur" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-USER.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "ap4-m2l",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP4 - M2L" },
    summary: { fr: "Mise en place d'un cahier des charges et de l'application mobile" },
    description: {
      fr: "Après le site, viens l'application mobile. Cette application mobile est réservé au staff de la M2L. Elle a pour but la gestion des stocks. La M2L pour expliquer, c'est une association qui gère les stocks de matériel de sport aux différentes associations ou écoles.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'AP3 - Cahier des charges" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-CDC.pdf",
      },
      {
        label: { fr: "Documentation de l'AP3 - Utilisateur" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-USER.pdf",
      },
    ],
    images: [],
  },
]