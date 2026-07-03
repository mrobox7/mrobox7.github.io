import type { SkillUsage } from "./skills";

export type Project = {
  id: string;
  title: string;
  technologies: SkillUsage[];
};

// This lightweight evidence source is also ready to back the future /projects route.
export const projects: Project[] = [
  {
    id: "browser-based-operating-system",
    title: "Browser-Based Operating System",
    technologies: [
      { skillId: "react", scope: "core" },
      { skillId: "nextjs", scope: "core" },
      { skillId: "typescript", scope: "core" },
      { skillId: "zustand", scope: "core" },
    ],
  },
  {
    id: "3d-interactive-portfolio",
    title: "3D Interactive Portfolio",
    technologies: [
      { skillId: "react", scope: "core" },
      { skillId: "threejs", scope: "core" },
    ],
  },
  {
    id: "3d-avatar-streaming-system",
    title: "3D Avatar Streaming System",
    technologies: [
      { skillId: "react", scope: "core" },
      { skillId: "threejs", scope: "core" },
      { skillId: "webrtc", scope: "core" },
      { skillId: "peerjs", scope: "significant" },
      { skillId: "mediapipe", scope: "significant" },
    ],
  },
];
