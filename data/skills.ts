export const skills = [
  { id: "javascript", label: "JavaScript", category: "language" },
  { id: "typescript", label: "TypeScript", category: "language" },
  { id: "python", label: "Python", category: "language" },
  { id: "react", label: "React", category: "frontend" },
  { id: "react-native", label: "React Native", category: "frontend" },
  { id: "nextjs", label: "Next.js", category: "frontend" },
  { id: "zustand", label: "Zustand", category: "frontend" },
  { id: "threejs", label: "Three.js", category: "frontend" },
  { id: "phaser", label: "Phaser", category: "frontend" },
  { id: "nodejs", label: "Node.js", category: "backend" },
  { id: "websockets", label: "WebSockets", category: "backend" },
  { id: "pub-sub", label: "Pub/Sub", category: "backend" },
  { id: "web-apis", label: "Web APIs", category: "backend" },
  { id: "webrtc", label: "WebRTC", category: "backend" },
  { id: "peerjs", label: "PeerJS", category: "backend" },
  { id: "machine-learning", label: "Machine Learning", category: "ai" },
  { id: "mediapipe", label: "MediaPipe", category: "ai" },
] as const;

export type SkillId = (typeof skills)[number]["id"];
export type SkillScope = "core" | "significant" | "supporting";

export type SkillUsage = {
  skillId: SkillId;
  scope: SkillScope;
};

export const skillById = Object.fromEntries(
  skills.map((skill) => [skill.id, skill]),
) as Record<SkillId, (typeof skills)[number]>;

export const skillScopeWeight: Record<SkillScope, number> = {
  core: 1,
  significant: 0.65,
  supporting: 0.35,
};
