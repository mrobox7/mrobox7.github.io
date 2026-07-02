"use client";

import Image from "next/image";
import BaseNode from "./BaseNode";
import { Sparkles } from "lucide-react";

interface ProfileNodeProps {
  name: string;
  role: string;
  avatar?: string;
}

export default function ProfileNode({
  name,
  role,
  avatar,
}: ProfileNodeProps) {
  return (
    <BaseNode size="lg">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center p-4">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            className="h-16 w-16 rounded-full border-2 border-cyan-400 object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400">
            <Sparkles size={28} className="text-cyan-400" />
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold">{name}</h3>

          <p className="text-xs text-zinc-400">
            {role}
          </p>
        </div>
      </div>
    </BaseNode>
  );
}