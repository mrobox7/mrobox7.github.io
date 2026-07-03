"use client";

import { type Node, type NodeProps } from "@xyflow/react";
import BaseNode from "./BaseNode";
import { ExternalLink } from "lucide-react";

type SocialData = {
  title: string;
  href: string;
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  accentColor?: string;
};

type SocialNodeType = Node<SocialData>;

export default function SocialNode({ data }: NodeProps<SocialNodeType>) {
  const { title, href, icon, size = "md", accentColor } = data;
  const darkAccent = accentColor?.toLowerCase() === "#181717";

  return (
    <BaseNode
      size={size}
      accentColor={accentColor}
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <div className={`text-3xl ${darkAccent ? "text-white" : "text-cyan-400"}`}>
          {icon}
        </div>

        <p className="text-sm font-medium">{title}</p>

        <ExternalLink
          size={14}
          className={darkAccent ? "text-white/40" : "text-white/40 group-hover:text-cyan-400"}
        />
      </div>
    </BaseNode>
  );
}