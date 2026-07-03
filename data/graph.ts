import { Node, Edge } from "@xyflow/react";
import { NotebookPen } from "lucide-react";

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
      icon: "github",
      size: "lg",
      accentColor: "#181717",
    },
  },

  {
    id: "projects",
    type: "section",
    position: { x: 557.1278688524591, y: 338.81311475409836 },
    data: {
      title: "Projects",
      icon: "folder",
      size: "md",
      accentColor: "#22c55e",
    },
  },

  {
    id: "blog",
    type: "section",
    position: { x: 187.92131147540977, y: 48.31475409836068 },
    data: {
      title: "Blog",
      icon: NotebookPen,
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
    target: "blog",
  },
  {
    id: "4",
    source: "profile",
    target: "resume",
  },
  {
    id: "5",
    source: "github",
    target: "leetcode",
  },
];
