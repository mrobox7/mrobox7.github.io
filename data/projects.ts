import type { SkillUsage } from "./skills";

export type Project = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  featured?: boolean;
  highlights: string[];
  technologies: SkillUsage[];
  repository?: string;
  liveDemo?: string;
};

export const projects: Project[] = [
  {
    id: "web-os",
    title: "Web-OS",
    description:
      "A desktop-like operating system experience in the browser with window management, state persistence, and modular applications.",
    startDate: "2026-06-01",
    featured: true,
    highlights: [
      "Built a desktop-style window management system.",
      "Implemented persistent application state using Zustand.",
      "Designed reusable UI primitives for scalable applications.",
    ],
    technologies: [
      { skillId: "react", scope: "core" },
      { skillId: "nextjs", scope: "core" },
      { skillId: "typescript", scope: "core" },
      { skillId: "zustand", scope: "core" },
    ],
    repository: "https://github.com/mrobox7/web-os",
    liveDemo: "https://mrobox7-portfolio.netlify.app/",
  },

  {
    id: "3d-interactive-portfolio",
    title: "3D Interactive Portfolio",
    description:
      "A developer portfolio featuring graph-based navigation, smooth animations, and an immersive browsing experience.",
    startDate: "2026-05-01",
    featured: true,
    highlights: [
      "Created an interactive graph navigation experience.",
      "Built reusable animated node components.",
      "Focused on accessibility and responsive interactions.",
    ],
    technologies: [
      { skillId: "react", scope: "core" },
      { skillId: "threejs", scope: "core" },
    ],
    repository: "",
    liveDemo: "",
  },

  {
    id: "3d-avatar-streaming-system",
    title: "3D Avatar Streaming System",
    description:
      "A real-time avatar streaming platform combining facial tracking, WebRTC communication, and 3D rendering.",
    startDate: "2025-11-01",
    highlights: [
      "Integrated real-time video streaming with WebRTC.",
      "Tracked facial landmarks using MediaPipe.",
      "Rendered synchronized avatars in a 3D environment.",
    ],
    technologies: [
      { skillId: "react", scope: "core" },
      { skillId: "threejs", scope: "core" },
      { skillId: "webrtc", scope: "core" },
      { skillId: "peerjs", scope: "significant" },
      { skillId: "mediapipe", scope: "significant" },
    ],
    repository: "",
    liveDemo: "",
  },
];