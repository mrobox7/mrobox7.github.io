import { Node, Edge } from "@xyflow/react";
import { BriefcaseBusiness, Laptop, NotebookPen } from "lucide-react";

export const nodes: Node[] = [
  {
    id: "profile",
    type: "profile",
    position: { x: 315.21967213114755, y: 198.5967213114754 },
    data: {
      name: "Mohit Bajaj",
      role: "Full-Stack/AI",
      avatar: "/user.png",
      size: "xl",
      accentColor: "#38bdf8",
    },
  },

  {
    id: "resume",
    type: "resume",
    position: { x: 479.1737704918033, y: 77.07540983606557 },
    data: {
      href: "/resume.pdf",
      size: "sm",
      accentColor: "#228B22",
    },
  },

  {
    id: "github",
    type: "social",
    position: { x: -64.53770491803279, y: 128.82622950819672 },
    data: {
      title: "GitHub",
      href: "https://github.com/mrobox7",
      image: "/github.png",
      size: "lg",
      accentColor: "#181717",
    },
  },

  {
    id: "linkedin",
    type: "social",
    position: { x: 175, y: 382 }, // adjust visually
    data: {
      href: "https://www.linkedin.com/in/mohit-bajaj-775693214/",
      image: "/linkedin-logo.png",
      size: "xs",
      accentColor: "#0A66C2",
    },
  },

  {
    id: "instagram",
    type: "social",
    position: { x: 105, y: 318 }, // adjust visually
    data: {
      href: "https://instagram.com/wtfisbajaj",
      image: "/instagram-logo.png",
      size: "xs",
      accentColor: "#E4405F",
    },
  },

  {
    id: "experience",
    type: "section",
    position: { x: 602.1278688524591, y: 178.81311475409836 },
    data: {
      sectionId: "experience",
      title: "Experience",
      icon: BriefcaseBusiness,
      size: "md",
      accentColor: "#FF8904",
    },
  },

  {
    id: "cuemath",
    type: "social",
    position: { x: 735, y: 112 },
    data: {
      href: "https://www.cuemath.com/en-in/",
      image: "/cuemath.png",
      size: "xs",
      accentColor: "#FFFFFF",
    },
  },

  {
    id: "projects",
    type: "section",
    position: { x: 557.1278688524591, y: 338.81311475409836 },
    data: {
      sectionId: "projects",
      title: "Projects",
      icon: Laptop,
      href: "/projects",
      size: "md",
      accentColor: "#22c55e",
    },
  },

  {
    id: "blog",
    type: "section",
    position: { x: 187.92131147540977, y: 48.31475409836068 },
    data: {
      sectionId: "blog",
      title: "Blog",
      icon: NotebookPen,
      href: "/blog",
      size: "sm",
      accentColor: "#F2003C",
    },
  },

  {
    id: "leetcode",
    type: "leetcode",
    position: { x: -264.53770491803279, y: 178.82622950819672 },
    data: {
      username: "mrobox7",
      accentColor: "#f89f1b",
      size: "lg",
    },
  },

  {
    id: "star-project",
    type: "social",
    position: { x: 667, y: 312 },
    data: {
      href: "https://mrobox7-portfolio.netlify.app/",
      image: "/star.png",
      size: "xs",
      accentColor: "#FFFFFF",
    },
  },
];

export const edges: Edge[] = [
  {
    id: "1",
    source: "profile",
    target: "github",
  },
  {
    id: "2",
    source: "profile",
    target: "projects",
  },
  {
    id: "3",
    source: "profile",
    target: "experience",
  },
  {
    id: "4",
    source: "profile",
    target: "blog",
  },
  {
    id: "5",
    source: "profile",
    target: "resume",
  },
  {
    id: "6",
    source: "github",
    target: "leetcode",
  },
  {
    id: "7",
    source: "profile",
    target: "linkedin",
  },
  {
    id: "8",
    source: "linkedin",
    target: "instagram",
  },
  {
    id: "9",
    source: "experience",
    target: "cuemath",
  },
  {
    id: "10",
    source: "projects",
    target: "star-project",
  },
];
