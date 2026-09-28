import type { Project } from "@/content/types"

export const projects: readonly Project[] = [
  {
    slug: "site-web",
    status: "completed",
    context: { kind: "experience", slug: "the-grid-cybercafe" },
    title: { 
      fr: "Site du cybercafé",
      en: "Cybercafe website"
    },
    summary: { 
      fr: "Site du cybercafé, du front-end à l'hébergement.", 
      en: "Cybercafe website, from front-end to hosting."
    },
    description: {
      fr: "Conception, développement et mise en ligne du site du cybercafé. Version actuelle : interface React et TypeScript, API Node.js avec Express, hébergée sur un VPS OVH avec nom de domaine OVH. Nouvelle version en cours avec une base de données MariaDB gérée via Prisma.",
      en: "Design, development and putthe website online. Current version : React and Typescript interface, Node.js API with Express, hosted on an OVH VPS with OVH domain. New version in progress with a MariaDB database managed via Prisma."
    },
    skills: ["typescript", "react", "nodejs", "express", "tailwind", "prisma", "mariadb", "vps"],
    links: [
      {
        label: { fr: "Site du cybercafé", en: "Cybercafe website" },
        url: "https://www.thegridcybercafe.fr",
      },
    ],
    documents: [],
    featured: true,
    cover: "/media/experiences/the-grid/thegrid.png",
    images: [
      { src: "/media/experiences/the-grid/projects/hero.png", alt: { fr: "Section d'accueil", en: "Home section" } },
      { src: "/media/experiences/the-grid/projects/services.png", alt: { fr: "Section des services", en: "Services section" } },
      { src: "/media/experiences/the-grid/projects/pricing.png", alt: { fr: "Section des tarifs", en: "Pricing section" } },
      { src: "/media/experiences/the-grid/projects/config.png", alt: { fr: "Section de configuration", en: "Configuration section" } },
      { src: "/media/experiences/the-grid/projects/howitworks.png", alt: { fr: "Section du règlement", en: "Rules section" } },
      { src: "/media/experiences/the-grid/projects/events.png", alt: { fr: "Section des événements", en: "Events section" } },
      { src: "/media/experiences/the-grid/projects/faq.png", alt: { fr: "Section des FAQs", en: "FAQ section" } },
      { src: "/media/experiences/the-grid/projects/booking.png", alt: { fr: "Section de réservation", en: "Booking section" } },
      { src: "/media/experiences/the-grid/projects/contact.png", alt: { fr: "Section de contact", en: "Contact section" } },
      { src: "/media/experiences/the-grid/projects/access.png", alt: { fr: "Section d'accès", en: "Access section" } },
    ],
  },
  {
    slug: "agence-web",
    status: "in-progress",
    context: { kind: "personal" },
    title: { fr: "Site d'agence de développement web", en: "Digital agency website" },
    summary: { 
      fr: "Site vitrine de mon projet d'agence de développement web.", 
      en: "Business website of my digital agency projet."
    },
    description: {
      fr: "Conception du site de ma futur agence de développement web et mobile. Pour l'instant, ce n'est que du test pour développer mes compétences, et aussi tester des choses auprès des commercans de ma ville. J'essaye de proposer des prix raisonnables pour ce que je compte produire, et avant que ce projet soit lancé, il faut que je test plusieurs projets différents (applications mobiles, logiciels métiers, sites vitrine, etc.) afin de justifier les prix. ",
      en: "Website design of my future digital agency web and mobile.At the moment, this website is a test and only here to test my skills, and also to test things with local shopkeepers. I try to propose fair prices for what I plan to produce, and before this project is launched, I need to test several different projects (mobile applications, business software, websites, etc.) in order to justify the prices."
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
    title: { fr: "Streams", en: "Streams" },
    summary: { fr: "Création de contenu en direct.", en: "Live content creation." },
    description: {
      fr: "Diffusion de contenu en direct sur les jeux vidéos tels que Rocket League ou Counter-Strike 2. Il est prévu à terme avec la croissance de la chaîne, de se diriger vers d'autres petits indépendants, de gestion et de simulation auxquels j'aime jouer dans mon temps-libre, et qui sont calmes pour des lives. Evidemment, d'autres contenus pourront arriver aussi, juste le temps nous le dira. ",
      en: "Streaming on video games like Rocket League or Counter-Strike 2. It is planned in the futur with the channel growth, to focus on small independents, management and simulation games I like to play in my free time, and which are chill for live. Of course, other contents will also arrive, just the time will tell us."
    },
    skills: ["french", "english"],
    links: [
      {
        label: { fr: "Lien du stream", en: "Stream link" },
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
    title: { fr: "Portfolio", en: "Portfolio" },
    summary: { fr: "Ce site : mon parcours complet, bilingue et animé.", en: "This website : my complet journey, bilingual and animated." },
    description: {
      fr: "Refonte de mon portfolio avec Vite, React, TypeScript, Tailwind CSS, shadcn/ui et Motion. De nouveaux détails ont été rajouté, car en 2 ans, de nombreux événements ont eu lieu.",
      en: "Rework of my portfolio with Vite, React, TypeScript, Tailwind CSS, shadcn/ui and Motion. New details have been added, because in 2 years, many events have taken place."
    },
    skills: ["typescript", "react", "tailwind", "french", "english"],
    links: [
      {
        label: { fr: "Lien du portfolio", en: "Portfolio Link" },
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
    title: { fr: "Sensibilisation des employés au phishing", en: "Employees awareness to phishing" },
    summary: { fr: "Mission 1 du stage chez Team Vitality.", en: "Team Vitality intership mission 1." },
    description: {
      fr: "Tester la sécurité auprès des employés et les sensibiliser aux tentatives d'hameçonnage. Pour celà, j'ai donc créé de toute pièce une copie d'un site d'un jeu vidéo (Valve, propriétaire de Counter-Strike, et Steam), avec un formulaire à remplir. Un faux mail a été envoyé comprenant une fausse soirée organisée, après un événement, qui lui, existait bel et bien (Major Paris 2023), dans lequel j'invitais le staff de l'équipe à une soirée de remerciement après la finale de l'événement, afin de discuter du futur du jeu, qui après cet événement, a reçu un changement majeur (passage de Counter-Strike: Global Offensive, à Counter-Strike 2). Dans ce formulaire, on demandait : nom et prénom, adresse mail, et mot de passe. Lorsqu'un employé remplissait le formulaire, en récupérait les informations via javascript pour le système de back, et python pour l'écriture des informations dans un google sheet (où seul le mot de passe n'était pas stocké évvidemment). Nous avons utilisé cron pour une vérification toutes les 10 minutes des informations reçues, et d'un serveur physique, avec faux nom de domaine pour rendre le projet crédible.",
      en: "Security test to employees and to sensitize them about phishing methods. For that, I have created a copy of a real website from a video game (Valve, developer of Counter-Strike, and Steam), with a form to apply. A phishing email was sent out announcing a fake after-party for a genuine event (Major Paris 2023); the email invited team staff to a post-final gathering to discuss the game's future—specifically the major transition from (Counter-Strike: Global Offensive to Counter-Strike 2) that followed the event. The associated form requested the recipient's full name, email address, and password. When an employee filled out the form, the data was captured via JavaScript for the backend system, while Python was used to log the information into a Google Sheet (excluding the password, of course). We used a physical server and a fake domain name to lend credibility to the project, along with a cron job to check for incoming data every 10 minutes."
    },
    skills: ["css", "html", "javascript", "french", "english", "php", "python"],
    links: [],
    documents: [
      {
        label: { fr: "Documentation du phishing", en: "Phishing documentation" },
        path: "/media/experiences/team-vitality/projects/phishing/Mission1.pdf",
      }
    ],
    images: [
      { src: "/media/experiences/team-vitality/projects/phishing/html1.png", alt: { fr: "Première partie du code", en: "First part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html2.png", alt: { fr: "Seconde partie du code", en: "Second part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html3.png", alt: { fr: "Troisième partie du code", en: "Third part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html4.png", alt: { fr: "Quatrième partie du code", en: "Fourth part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html5.png", alt: { fr: "Cinquième partie du code", en: "Fifth part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/html6.png", alt: { fr: "Sixieme partie du code", en: "Sixth part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/js1.png", alt: { fr: "Septieme partie du code", en: "Seventh part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/js2.png", alt: { fr: "Huitieme partie du code", en: "Eighth part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/php1.png", alt: { fr: "Neuvieme partie du code", en: "Nineth part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/pyp1.png", alt: { fr: "Dixieme partie du code", en: "Tenth part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/pyp2.png", alt: { fr: "Onzieme partie du code", en: "Eleventh part of the code" }},
      { src: "/media/experiences/team-vitality/projects/phishing/send_mail.png", alt: { fr: "Système d'envoie de mail", en: "Mail sending system" }},
      { src: "/media/experiences/team-vitality/projects/phishing/mail.png", alt: { fr: "Mail envoyé via un script", en: "Mail sent via a script" }},
      { src: "/media/experiences/team-vitality/projects/phishing/cron_job.png", alt: { fr: "Cron pour la verification d'une réponse au formulaire", en: "Cron to check for a form response" }},
      { src: "/media/experiences/team-vitality/projects/phishing/ggsheet1.png", alt: { fr: "Résultat du formulaire reçu", en: "Form response result" }},
      { src: "/media/experiences/team-vitality/projects/phishing/ggsheet2.png", alt: { fr: "Résultat du formulaire reçu" }},
      { src: "/media/experiences/team-vitality/projects/phishing/site1.png", alt: { fr: "Image du site et test", en: "Image of the site and test" }},
      { src: "/media/experiences/team-vitality/projects/phishing/site2.png", alt: { fr: "Image du site et test", en: "Image of the site and test" }},
      { src: "/media/experiences/team-vitality/projects/phishing/site3.png", alt: { fr: "Image du site et test", en: "Image of the site and test" }},
    ],
  },
  {
    slug: "ligue-corpo-2023-overlay",
    status: "completed",
    context: { kind: "experience", slug: "team-vitality" },
    title: { fr: "Overlay pour la Ligue Corpo 2023", en: "Overlay for Ligue Corpo 2023" },
    summary: { fr: "Mission 2 du stage chez Team Vitality.", en: "Team Vitality intership mission 2." },
    description: {
      fr: "Préparation d'un overlay de diffusion pour la Ligue Corpo 2023, un tournoi League Of Legend, organisé par Team Vitality, où des employés de différentes entreprises tels que la SNCF GAMING, ORANGE ou encore AFFLELOU se reassemblent pour une compétition. Mon but ici, était de créer un overlay, qui sera utilisé lors de la diffusion en directe, afin de rendre dynamique la partie choix des personnages. L'overlay était animé, et affichait correctement l'image du personnage qui a été choisi par chaque joueur. ",
      en: "Streaming overlay development for Ligue Corpo 2023, a League Of Legend tournament, organized by Team Vitality, where employees from differents companies like SNCF GAMING, ORANGE or AFFLELOU come together for a competition. My goal here, was to create an overlay, which will be used during the live broadcast, in order to make the choice of characters more dynamic. The overlay was animated, and displayed the correct image of the character that has been chosen by each players."
    },
    skills: ["html", "css", "javascript"],
    links: [],
    documents: [
      {
        label: { fr: "Documentation de l'overlay", en: "Overlay documentation" },
        path: "/media/experiences/team-vitality/projects/overlay-twitch/Mission2.pdf",
      }
    ],
    images: [
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html1.png", alt: { fr: "Première partie du fronted", en: "First part of the fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html2.png", alt: { fr: "Seconde partie du fronted", en: "Second part of the fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html3.png", alt: { fr: "Troisième partie du fronted", en: "Third part of the fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html-bonus.png", alt: { fr: "Quatrième partie du fronted", en: "Fourth part of the fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/html-bonus2.png", alt: { fr: "Cinquième partie du fronted", en: "Fifth part of the fronted" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js1.png", alt: { fr: "Première partie du backend", en: "First part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js2.png", alt: { fr: "Deuxième partie du backend", en: "Second part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js3.png", alt: { fr: "Troisième partie du backend", en: "Third part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus1.png", alt: { fr: "Quatrième partie du backend", en: "Fourth part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus2.png", alt: { fr: "Cinquième partie du backend", en: "Fifth part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus3.png", alt: { fr: "Sixieme partie du backend", en: "Sixth part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus4.png", alt: { fr: "Septieme partie du backend", en: "Seventh part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/js-bonus5.png", alt: { fr: "Huitieme partie du backend", en: "Eighth part of the backend" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/overlay1.png", alt: { fr: "Image de l'overlay", en: "Image of the overlay" }},
      { src: "/media/experiences/team-vitality/projects/overlay-twitch/overlay2.png", alt: { fr: "Image de l'overlay", en: "Image of the overlay" }},
    ]
  },
  {
    slug: "api-meteo",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Création d'une API meteo", en: "Meteo API creation" },
    summary: { fr: "Projet de première année d'IPSSI", en: "First year project of IPSSI" },
    description: {
      fr: "Création d'une API meteo, utilisant la documentation de l'API openweathermap. Les données sont ensuite affichées sur un site web. ",
      en: "Meteo API creation, using the openweathermap API documentation. The data is then displayed on a website."
    },
    skills: ["html", "css", "javascript", "french", "english"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/API-meteo/1.png",
    documents: [
      {
        label: { fr: "Documentation de l'API Météo", en: "Meteo API documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/API-meteo/API Météo.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/API-meteo/1.png", alt: { fr: "Résultat du code", en: "Result of the code" }},
    ]
  },
  {
    slug: "calculatrice",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Création d'une calculatrice", en: "Calculator creation" },
    summary: { fr: "Projet de première année d'IPSSI", en: "First year project of IPSSI" },
    description: {
      fr: "Création d'une calculatrice faite en HTML, CSS, et Javascript.",
      en: "Calculator creation, made in HTML, CSS, and Javascript."
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/calculatrice/1.png",
    documents: [
      {
        label: { fr: "Documentation de la calculatrice", en: "Calculator documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/calculatrice/Calculatrice.pdf",
      },
    ],
    images: [
      { src: "/media/schools/ipssi/projects/1ere-annee/calculatrice/1.png", alt: { fr: "Test du code", en: "Test of the code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/calculatrice/2.png", alt: { fr: "Test du code", en: "Test of the code" }},
      { src: "/media/schools/ipssi/projects/1ere-annee/calculatrice/3.png", alt: { fr: "Test du code", en: "Test of the code" }},
    ]
  },
  {
    slug: "GLPI",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "VM Debian & GLPI", en: "VM Debian & GLPI" },
    summary: { fr: "Mise en place d'une VM Debian et installation de GLPI", en: "Setting up a VM Debian and installation of GLPI" },
    description: {
      fr: "Mise en place d'une VM Debian et installation de GLPI, afin de pouvoir créer un système de tickets.",
      en: "Setting up a VM Debian and installation of GLPI, in order to create a ticket system."
    },
    skills: ["french", "english", "glpi"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/glpi/glpi.jpeg",
    documents: [
      {
        label: { fr: "Documentation de GLPI", en: "GLPI documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/glpi/GLPI - Florent Bernier.pdf",
      },
    ],
    images: []
  },
    {
    slug: "map-interactive",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Map interactive", en: "Interactive map" },
    summary: { fr: "Mise en place d'une map interactive", en: "Building an interactive map" },
    description: {
      fr: "Mise en place d'une map interactive de la ville de Paris, avec des points d'intérêt. Des boutons de lieux sont cliquables, pointant l'endroit sur la map et donnant les informations du lieu.",
      en: "Building an interactive map of Paris with points of interest. Clickable place buttons pinpoint the location on the map and display information about it.",
    },
    skills: ["react", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/map-interactive/2.png",
    documents: [
      {
        label: { fr: "Documentation de la map interactive", en: "Interactive map documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/map-interactive/Map Intéractive.pdf",
      },
    ],
    images: [
      {
        src: "/media/schools/ipssi/projects/1ere-annee/map-interactive/1.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
      {
        src: "/media/schools/ipssi/projects/1ere-annee/map-interactive/2.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
    ],
  },
  {
    slug: "projet-biblio",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Projet bibliothèque", en: "Library project" },
    summary: { fr: "Création d'un site de livres", en: "Building a book website" },
    description: {
      fr: "Ce projet avait pour but de créer un projet grandeur nature afin de valider nos compétences en PHP, HTML, CSS et JavaScript. C'est un site e-commerce permettant l'achat de livres.",
      en: "This project aimed to build a real-world application to validate our skills in PHP, HTML, CSS and JavaScript. It is an e-commerce website for buying books.",
    },
    skills: ["html", "css", "javascript", "php"],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation du projet bibliothèque", en: "Library project documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/projetbiblio/Projet Bibliothèque - Florent Bernier.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "random-quote",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Citation aléatoire", en: "Random quote" },
    summary: { fr: "Création d'un site de citations", en: "Building a quote website" },
    description: {
      fr: "Site permettant d'afficher une citation aléatoire parmi une liste prédéfinie par mes soins.",
      en: "Website that displays a random quote from a list I curated myself.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/randomquote/1.png",
    documents: [
      {
        label: { fr: "Documentation de la citation aléatoire", en: "Random quote documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/randomquote/RandomQuote.pdf",
      },
    ],
    images: [
      {
        src: "/media/schools/ipssi/projects/1ere-annee/randomquote/1.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
      {
        src: "/media/schools/ipssi/projects/1ere-annee/randomquote/2.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
    ],
  },
  {
    slug: "shifumi",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "Mini-jeu Shifumi", en: "Rock-paper-scissors mini-game" },
    summary: { fr: "Création d'un shifumi", en: "Building a rock-paper-scissors game" },
    description: {
      fr: "Création d'un mini-jeu, le Shifumi. Le code génère une action parmi la pierre, la feuille et les ciseaux, le joueur fait de même, puis le résultat s'affiche. Les points sont comptés, et le premier à 3 points a gagné.",
      en: "Building a rock-paper-scissors mini-game. The code picks rock, paper or scissors, the player does the same, and the result is displayed. Points are tracked, and the first to reach 3 points wins.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/shifumi/1.png",
    documents: [
      {
        label: { fr: "Documentation du mini-jeu Shifumi", en: "Rock-paper-scissors documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/shifumi/Shifumi.pdf",
      },
    ],
    images: [
      {
        src: "/media/schools/ipssi/projects/1ere-annee/shifumi/1.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
      {
        src: "/media/schools/ipssi/projects/1ere-annee/shifumi/2.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
    ],
  },
  {
    slug: "todo-list",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "1" },
    title: { fr: "To-Do List", en: "To-do list" },
    summary: { fr: "Création d'une To-Do List", en: "Building a to-do list" },
    description: {
      fr: "Création d'une To-Do List en JavaScript, avec validation des tâches, sauvegarde en mémoire des actions et affichage des tâches.",
      en: "Building a to-do list in JavaScript, with task completion, in-memory saving of actions and task display.",
    },
    skills: ["html", "css", "javascript"],
    links: [],
    cover: "/media/schools/ipssi/projects/1ere-annee/todojs/1.png",
    documents: [
      {
        label: { fr: "Documentation de la To-Do List", en: "To-do list documentation" },
        path: "/media/schools/ipssi/projects/1ere-annee/todojs/TodoJS.pdf",
      },
    ],
    images: [
      {
        src: "/media/schools/ipssi/projects/1ere-annee/todojs/1.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
      {
        src: "/media/schools/ipssi/projects/1ere-annee/todojs/2.png",
        alt: { fr: "Résultat du code", en: "Code output" },
      },
    ],
  },
  {
    slug: "e-commerce",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "2" },
    title: { fr: "Site e-commerce", en: "E-commerce website" },
    summary: { fr: "Création d'un site e-commerce complet", en: "Building a complete e-commerce website" },
    description: {
      fr: "Pour ce projet, nous étions en groupe de 3 et avions pour but de créer un site e-commerce en HTML/CSS, JS, PHP et MySQL. Il devait comporter une page d'inscription, de connexion, une page d'accès à son compte, une page produit et une page panier.",
      en: "For this project, we worked in a team of 3 to build an e-commerce website with HTML/CSS, JS, PHP and MySQL. It had to include sign-up and login pages, an account page, a product page and a cart page.",
    },
    skills: ["html", "css", "javascript", "php", "sql"],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation du site e-commerce", en: "E-commerce website documentation" },
        path: "/media/schools/ipssi/projects/2e-annee/ecommerce/BTSSIO_-_CDC_-_E-Commerce.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "inventaire",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "2" },
    title: { fr: "Inventaire du parc informatique", en: "IT asset inventory" },
    summary: {
      fr: "Inventaire du parc informatique afin de commencer le projet final",
      en: "IT asset inventory ahead of the final project",
    },
    description: {
      fr: "Nous avons dû, en tant que SLAM, faire l'inventaire du parc informatique de la salle des serveurs et répertorier tout ce qui s'y trouve, afin de vérifier que tout était prêt et que rien ne manquait pour commencer le projet final.",
      en: "As SLAM students, we had to inventory the IT equipment in the server room and list everything in it, to make sure everything was ready and nothing was missing before starting the final project.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'inventaire", en: "Inventory documentation" },
        path: "/media/schools/ipssi/projects/2e-annee/inventaire/Inventaire.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "poke-app",
    status: "completed",
    context: { kind: "education", slug: "ipssi", year: "2" },
    title: { fr: "Développement d'une application PokeAPI", en: "PokeAPI app development" },
    summary: {
      fr: "Première application mobile avec l'API Pokémon",
      en: "First mobile app using the Pokémon API",
    },
    description: {
      fr: "Pour terminer cette année, nous avons pris de l'avance en commençant à apprendre Flutter et Dart, afin de créer une application mobile. L'objectif était d'abord d'apprendre les langages de programmation mobile, mais aussi de découvrir de nouvelles méthodes de développement mobile et de savoir utiliser une API.",
      en: "To wrap up the year, we got a head start by learning Flutter and Dart to build a mobile app. The main goal was to learn mobile programming languages, as well as to discover new mobile development methods and learn how to use an API.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation du PokeAPI", en: "PokeAPI documentation" },
        path: "/media/schools/ipssi/projects/2e-annee/poke/pokeapi.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "ap1-horizonweb",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP1 - Horizon Web", en: "AP1 - Horizon Web" },
    summary: { fr: "Création d'une entreprise fictive", en: "Creating a fictional company" },
    description: {
      fr: "Pour démarrer le projet, on nous a demandé, en groupe de 3, de créer une entreprise fictive. Il fallait trouver une idée de site, créer l'organigramme de l'entreprise, un extrait Kbis, des bulletins de paie ou encore de faux contrats de vente. Nous avons choisi une agence de développement web proposant création de site, maintenance et hébergement.",
      en: "To kick off the project, we were asked, in a team of 3, to create a fictional company. We had to come up with a website idea and produce the company's org chart, a company registration certificate, payslips and mock sales contracts. We chose a web development agency offering website creation, maintenance and hosting.",
    },
    skills: [],
    links: [],
    cover: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_accueil.png",
    documents: [
      {
        label: { fr: "Documentation de l'AP1", en: "AP1 documentation" },
        path: "/media/schools/ipssi/projects/ap1-horizonweb/AP1 - Horizon Web.pdf",
      },
    ],
    images: [
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_accueil.png",
        alt: { fr: "Page d'accueil du site Horizon Web", en: "Horizon Web home page" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_about.png",
        alt: { fr: "Page de présentation de l'entreprise", en: "Company about page" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_services_1.png",
        alt: { fr: "Page des services, première partie", en: "Services page, part one" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_services_2.png",
        alt: { fr: "Page des services, seconde partie", en: "Services page, part two" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_forfait_dev.png",
        alt: { fr: "Forfait développement", en: "Development plan" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_forfait_hebergement.png",
        alt: { fr: "Forfait hébergement", en: "Hosting plan" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_forfait_maintenance.png",
        alt: { fr: "Forfait maintenance", en: "Maintenance plan" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_contact.png",
        alt: { fr: "Page de contact", en: "Contact page" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_1.png",
        alt: { fr: "Conditions générales d'utilisation, partie 1", en: "Terms of use, part 1" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_2.png",
        alt: { fr: "Conditions générales d'utilisation, partie 2", en: "Terms of use, part 2" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_3.png",
        alt: { fr: "Conditions générales d'utilisation, partie 3", en: "Terms of use, part 3" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_4.png",
        alt: { fr: "Conditions générales d'utilisation, partie 4", en: "Terms of use, part 4" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/horizon_CGU_5.png",
        alt: { fr: "Conditions générales d'utilisation, partie 5", en: "Terms of use, part 5" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/Organigramme.png",
        alt: { fr: "Organigramme de l'entreprise fictive", en: "Fictional company org chart" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/fiche de poste.png",
        alt: { fr: "Fiche de poste", en: "Job description" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/fiche de paie.png",
        alt: { fr: "Fiche de paie", en: "Payslip" },
      },
      {
        src: "/media/schools/ipssi/projects/ap1-horizonweb/document-kbis.png",
        alt: { fr: "Extrait Kbis de l'entreprise", en: "Company registration certificate (Kbis)" },
      },
    ],
  },
  {
    slug: "ap2-m2l",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP2 - M2L", en: "AP2 - M2L" },
    summary: { fr: "Mise en place des MCD, MPD et MLD", en: "Designing the conceptual, logical and physical data models" },
    description: {
      fr: "Conception des schémas MCD, MPD et MLD, afin de mieux comprendre le fonctionnement du projet. On y voit toutes les relations possibles, prévues par mes soins, afin de faciliter le développement du site et de l'application.",
      en: "Designing the conceptual, logical and physical data models to better understand how the project works. They show every relationship I planned, to make building the website and the app easier.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'AP2", en: "AP2 documentation" },
        path: "/media/schools/ipssi/projects/ap2-m2l/AP2-M2L.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "ap3-m2l",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP3 - M2L", en: "AP3 - M2L" },
    summary: {
      fr: "Mise en place d'un cahier des charges et du site internet",
      en: "Writing the specifications and building the website",
    },
    description: {
      fr: "Après la mise en place des schémas conceptuels, j'ai rédigé le cahier des charges du projet, avec les différentes tables du site, les schémas, les rôles demandés et les réponses aux contraintes du projet. Une fois le cahier des charges validé par la Maison des Ligues de Lorraine et moi-même, j'ai commencé la conception du site web.",
      en: "After designing the data models, I wrote the project specifications, covering the website's tables, diagrams, required roles and how to meet the project constraints. Once the specifications were approved by the Maison des Ligues de Lorraine and myself, I started building the website.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'AP3 - Cahier des charges", en: "AP3 documentation - Specifications" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-CDC.pdf",
      },
      {
        label: { fr: "Documentation de l'AP3 - Utilisateur", en: "AP3 documentation - User guide" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-USER.pdf",
      },
    ],
    images: [],
  },
  {
    slug: "ap4-m2l",
    status: "completed",
    context: { kind: "education", slug: "ipssi" },
    title: { fr: "AP4 - M2L", en: "AP4 - M2L" },
    summary: {
      fr: "Mise en place d'un cahier des charges et de l'application mobile",
      en: "Writing the specifications and building the mobile app",
    },
    description: {
      fr: "Après le site vient l'application mobile. Elle est réservée au personnel de la M2L et sert à la gestion des stocks. La M2L est une association qui gère le prêt de matériel de sport aux différentes associations et écoles.",
      en: "After the website came the mobile app. It is reserved for M2L staff and is used for inventory management. The M2L is an association that manages sports equipment loans to various associations and schools.",
    },
    skills: [],
    links: [],
    cover: "",
    documents: [
      {
        label: { fr: "Documentation de l'AP4 - Cahier des charges", en: "AP4 documentation - Specifications" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-CDC.pdf",
      },
      {
        label: { fr: "Documentation de l'AP4 - Utilisateur", en: "AP4 documentation - User guide" },
        path: "/media/schools/ipssi/projects/ap3-m2l/AP3-USER.pdf",
      },
    ],
    images: [],
  },
]