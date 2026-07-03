"use client";

import { type Node, type NodeProps } from "@xyflow/react";
import BaseNode from "./BaseNode";
import { FileText, Download } from "lucide-react";

type ResumeData = {
  href: string;
  size?: "sm" | "md" | "lg" | "xl";
  accentColor?: string;
};

type ResumeNodeType = Node<ResumeData>;

export default function ResumeNode({ data }: NodeProps<ResumeNodeType>) {
  const { href, size = "md", accentColor } = data;

  return (
    <BaseNode
      size={size}
      accentColor={accentColor}
      onClick={() => window.open(href, "_blank")}
      overlay={{
        initialHeight: 0,
        content: (
          <div className="flex h-full w-full items-center justify-center bg-white/95 backdrop-blur-xl">
            <Download
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
        <FileText size={30} className="text-white" />

        <p className="text-xs font-mono">Resume</p>
      </div>
    </BaseNode>
  );
}
