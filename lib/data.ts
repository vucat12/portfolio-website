import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs, FaAngular } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BandaiNamcoImage from "@/public/bandainamco.jpg";
import OcbcImage from "@/public/ocbc.jpg";
import GoNetZeroImage from "@/public/gonetzero.png";
import PickafundImage from "@/public/pickafund.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering",
    location: "UIT | Vietnam",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Frontend Developer - Mobile & Web",
    location: "WATA | Vietnam",
    description:
      "In charge of software development, deployment and application for Customer relationship management system.",
    icon: React.createElement(FaAngular),
    date: "Oct 2020 - Jun 2021",
  },
  {
    title: "Frontend Web Developer",
    location: "HDWEBSOFT Software Development | Frontend Web Developer",
    description:
      "Front-end of outsourcing projects for England. Maintained a bad project into a stable project go-live for 6 months.",
    icon: React.createElement(FaVuejs),
    date: "Jun 2021 - Feb 2022",
  },
  {
    title: "Full Stack Developer",
    location: "VK Link | Vietnam",
    description:
      "I am a Full-stack developer for various projects. Have a good mindset about E-commerce, designed the system/ databaseI",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Sep 2023",
  },
  {
    title: "Software Engineer",
    location: "TechVSI | Vietnam",
    description:
      "Working for banking project and environmental project. Having experience in building zero to hero projects and maintaining projects to stable.",
    icon: React.createElement(FaVuejs),
    date: "Sep 2023 - Aug 2024",
  },
  {
    title: "Lead Frontend Developer",
    location: "Section | Singapore",
    description:
      "Working as a lead front-end developer for a banking project and crm project. Experience in training and leading a team with 3-5 members.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "OCBC Bank",
    description:
      "A web app allows end-users to fill out forms for loans including Car Loan, Home Loan and Reno Loans. I had a business trip in Singapore to train about the flow of the project for 2 months. Connecting between clients in Singapore and developers in Vietnam.",
    tags: ["React", "Redux", "Vue", "Vuex"],
    imageUrl: OcbcImage,
  },
  {
    title: "Bandai NamCo",
    description:
      "Bandai Namco exists to share dreams, fun and inspiration with people around the world. Connecting people and societies in the enjoyment of uniquely entertaining products and services, we’re working to create a brighter future for everyone.",
    tags: ["Nextjs", "Material UI", "Contentful"],
    imageUrl: BandaiNamcoImage,
  },
  {
    title: "GoNetZero",
    description:
      "Build a CMS system. “GoNetZero” is designed to solve the demand and supply sides of decarbonization, as well as energy asset management.",
    tags: ["Nextjs", "Material UI", "Umbraco"],
    imageUrl: GoNetZeroImage,
  },
  {
    title: "Pickafund",
    description: `Assessing the quality of a mutual fund scheme involves a good amount of research and
    knowledge of both equity and debt markets for the investor Building system with Vue
    2, RESTfull API.`,
    tags: ["React", "Material UI", "PostgreSQL", "Nodejs"],
    imageUrl: PickafundImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
