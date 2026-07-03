"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

import {
  formatExperienceMonths,
  type SkillScore,
} from "@/lib/skill-score";

type SkillBallProps = {
  skill: SkillScore;
  diameter: number;
  position?: {
    x: number;
    y: number;
  };
  delay?: number;
  className?: string;
  selected?: boolean;
  onSelect?: (skill: SkillScore) => void;
};

export default function SkillBall({
  skill,
  diameter,
  position,
  delay = 0,
  className = "",
  selected = false,
  onSelect,
}: SkillBallProps) {
  const shouldReduceMotion = useReducedMotion();
  const showEvidence = diameter >= 72;
  const projectLabel = `${skill.projectCount} project${
    skill.projectCount === 1 ? "" : "s"
  }`;
  const experienceLabel =
    skill.experienceMonths > 0
      ? `${formatExperienceMonths(skill.experienceMonths)} professional use`
      : "projects only";
  const accessibleLabel = `${skill.label}: ${skill.score}/100 usage weight, ${projectLabel}, ${experienceLabel}`;

  const positioning: CSSProperties = position
    ? {
        position: "absolute",
        left: position.x - diameter / 2,
        top: position.y - diameter / 2,
      }
    : {};

  return (
    <motion.button
      type="button"
      aria-label={accessibleLabel}
      aria-pressed={selected}
      onClick={() => onSelect?.(skill)}
      onFocus={() => onSelect?.(skill)}
      onMouseEnter={() => onSelect?.(skill)}
      initial={
        shouldReduceMotion ? false : { opacity: 0, scale: 0.75, y: 10 }
      }
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        ...positioning,
        width: diameter,
        height: diameter,
      }}
      className={`group isolate flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-pill border bg-surface-card text-center shadow-none transition-[border-color,box-shadow] hover:border-muted-soft hover:shadow-hover ${
        selected ? "border-muted-soft shadow-hover" : "border-hairline"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 bg-accent-teal/35 transition-colors group-hover:bg-accent-teal/50"
        style={{ height: `${Math.max(5, Math.min(14, skill.score / 7))}%` }}
      />

      <span className="flex max-w-[78%] flex-col items-center gap-xxs px-xs text-caption text-body">
        <span className="leading-tight">{skill.label}</span>
        {showEvidence ? (
          <span className="text-caption leading-tight text-muted">
            {skill.score}
          </span>
        ) : null}
      </span>
    </motion.button>
  );
}
