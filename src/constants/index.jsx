import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaAws,
  FaDatabase,
  FaNodeJs,
  FaJava,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiFirebase,
  SiDocker,
  SiJenkins,
  SiTerraform,
  SiKubernetes,
  SiPostman,
  SiRender,
  SiVercel,
  SiNeovim,
  SiStrapi,
  SiPassport,
  SiMapbox,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiNewrelic,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mihir Kate",
  greet: "Hello there! 👋🏻",
  description:
    "Focused on backend engineering with expertise in Node.js, AWS, Docker, and Blockchain—actively building scalable, impactful solutions.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/mihirkate/Mihir-Kate-Portfolio",
  },
  {
    id: 3,
    name: "Swapex - A Decentralized Exchange Platform",
    description:
      " A website designed to improvise Decentralised Swapping of assets built with use of backpack.exchange apis .",
    image: projectImage2,
    githubLink: "https://github.com/mihirkate/Swapex",
  },
  {
    id: 2,
    name: "Decentraise : A crowd funding platform built on blockchain using Ethereum",
    description:
      "A website designed to Raise Funds using Ethereum Blockchain and Smart Contracts.",
    image: projectImage3,
    githubLink: "https://github.com/mihirkate/DecentRaise",
  },
  {
    id: 4,
    name: "Wanderlust - An hotel Accomdation website",
    description:
      "A website designed to implemet accomdation of hotels using MERN stack.",
    image: projectImage4,
    githubLink: "https://wanderlust-as9d.onrender.com/",
  },
  {
    id: 5,
    name: "Sportify - A Sports Event social Networking System",
    description:
      "Accomplished real-time local sports matchmaking using the MERN stack, which led to increased community engagement and reduced social anxiety by connecting players based on location and need..",
    image: projectImage5,
    githubLink: "https://sporti-fy.vercel.app/",
  },
  {
    id: 6,
    name: "Transactly – Simplified Digital Payments Platform",
    description:
      "Accomplished cashless transaction flow and user-wallet integration using the MERN stack, which led to enhanced financial accessibility and smoother payments for both users and small businesses.",
    image: projectImage6,
    githubLink: "https://github.com/mihirkate/Paytm-CI-CD-Mihir",
  },
];

export const BIO = [
  "Final-year Computer Science student at MCT's Rajiv Gandhi Institute of Technology, passionate about backend development and scalable solutions.",
  "Built secure, optimized APIs during an internship at Xzect Labs and won Smart India Hackathon 2024 for digitizing philately operations.",
  "Skilled in Node.js, MongoDB, Firebase, and PostgreSQL; actively mentors peers and thrives on solving real-world problems through code.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    name: "Technical Skills",
    categories: {
      Languages: [
        {
          name: "JavaScript (Node.js)",
          icon: <SiJavascript className="text-yellow-400 text-2xl" />,
        },
        { name: "Java", icon: <FaJava className="text-red-500 text-2xl" /> },
        {
          name: "SQL (MySQL, PostgreSQL)",
          icon: <SiMysql className="text-blue-500 text-2xl" />,
        },
      ],
      Frameworks: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500 text-2xl" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-600 text-2xl" />,
        },
        {
          name: "HONO",
          icon: <SiNeovim className="text-green-600 text-2xl" />,
        }, // no official HONO icon, placeholder
        {
          name: "React.js",
          icon: <RiReactjsLine className="text-cyan-400 text-2xl" />,
        },
        {
          name: "Next.js",
          icon: <TbBrandNextjs className="text-white text-2xl" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500 text-2xl" />,
        },
      ],
      "DevOps / Cloud Tools": [
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-500 text-2xl" />,
        },
        { name: "Git", icon: <SiGit className="text-orange-600 text-2xl" /> },
        { name: "GitHub", icon: <SiGithub className="text-white text-2xl" /> },
        {
          name: "Jenkins CI/CD",
          icon: <SiJenkins className="text-red-500 text-2xl" />,
        },
        {
          name: "Terraform",
          icon: <SiTerraform className="text-purple-500 text-2xl" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-600 text-2xl" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500 text-2xl" />,
        },
        {
          name: "New Relic",
          icon: <SiNewrelic className="text-green-600 text-2xl" />,
        },
        {
          name: "AWS (EC2, S3, RDS, IAM, VPC)",
          icon: <FaAws className="text-orange-400 text-2xl" />,
        },

        {
          name: "Render",
          icon: <SiRender className="text-purple-400 text-2xl" />,
        },
        { name: "Vercel", icon: <SiVercel className="text-white text-2xl" /> },
      ],
      Databases: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600 text-2xl" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-2xl" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-sky-700 text-2xl" />,
        },
      ],
    },
  },
];

export const EXPERIENCES = [
  {
    title: "Backend Developer Intern (Node.js)",
    company: "Xzect Labs",
    duration: "June 2024 - August 2024",
    description: [
      "Engineered and optimized 10+ RESTful APIs using Node.js and MongoDB, reducing API response latency by 30%.",
      "Integrated and customized Strapi CMS across 3+ dynamic web themes. Cut deployment time by 50%.",
      "Collaborated within a cross-functional team of 5+. Ensured seamless backend-frontend integration, decreasing integration issues by 40%.",
      "Enhanced API security using JWT authentication, OAuth 2.0, and role-based access control systems.",
    ],
  },
];

export const ACHIVEMENTS = [
  {
    id: 1,
    title: "Winner- Smart India Hackathon 2024",
    description:
      " Built the DAK platform to digitize 100% offline philately operations, integrating an EPDA module, real-time dashboards, and an AI chatbot,  leading to a 70% boost in user engagement",
  },
];
export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Rajiv Gandhi Institute of Technology ,Mumbai University",
    duration: "June 2021 - May 2025",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/katemihir25",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/mihirkate",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://linkedin.com/in/mihirkate",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
