import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import storyteller from "@/public/storyteller.png";
import independentBookstore from "@/public/independentBookstore.png";
import hifive from "@/public/hifive.png";

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
    title: "Bachelor of Design - Computing and Software Systems",
    location: "University of Melbourne, Parkville, VIC",
    description:
      "Through the progression of my course, I have engaged in a diverse curriculum that has shaped my understanding of, and trained me in algorithms, data processing, databases, object oriented software design and development, user interface development, and models of computation. I’m excited to continue for another year, learning more about game design, computer systems, and graphics and interaction.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Present",
  },
  {
    title: "Software Engineer Intern",
    location: "Xero, Hawthorn, VIC",
    description:
      "During my internship at Xero, I worked with experienced professionals in a close-knit, full stack team. I engaged in both front-end and back-end development, deployed bug fixes and enhancing accessibility features in production. I also learned and applied the AGILE methodology by facilitating key sprint ceremonies including stand ups, planning, and refinement. While there, I deepened my understanding of production pipelines, Git workflows, synthetic and E2E testing, and user analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Feb 2025",
  },
  {
    title: "Women in Technology Bootcamp ",
    location: "Accenture, Melbourne, VIC",
    description:
      "In this 4-day bootcamp with over 100 women in technology, I collaborated in a diverse team of eight to address the problem statement of leveraging technology to enhance daily living, communication and interaction for people with various disabilities. I played a pivotal role in the conceptualisation and implementation of our solution, an innovative gamification approach to a to-do list, targeted at individuals with mental illness, which earned us a commendable 2nd place finish.",
    icon: React.createElement(FaReact),
    date: "Oct 2024",
  },
  {
    title: "Empower to Employ Program",
    location: "Bupa, Melbourne, VIC",
    description:
      "Over a two month period, I worked closely with university students to create a solution for Bupa’s digital engagement problem. We designed and proposed a solution that involved a two-pronged approach, aimed at providing customers a greater incentive to engage with Bupa’s services, while navigating budget and operational constraints. I designed a high-fidelity Figma model, which together with our pitch, was recognised for its creative and interactive design, achieving a notable 2nd place ranking.",
    icon: React.createElement(FaReact),
    date: "Jul 2024",
  },
] as const;

export const projectsData = [
  {
    title: "StoryTeller",
    description:
      "Part of the solution for BuildClub’s problem statement ‘AI for a better world’. An AI-powered web application generates engaging and meaningful stories that revolve around ethical decisions to teach children - our future leaders of the world - qualities such as leadership, generousity, kindness and more.",
    tags: ["React", "JavaScript", "HTML", "CSS", "OpenAI", "JigsawStack", "DALL-E"],
    imageUrl: storyteller,
  },
  {
    title: "HiFive",
    description:
      "Scoring a perfect score, this project is a digital rendition of the popular card game ‘HiFive’. It utilises Object Oriented Programming principles and popular design patterns, such as the Strategy and Composite pattern, to implement complex game logic for 4 different types of players.",
    tags: ["Java", "Object Oriented Programming", "Design Patterns", "UML"],
    imageUrl: hifive,
  },
  {
    title: "The Independent Bookstore",
    description:
      "The Independent Bookstore is a small business specialising in the sale of books from independent Australian writers. This redesigned website is my submission for the final assessment in ‘User Interface Development’, utilising the fundamentals of user interface design and the Gestalt design techniques.",
    tags: ["HTML", "CSS", "JavaScript", "Adobe XD"],
    imageUrl: independentBookstore,
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "Java",
  "Javascript",
  "TypeScript",
  "Kotlin",
  "HTML",
  "CSS",
  "SQL",
  "React",
  "Adobe Cloud",
  "Object Oriented Programming",
  "AWS",
  "Git",
  "Next.js",
  "Figma",
  "Framer Motion",
  "UML"
] as const;
