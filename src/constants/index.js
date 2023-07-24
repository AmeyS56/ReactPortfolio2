import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  netflixSS,
  AIss,
  ChatSS,
  nirmitee,
  ibm,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Practitioner",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Nirmitee.io",
    icon: nirmitee,
    iconBg: "#383E56",
    date: "February 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Data Analyst ",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "October 2022 - November 2022",
    points: [
      "Worked as a Data Analyst during my IBM internship. Contributed to a project focused on Breast CancerDetection using Machine Learning.",
      "Collected and preprocessed large-scale breast cancer datasets. Conducted exploratory data analysis to identify patterns and trends.",
      "Developed predictive models using machine learning algorithms. Optimized models through feature engineering.",
      "Learnt about various ML models and statistics. ",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MERN Stack Netflix Clone",
    description:
      "Cutting-edge Netflix-inspired platform with extensive API integration, granting users the ability to stream, discover, and manage a vast collection of movies and TV shows, delivering an immersive entertainment experience. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: netflixSS,
    source_code_link: "https://github.com/AmeyS56/netflix-UI",
  },
  {
    name: "AI text-based Image generator. ",
    description:
      "MERN-based platform facilitating job search, offering salary insights, and localizing opportunities for users.Converts Text prompt to AI generated Image.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB-atlas",
        color: "green-text-gradient",
      },
      {
        name: "OPEN_AI's API",
        color: "pink-text-gradient",
      },
    ],
    image: AIss,
    source_code_link: "https://github.com/AmeyS56/DalleClone-ReactJs",
  },
  {
    name: "AI-Chat Application",
    description:
      "Revolutionary ChatGPT-inspired platform, harnessing powerful APIs, enabling users to engage in natural, dynamic conversations, and access a wealth of knowledge across diverse topics, transforming the way we interact and seek information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ChatSS,
    source_code_link: "https://github.com/AmeyS56/ChatGPT3_clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
