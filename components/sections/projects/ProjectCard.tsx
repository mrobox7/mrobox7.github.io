"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import type { Project } from "@/data/projects";
import { skillById } from "@/data/skills";

import TechBadge from "@/components/ui/TechBadge";

type Props = {
  project: Project;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectCard({ project }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={shouldReduceMotion ? undefined : cardVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-hairline bg-canvas/80 p-lg backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-muted-soft hover:shadow-hover tablet:p-xl"
    >
      <div
        aria-hidden
        className="absolute inset-x-xl top-0 h-px bg-linear-to-r from-transparent via-muted-soft/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div>
        <h2 className="font-sans text-title-lg text-ink">
          {project.title}
        </h2>

        <p className="mt-md text-body-sm text-muted">
          {project.description}
        </p>
      </div>

      <ul className="mt-xl grid gap-sm text-body-sm text-body">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="grid grid-cols-[auto_1fr] gap-sm"
          >
            <span
              aria-hidden
              className="mt-xs size-1 rounded-pill bg-muted-soft"
            />

            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-xl flex flex-wrap gap-xs">
        {project.technologies.map(({ skillId }) => (
          <TechBadge key={skillId}>
            {skillById[skillId].label}
          </TechBadge>
        ))}
      </ul>

      <div className="mt-xl flex items-center gap-lg">
        {project.liveDemo && (
          <Link
            href={project.liveDemo}
            target="_blank"
            className="inline-flex items-center gap-xs text-body-sm text-muted transition-colors hover:text-ink"
          >
            Live Demo
            <ArrowUpRight className="size-4" />
          </Link>
        )}

        {project.repository && (
          <Link
            href={project.repository}
            target="_blank"
            className="inline-flex items-center gap-xs text-body-sm text-muted transition-colors hover:text-ink"
          >
            GitHub
            <ArrowUpRight className="size-4" />
          </Link>
        )}
      </div>
    </motion.article>
  );
}