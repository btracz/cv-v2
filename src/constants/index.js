import {
  frontend,
  backend,
  leaderhip,
  mentor,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  sql,
  mui,
  mongo,
  storybook,
  skill_alexa,
  whose_turn,
  mootus,
  hattrick_bot,
  proxy_store,
  atos,
  sopra,
  citc,
  svsu,
  hei,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Leader",
    icon: leaderhip,
  },
  {
    title: "Manager & Mentor",
    icon: mentor,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tech Lead Frontend",
    company_name: "Sopra Steria",
    description:
      "Développeur fullstack, Manager, Leader Technique, Référent Technique.",
    icon: sopra,
    date: "2012 - Aujourd'hui",
  },
  {
    title: "Master Ingénieur Généraliste",
    description:
      "École d'ingénieur avec classes préparatoires intégrées, spécialité : Informatique et Technologies de l'Information.",
    company_name: "Hautes Etudes d'Ingénieur (HEI)",
    icon: hei,
    date: "2007 - 2012",
  },
  {
    title: "Semestre d'étude",
    description: "Programme Undergraduate, spécialisation Computer Science.",
    company_name: "Saginaw Valley State University",
    icon: svsu,
    date: "2012",
  },
  {
    title: "Stagiaire Ingénieur R&D",
    description:
      "Création d'un prototype de terminal mobile (tablette tactile) d'assistance vendeur en surface de vente.",
    company_name: "Atos Worldline",
    icon: atos,
    date: "2011",
  },
  {
    title: "Stagiaire Ingénieur R&D",
    description:
      "Mise en place d'une architecture middleware RFID EPCglobal (Standard GS1).",
    company_name: "Centre d'Innovation des Technologies sans Contact",
    icon: citc,
    date: "2011",
  },
];

const projects = [
  {
    id: "mootus",
    name: "Mootus",
    description:
      "Jeu de Motus infini avec statistiques, inspiré de Wordle, Le Mot, Sutom...",
    tags: [
      {
        name: "React",
      },
      {
        name: "Material UI",
      },
    ],
    image: mootus,
    demo: "https://mootus.tracz.fr/",
  },
  {
    id: "proxy-store",
    name: "Proxy Store",
    description:
      'Boutique générique "thématisable" permettant de lister et comparer des produits vendus sur Amazon',
    tags: [
      {
        name: "React",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: proxy_store,
    wip: true,
  },
  {
    id: "skill-alexa",
    name: "Prochain Train",
    description:
      "Skill Alexa (non publiée) qui retourne les informations du prochain train passant dans la gare la plus proche.",
    tags: [
      {
        name: "AWS",
      },
      {
        name: "Node JS",
      },
    ],
    image: skill_alexa,
    private: true,
  },
  {
    id: "hattrick-bot",
    name: "Hattrick Scout",
    description: `Bot Selenium qui parcourt une marketplace de joueurs de football dans un jeu de football fantasy à la recherche de bonnes affaires.`,
    tags: [
      {
        name: "Node JS",
      },
      {
        name: "Selenium",
      },
    ],
    image: hattrick_bot,
    private: true,
  },
  {
    id: "whose-turn",
    name: "Whose Turn",
    description:
      "Application de gestion des tournées de viennoiseries au bureau avec planning, sondage de présence et rappels.",
    tags: [
      {
        name: "Node JS",
      },
      {
        name: "Azure",
      },
      {
        name: "JS",
      },
      {
        name: "CSS",
      },
    ],
    image: whose_turn,
    private: true,
    repo: "https://github.com/btracz/WhoseTurn",
  },
];

export { services, technologies, experiences, projects };
