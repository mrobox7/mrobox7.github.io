"use client";

import BaseNode from "./BaseNode";
import { Folder } from "lucide-react";

interface SectionNodeProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function SectionNode({
  title,
  icon,
  onClick,
  size = "md",
}: SectionNodeProps) {
  return (
    <BaseNode size={size} onClick={onClick}>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <div className="text-3xl text-cyan-400">
          {icon ?? <Folder size={32} />}
        </div>

        <p className="text-sm font-medium">{title}</p>
      </div>
    </BaseNode>
  );
}