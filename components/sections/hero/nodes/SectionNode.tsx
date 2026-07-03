"use client";

import { type Node, type NodeProps } from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

import BaseNode from "./BaseNode";

type SectionData = {
  title: string;
  icon?: LucideIcon;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  accentColor?: string;
};

type SectionNodeType = Node<SectionData>;

export default function SectionNode({
  data,
}: NodeProps<SectionNodeType>) {
  const {
    title,
    icon: Icon,
    onClick,
    size = "md",
    accentColor,
  } = data;

  return (
    <BaseNode
      size={size}
      accentColor={accentColor}
      onClick={onClick}
      overlay={{
        initialHeight: 0,
        content: (
          <div className="flex h-full w-full items-center justify-center bg-white/95 backdrop-blur-xl">
            <ExternalLink
              size={18}
              strokeWidth={2.25}
              className="
                text-slate-900
                scale-75
                opacity-80
                transition-all
                duration-500
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:scale-125
                group-hover:opacity-100
              "
            />
          </div>
        ),
      }}
    >
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        {Icon && (
          <div className="text-white">
            <Icon size={32} />
          </div>
        )}

        <p className="text-sm font-mono">{title}</p>
      </div>
    </BaseNode>
  );
}