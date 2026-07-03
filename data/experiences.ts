import type { SkillUsage } from "./skills";

export type ExperienceRole = {
  role: string;
  employmentType: "Full Time" | "Internship";
  duration: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: SkillUsage[];
};

export type Experience = {
  company: string;
  logo: {
    mark: string;
    label: string;
  };
  location?: string;
  roles: ExperienceRole[];
};

export const experiences: Experience[] = [
  {
    company: "Cuemath",
    logo: {
      mark: "C",
      label: "Cuemath",
    },
    roles: [
      {
        role: "Software Development Engineer",
        employmentType: "Full Time",
        duration: "Jul 2024 – Apr 2026",
        startDate: "2024-07-01",
        endDate: "2026-05-01",
        achievements: [
          "Built and scaled core experiences for a gamified learning platform serving 50K+ users and 5K+ daily active users across web and mobile.",
          "Architected reusable game frameworks, base classes, and shared utilities that reduced new game development effort by 75%+.",
          "Developed real-time multiplayer systems with synchronized gameplay, scoring, timers, leaderboards, and live state updates.",
          "Owned key user journeys including onboarding, authentication, the home feed, and interactive learning experiences.",
        ],
        technologies: [
          { skillId: "react", scope: "core" },
          { skillId: "react-native", scope: "significant" },
          { skillId: "typescript", scope: "core" },
          { skillId: "nodejs", scope: "significant" },
          { skillId: "websockets", scope: "core" },
          { skillId: "pub-sub", scope: "core" },
        ],
      },
      {
        role: "Software Development Engineer Intern",
        employmentType: "Internship",
        duration: "Nov 2023 – Jul 2024",
        startDate: "2023-11-01",
        endDate: "2024-08-01",
        achievements: [
          "Shipped 17+ production learning games spanning multiplayer, puzzle, and math-based experiences.",
          "Implemented live gameplay updates and synchronized multiplayer interactions with WebSockets.",
          "Created reusable game utilities and modular components that improved consistency and accelerated delivery across game experiences.",
        ],
        technologies: [
          { skillId: "react", scope: "core" },
          { skillId: "phaser", scope: "core" },
          { skillId: "javascript", scope: "significant" },
          { skillId: "websockets", scope: "significant" },
        ],
      },
    ],
  },
  {
    company: "FrugalX",
    logo: {
      mark: "Fx",
      label: "FrugalX",
    },
    roles: [
      {
        role: "Web-ML Intern",
        employmentType: "Internship",
        duration: "May 2023 – Jul 2023",
        startDate: "2023-05-01",
        endDate: "2023-08-01",
        achievements: [
          "Built web interfaces that integrated machine-learning outputs into interactive user-facing features.",
          "Translated model results into clear interface states that made technical outputs easier to explore.",
          "Developed the browser-side integration between model-driven workflows and the product experience.",
        ],
        technologies: [
          { skillId: "javascript", scope: "significant" },
          { skillId: "python", scope: "significant" },
          { skillId: "machine-learning", scope: "core" },
          { skillId: "web-apis", scope: "significant" },
        ],
      },
    ],
  },
];
