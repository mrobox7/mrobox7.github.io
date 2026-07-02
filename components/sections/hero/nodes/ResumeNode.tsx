"use client";

import BaseNode from "./BaseNode";
import { FileText, Download } from "lucide-react";

interface ResumeNodeProps {
  href: string;
}

export default function ResumeNode({
  href,
}: ResumeNodeProps) {
  return (
    <BaseNode
      size="md"
      onClick={() => window.open(href, "_blank")}
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">

        <FileText
          size={34}
          className="text-cyan-400"
        />

        <h3 className="text-sm font-semibold">
          Resume
        </h3>

        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <Download size={12} />
          Download
        </div>

      </div>
    </BaseNode>
  );
}