"use client";

import { type Node, type NodeProps } from "@xyflow/react";
import Image from "next/image";
import BaseNode from "./BaseNode";
import { Sparkles } from "lucide-react";

type ProfileData = {
  name: string;
  role: string;
  avatar?: string;
  size?: "sm" | "md" | "lg" | "xl";
  accentColor?: string;
};

type ProfileNodeType = Node<ProfileData>;

export default function ProfileNode({ data }: NodeProps<ProfileNodeType>) {
  const { name, role, avatar, size = "lg", accentColor } = data;

  return (
    <BaseNode
      size={size}
      accentColor={accentColor}
      overlay={{
        initialHeight: 27.5,
        content: (
          <div
            className="
            flex h-full flex-col items-center
            px-3
            pt-2
            group-hover:pt-8

            transition-all
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            "
          >
            <p className="text-[15px] font-mono">{name}</p>
            <p className="text-[7px] font-mono tracking-widest text-white/75">
              {role}
            </p>

            <div
              className="
              mt-4
              text-center
              text-[10px]
              text-white/70

              opacity-0
              translate-y-3

              transition-all
              duration-300
              delay-150

              group-hover:opacity-100
              group-hover:translate-y-0
            "
            >
              Full Stack Builder
              <br />
              AI • React • Next.js
            </div>
          </div>
        ),
      }}
    >
      <div className="relative h-full w-full">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="100%"
            className="object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-cyan-400/20 via-sky-500/15 to-indigo-500/10">
            <Sparkles className="h-10 w-10 text-cyan-100" />
          </div>
        )}
      </div>
    </BaseNode>
  );
}
