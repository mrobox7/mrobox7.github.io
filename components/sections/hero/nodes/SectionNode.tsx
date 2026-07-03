"use client";

import { type Node, type NodeProps } from "@xyflow/react";
import BaseNode from "./BaseNode";
import { Folder } from "lucide-react";

import type { LucideIcon } from "lucide-react";

type SectionData = {
  title: string;
  icon?: LucideIcon;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  accentColor?: string;
};

type SectionNodeType = Node<SectionData>;

export default function SectionNode({ data }: NodeProps<SectionNodeType>) {
  const { title, icon, onClick, size = "md", accentColor } = data;

  const Icon = icon ?? Folder;

  return (
    <BaseNode size={size} accentColor={accentColor} onClick={onClick}>
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <div className="text-white">
          <Icon size={32} />
        </div>

        <p className="text-sm font-mono">{title}</p>
      </div>
    </BaseNode>
  );
}
