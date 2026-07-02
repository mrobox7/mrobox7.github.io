import { Node, Edge } from "@xyflow/react";

export const nodes: Node[] = [
  {
    id: "profile",
    type: "profile",
    position: { x: 350, y: 220 },
    data: {
      name: "Mohit Bajaj",
      role: "AI Full Stack Builder",
    },
  },

  {
    id: "github",
    type: "social",
    position: { x: 100, y: 80 },
    data: {
      title: "GitHub",
      href: "https://github.com/mrobox7",
      icon: "github",
    },
  },

  {
    id: "projects",
    type: "section",
    position: { x: 620, y: 90 },
    data: {
      title: "Projects",
    },
  },

  {
    id: "blog",
    type: "section",
    position: { x: 620, y: 360 },
    data: {
      title: "Blog",
    },
  },

  {
    id: "resume",
    type: "resume",
    position: { x: 120, y: 360 },
    data: {
      href: "/resume.pdf",
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
];