"use client";

import { ReactNode } from "react";

interface BaseNodeProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-32 h-32",
  lg: "w-44 h-44",
};

export default function BaseNode({
  children,
  size = "md",
  onClick,
  className = "",
}: BaseNodeProps) {
  return (
    <div
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        rounded-full
        bg-zinc-950
        border
        border-zinc-800
        cursor-pointer
        flex
        items-center
        justify-center
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:border-cyan-400
        hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}