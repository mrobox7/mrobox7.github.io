"use client";

import { type Node, type NodeProps } from "@xyflow/react";
import Image from "next/image";
import BaseNode from "./BaseNode";
import { ExternalLink } from "lucide-react";

type SocialData = {
  href: string;
  image: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  accentColor?: string;
};

type SocialNodeType = Node<SocialData>;

export default function SocialNode({ data }: NodeProps<SocialNodeType>) {
  const { href, image, alt = "Social", size = "md", accentColor } = data;

  return (
    <BaseNode
      size={size}
      accentColor={accentColor}
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
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
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
          unoptimized
        />
      </div>
    </BaseNode>
  );
}