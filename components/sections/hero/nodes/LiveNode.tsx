"use client";

import { ReactNode } from "react";
import BaseNode from "./BaseNode";

interface LiveNodeProps {
  title: string;

  icon: ReactNode;

  mainStat?: string | number;
  mainStatLabel?: string;

  loading: boolean;

  error: boolean;

  overlay: {
    content: ReactNode;
    initialHeight?: number;
    hoverHeight?: number;
  };

  onClick?: () => void;

  size?: "sm" | "md" | "lg" | "xl";

  accentColor?: string;
}

export default function LiveNode({
  title,
  icon,
  mainStat,
  mainStatLabel,
  loading,
  error,
  overlay,
  onClick,
  size = "md",
  accentColor,
}: LiveNodeProps) {
  return (
    <BaseNode
      size={size}
      accentColor={accentColor}
      onClick={onClick}
      overlay={overlay}
    >
      <div className="relative h-full w-full">
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {icon}

          <p className="mt-2 text-xs font-semibold">{title}</p>

          {loading && (
            <p className="mt-1 text-[10px] text-white/60">Loading...</p>
          )}

          {error && <p className="mt-1 text-[10px] text-red-300">Error</p>}
        </div>

        {/* Footer */}
        {!loading && !error && mainStat && (
          <div
            className="
                absolute
                inset-x-0
                bottom-0
                py-px

                flex
                flex-col
                items-center

                leading-none
                bg-white/90
                text-black/80
            "
          >
            <p className="text-sm font-bold">{mainStat}</p>

            {mainStatLabel && (
              <p className="mt-0.5 text-[6px] uppercase my-1 tracking-[0.15em] text-black/70">
                {mainStatLabel}
              </p>
            )}
          </div>
        )}
      </div>
    </BaseNode>
  );
}
