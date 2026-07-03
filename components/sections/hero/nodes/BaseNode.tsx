"use client";

import { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";

interface OverlayConfig {
  content: ReactNode;
  initialHeight?: number;
  hoverHeight?: number;
}

interface BaseNodeProps {
  children: ReactNode;
  overlay?: OverlayConfig;

  size?: "xs" | "sm" | "md" | "lg" | "xl";
  accentColor?: string;
  onClick?: () => void;
  className?: string;
}

const sizeClasses = {
  xs: "w-14 h-14",
  sm: "w-22 h-22",
  md: "w-28 h-28",
  lg: "w-36 h-36",
  xl: "w-46 h-46",
};

export default function BaseNode({
  children,
  overlay,
  size = "md",
  accentColor = "#38bdf8",
  onClick,
  className = "",
}: BaseNodeProps) {
  const toRgba = (color: string, alpha: number) => {
    const cleaned = color.replace(/^#/, "");

    if (/^[0-9a-f]{6}$/i.test(cleaned)) {
      const r = parseInt(cleaned.slice(0, 2), 16);
      const g = parseInt(cleaned.slice(2, 4), 16);
      const b = parseInt(cleaned.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    if (/^[0-9a-f]{3}$/i.test(cleaned)) {
      const r = parseInt(cleaned[0] + cleaned[0], 16);
      const g = parseInt(cleaned[1] + cleaned[1], 16);
      const b = parseInt(cleaned[2] + cleaned[2], 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return color;
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Bottom}
        className="opacity-0! w-0! h-0!"
      />

      <div
        onClick={onClick}
        className={`
          group
          relative
          overflow-hidden
          ${sizeClasses[size]}
          rounded-full
          border
          ring-1 ring-white/5
          backdrop-blur-xl
          cursor-pointer
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:border-white/20
          ${className}
        `}
        style={{
          backgroundColor: toRgba(accentColor, 0.75),
          borderColor: toRgba(accentColor, 0.25),
          boxShadow: `
            0 10px 20px rgba(0,0,0,.25),
            0 0 18px ${toRgba(accentColor, 0.75)},
            inset 0 1px 0 rgba(255,255,255,.15)
          `,
        }}
      >
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>

        {overlay && (
          <div
            style={
              {
                "--overlay-initial": `${overlay.initialHeight ?? 0}%`,
                "--overlay-hover": `${overlay.hoverHeight ?? 100}%`,
              } as React.CSSProperties
            }
            className="
      absolute
      inset-x-0
      bottom-0
      overflow-hidden

      bg-black/10
      backdrop-blur-md

      transition-all
      duration-500
      ease-[cubic-bezier(.22,1,.36,1)]
h-(--overlay-initial)
      group-hover:h-(--overlay-hover)
    "
          >
            {overlay.content}
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Top}
        className="opacity-0! w-0! h-0!"
      />
    </>
  );
}
