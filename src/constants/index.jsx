import { FaInstagram, FaGithub, FaLinkedin, FaDatabase, FaNodeJs, FaJava,FaCode } from "react-icons/fa6";

import projectImage1 from "../assets/Protfolio.png";
import projectImage2 from "../assets/TripPocket.png";
import projectImage3 from "../assets/MeetSpace.png";
import projectImage4 from "../assets/WonderLust.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/SimonGame.png";

import { RiReactjsLine } from "react-icons/ri";

import { SiMongodb, SiWebrtc,SiSocketdotio, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Achievements", href: "#achievements" },
];

export const HERO = {
  name: "Santhosh",
  greet: "Hello there! 👋🏻",
  description:
    "Backend-focused developer skilled in Java, Data Structures & Algorithms, and Full Stack Development — passionate about building scalable, real-world solutions with impact.",
};


export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/chowhan123/my-portfolio",
  },
  {
    id: 3,
    name: "TripPocket - AI-Powered Trip Planner",
    description:
      "A website designed to help users plan their trips more efficiently using AI.",
    image: projectImage2,
  },
  {
    id: 2,
    name: "MeetSpace : A Real-time video conferencing platform",
    description:
      "Built a real-time video conferencing platform supporting P2P video, audio, and chat with secure authentication and meeting history tracking.",
    image: projectImage3,
    githubLink: "https://github.com/chowhan123/MeetSpace",
  },
  {
    id: 4,
    name: "Wanderlust - An hotel Accomdation website",
    description:
      "A website designed to implemet accomdation of hotels using MERN stack.",
    image: projectImage4,
    githubLink: "https://github.com/chowhan123/Wonderlust",
  },
  {
    id: 5,
    name: "Sportify - A Sports Event social Networking System",
    description:
      "Accomplished real-time local sports matchmaking using the MERN stack, which led to increased community engagement and reduced social anxiety by connecting players based on location and need..",
    image: projectImage5,
  },
  {
    id: 6,
    name: "Simon Game – Classic Memory Game",
    description:
      "A classic memory game built with HTML, CSS, and JavaScript – test your brain power with colors! 🎮🧠",
    image: projectImage6,
    githubLink: "https://github.com/chowhan123/Simon-Game",
  },
];

export const BIO = [
  "Final-year Electronics and Communication student at Malaviya National Institute of Technology, passionate about software development and building scalable solutions.",
  "Worked as a Backend Intern at Datavalley Web Services, where I built a LinkedIn automation bot integrating OpenAI GPT and third-party APIs, automated publishing workflows, and developed secure authentication systems.",
  "Skilled in Java, Data Structures & Algorithms, and OOP; actively mentors peers and enjoys solving real-world problems through code.",
  "Hands-on experience developing real-time applications like MeetSpace and AI-powered tools like TripPocket, using Node.js, Express.js, React.js, and MongoDB."
];


export const SKILLS = [
  {
    icon: <FaJava className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Java",
  },
  {
    icon: <FaCode className="text-4xl text-purple-500 lg:text-5xl" />,
    name: "DSA",
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "DBMS",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <SiWebrtc className="text-4xl text-green-500 lg:text-5xl" />,
    name: "WebRTC",
  },
  {
    icon: <SiSocketdotio className="text-4xl text-gray-700 lg:text-5xl" />,
    name: "Socket.IO",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "MySQL",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "CSS",
  },
   {
    icon: <SiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
  },
];

export const EXPERIENCES = [
  {
    title: "Backend Developer Intern (Node.js)",
    company: "DataValley Web Services",
    duration: "March 2025 - June 2025",
    description: [
      "Built a LinkedIn automation bot with Node.js and LinkedIn API, boosting content scheduling efficiency by 80%.",
      "Integrated OpenAI GPT, Google Trends, and Twitter API to auto-generate hashtag suggestions and improve engagement.",
      "Automated publishing workflows with cron jobs, reducing manual effort by 60%.",
      "Designed secure JWT authentication with role-based access and developed dynamic post management with Cloudinary uploads.",
    ],
  },
];

export const ACHIVEMENTS = [
  {
    id: 1,
    description: [
      "Built TripPocket, AI trip planner reducing planning time by 70%.",
      "Solved 250+ coding problems on LeetCode & GFG.",
      "Vice-Captain of college Kabaddi team, balancing academics and sports."
    ]
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Malaviya National Institute of Technology, Jaipur",
    duration: "June 2022 - May 2026",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/_santuuuuuu/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/chowhan123",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/santhosh-chauhan/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
