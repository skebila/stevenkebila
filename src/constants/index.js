import { linkedin, github, email, instagram, studenthaven, lumosemarketplace, lup, } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Let's connect",
  },
];

export const navButtons = [
  {
    id: "resume",
    title: "Resume",
  },
 /* {
    id: "contact-me",
    title: "Contact me"
  },*/
]

export const projects = [
  {
    id: "project-1",
    title: "Lumose Marketplace Inc.",
    category: "crypto token landing page",
    description: "Lumose Marketplace is a software, tools and services comparison platform curated for small law firms. ",
    url: "https://www.lumosemarketplace.com/",
    bg: lumosemarketplace,
    stack: [
      'React JS',
      'Node.js',
      'Airtable',
      'Zapier',
      'Member Stack',
    ],
  },
  {
    id: "project-2",
    title: "Lumose Upskilling Program",
    category: "Non Profit Organization",
    description: "Lumose Upskilling Program is an initiative designed to support the underserved communities living in Ontario who need skills training to help them find greater opportunities for employment in occupations with better job prospects.",
    bg: lup,
    stack: [
      'React JS',
      'Node.js',
    ],
  },
  {
    id: "project-3",
    title: "Student Haven App",
    category: "Student Social Media",
    description: "Student Haven App is a capstone project I worked on for my end of year semester. This app is a student social media platform where student from multiple schools can interact and connect with each other",
    bg: studenthaven,
    stack: [
      'React Native',
      'Node.js',
      'Firebase',
      'Expo',
    ],
  },
  {
    id: "project-4",
    title: "Tesla App",
    category: "Clone",
    description: "Tesla App is a clone of the real tesla website but instead of a website clone, I built it as a native app.",
    stack: [
      'React Native',
      'Node.js',
    ],
  },
  {
    id: "project-5",
    title: "Kichi Coin",
    category: "crypto token landing page",
    description: "KichiCoin ($KICH) is a revolutionary De-Fi community-driven utility token that provides safe, secure, hassle-free transactions for everyone, along with a weekly lottery system utilizing Chainlink VRF that brings joy to our holders.",
    url: "https://www.kichicoin.com",
    stack: [
      'React JS',
      'Node.js',
    ],
  },
  {
    id: "project-6",
    title: "Perera Legal",
    category: "Law Firm",
    description: "Perera Legal is a leading boutique law firm based in Calgary, Alberta with virtual offices in Toronto and Edmonton.",
    url: "https://www.pereralegal.ca",
    stack: [
      'Webflow',
    ],
  },
  {
    id: "project-7",
    title: "Buy My Practice",
    category: "Law Firm Shop",
    description: "Buy My Practice helps lawyers and small law firms buy or invest into other law firms that are for sale dependent on the buyer's preferred practice area or jurisdiction.",
    stack: [
      'JavaScript',
    ],
  },
  {
    id: "project-8",
    title: "Overcomers Christian Center",
    category: "Religious Organization",
    description: "Overcomers Christian Center is a christian community located in Brampton Ontario.",
    url: "",
    stack: [
      'React JS',
      'Node.js',
    ],
  },
]

export const footerLinks = [
  {
    title: "Living, learning, and leveling up one second at a time.",
    links: [
      {
        name: "Github",
        url: "https://github.com/skebila",
        icon: github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/steven-kebila",
        icon: linkedin,
      },
      {
        name: "Email",
        url: "mailto:me@stevenkebila.com",
        icon: email,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/stevenkebila_/",
        icon: instagram,
      },
    ],
  },
  
];
