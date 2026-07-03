"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArcProgress from "./ArcProgress";
import type { LeetcodeStats } from "@/hooks/useLeetcodeStats";

interface DifficultyCarouselProps {
  stats: LeetcodeStats;
}

export default function DifficultyCarousel({ stats }: DifficultyCarouselProps) {
  const [index, setIndex] = useState(0);

  const difficulties = useMemo(
    () => [
      {
        label: "Easy",
        solved: stats.solved.easy,
        total: stats.totalQuestions.easy,
        color: "#4ADE80",
      },
      {
        label: "Medium",
        solved: stats.solved.medium,
        total: stats.totalQuestions.medium,
        color: "#FACC15",
      },
      {
        label: "Hard",
        solved: stats.solved.hard,
        total: stats.totalQuestions.hard,
        color: "#EF4444",
      },
    ],
    [stats],
  );

  const prev = () =>
    setIndex((i) => (i === 0 ? difficulties.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === difficulties.length - 1 ? 0 : i + 1));

  return (
    <div className="relative h-full w-full">
      {/* Centered Ring */}
      <div className="flex h-full w-full items-center justify-center">
        <ArcProgress difficulty={difficulties[index]} size={125} />
      </div>

      {/* Bottom Controls */}
      <div
        className="
            absolute
            bottom-2
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-1
        "
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="
            rounded-full
            p-0.5
            text-slate-500
            transition-colors
            hover:text-slate-900
            "
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center gap-1">
          {difficulties.map((d, i) => (
            <button
              key={d.label}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className="cursor-pointer"
            >
              <div
                className={`
                    h-1
                    w-1
                    rounded-full
                    transition-all
                    duration-300
                    ${index === i ? "scale-125 opacity-100" : "opacity-40"}
                `}
                style={{
                  backgroundColor: d.color,
                }}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="
            rounded-full
            p-0.5
            text-slate-500
            transition-colors
            hover:text-slate-900
            "
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
