import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  doodlelogo,
  beupdlogo,
  threejs,
  nextjs,
  creator,
  beproject,
  expensetracker,
  zenclone,
  metaverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelance Developer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Beupd",
    icon: beupdlogo,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and Nextjs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "And Worked directly with founder and Co-founder.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Doodleblue Innovations Pvt Ltd",
    icon: doodlelogo,
    iconBg: "#383E56",
    date: "April 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
      "Renewed and optimize a web application classify as Doodle360 to monitor the employees day to day activities.",
    ],
  },
];

const projects = [
  {
    name: "Beupd",
    description:
      "Web-based platform that allows users to read and search day-to-day news, and manage their interesting topics from this newsletter web app.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: beproject,
    source_code_link: "https://github.com/",
    live_preview_link: "https://beupd.com",
  },
  {
    name: "Zen Portal Clone",
    description:
      "This Zen Portal Clone to democratize tech education worldwide by meeting the standards of the EdTech industry. In this web-app where Users can access there classes.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "RestApi",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: zenclone,
    source_code_link: "https://github.com/Irshath-git/Zen-Portal-frontend",
    live_preview_link: "https://zenclone-portal.netlify.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "Web application that enables users to track their daily expenses savings and investments, and you can store your salary and predict your expenses of the month.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://github.com/Irshath-git/money-manager-frontend",
    live_preview_link: "https://expenso-an-tracker.netlify.app/",
  },
  {
    name: "Metaverse",
    description:
      "A comprehensive metaverse website that allows users to the VR world, different types of metaverse were added to this feature.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Irshath-git/Metaverse",
    live_preview_link: "https://m-metaversus.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
