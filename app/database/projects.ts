import React from 'react';
import type { ReactNode } from 'react';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaMobileAlt, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux } from 'react-icons/si';
type Technologies = {
    name: string,
    icon: React.ElementType,
}


type ProjectLinks = {
    name: string,
    icon: React.ElementType,
    link: string
}

export interface ProjectTypes {
    id: string;
    name: string;
    category: "Design" | "Web" | "Mobile" | "Writings" | "Startups" | "Software" | "Other";
    description: string;
    deliverable: string;
    challenge: string;
    goal: string;
    result: string;
    client: string;
    timeline: string;
    link: string;
    gallery: string[];
    image: string;
    technologies: Technologies[];
    type: string;
    otherLinks: ProjectLinks[];
    slug: string;
    codeUrl: string; 
};

const projects = [
  {
    id: "1",
    title: "Interactive Portfolio",
    description: "An immersive, animated portfolio built with React and Tailwind.",
    mediaType: "video",
    mediaSrc: "/media/portfolio-demo.mp4",
    tags: ["React", "Animation", "Design"],
    figmaUrl: "https://www.figma.com/file/xyz123/Project-Design",
    codeUrl: "https://github.com/username/portfolio-project" // 👈 Added
  },
  {
    id: "2",
    title: "E-commerce Dashboard",
    description: "Admin panel with real-time analytics and order management.",
    mediaType: "image",
    mediaSrc: "/images/ecommerce-dashboard.png",
    tags: ["Next.js", "Tailwind", "Charts"],
    figmaUrl: "https://www.figma.com/file/abc456/Ecommerce-UI",
    codeUrl: "https://github.com/username/ecommerce-dashboard" // 👈 Added
  }
];




export default projects;