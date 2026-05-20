import {
  FaNodeJs,
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiGooglegemini,
} from "react-icons/si";
import profileImg from "../assets/profile.avif";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "REST APIs", "JWT"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git", "GitHub", "Postman", "MongoDB Atlas", "VS Code", "Vercel"],
  },
  {
    title: "Programming Languages",
    icon: FaCode,
    description:
      "Core languages I've learned and work with across different domains.",
    tags: ["JavaScript", "C", "C++", "Python"],
  },
];

export const projects = [
  {
    title: "Redex — AI Expense Tracker",
    tag: "Final Year Project",
    description:
      "A full-stack AI-powered expense tracker with an Android companion app that auto-captures transactions from UPI notifications and screenshots using Google Gemini, a Next.js dashboard with charts and budget tracking, and an async job pipeline for recurring transactions and monthly email reports.",
    image: projectImg1,
    tech: ["Next.js", "Prisma", "PostgreSQL", "Gemini AI"],
    icons: [SiNextdotjs, SiPrisma, SiPostgresql, SiGooglegemini],
    demo: "https://redex-self.vercel.app",
    code: "https://github.com/devxniv/Redex",
  },

  {
    title: "Project Management System",
    tag: "Frontend Under Development",
    description:
      "A RESTful backend API for managing projects, tasks, and team members with JWT authentication and role-based access control.",
    image: projectImg2,
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    icons: [FaNodeJs, SiExpress, SiMongodb, SiJsonwebtokens],
    demo: "https://project-management-system-ba6l.onrender.com",
    code: "https://github.com/devxniv/project-management-system",
  },
];

export const education = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Technology in CSE",
    institute: "Shree Siddheshwar Women's College of Engineering, Solapur",
  },
  {
    year: "2021 - 2022",
    degree: "HSC (12th)",
    institute: "Walchand College of Arts and Science, Solapur",
  },
  {
    year: "2019 - 2020",
    degree: "SSC (10th)",
    institute: "Haribhai Deokaran High School, Solapur",
  },
];

export const certifications = [
  {
    name: "Artificial Intelligence Fundamentals",
    credential:
      "https://www.credly.com/badges/9de8b2ab-fb2c-4008-9a08-1659cdce67e5",
    from: "IBM SkillsBuild",
  },
  {
    name: "AWS Academy Cloud Foundations",
    credential:
      "https://www.credly.com/badges/d3d3a045-d62d-40fd-96ad-882a1f81a7f8",
    from: "AWS",
  },
  {
    name: "SQL (Basic)",
    credential: "https://www.hackerrank.com/certificates/f04c5bc77b1f",
    from: "HackerRank",
  },
  {
    name: "JavaScript (Basic)",
    credential: "https://www.hackerrank.com/certificates/22fe1f582d9f",
    from: "HackerRank",
  },
];
