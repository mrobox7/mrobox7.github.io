"use client";

import BaseNode from "./BaseNode";
import { ExternalLink } from "lucide-react";

interface SocialNodeProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function SocialNode({
  title,
  href,
  icon,
  size = "md",
}: SocialNodeProps) {
  return (
    <BaseNode
      size={size}
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <div className="text-3xl text-cyan-400">{icon}</div>

        <p className="text-sm font-medium">{title}</p>

        <ExternalLink
          size={14}
          className="text-white/40 group-hover:text-cyan-400"
        />
      </div>
    </BaseNode>
  );
}