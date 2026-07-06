"use client";

import { MapPin } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import type { Experience } from "@/data/experiences";
import { skillById } from "@/data/skills";

import TechBadge from "../../ui/TechBadge";

type ExperienceCardProps = {
  experience: Experience;
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

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={shouldReduceMotion ? undefined : cardVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-hairline bg-canvas/80 p-lg shadow-none backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-muted-soft hover:shadow-hover tablet:p-xl"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-xl top-0 h-px bg-linear-to-r from-transparent via-muted-soft/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="grid gap-lg desktop:grid-cols-[minmax(0,1fr)_auto] desktop:items-start">
        <div className="flex min-w-0 items-start gap-md">
          <div
            aria-label={`${experience.logo.label} logo`}
            role="img"
            className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-hairline bg-surface-soft font-sans text-title-sm text-ink tablet:size-14"
          >
            {experience.logo.mark}
          </div>

          <div className="min-w-0">
            <h3 className="font-sans text-title-lg text-ink">
              {experience.company}
            </h3>
            <p className="mt-xs text-body-sm text-muted">
              {experience.roles.length > 1
                ? `${experience.roles.length} roles`
                : experience.roles[0].employmentType}
            </p>
          </div>
        </div>

        {experience.location ? (
          <p className="flex items-center gap-xs text-body-sm text-muted desktop:justify-end">
            <MapPin aria-hidden="true" className="size-4" />
            {experience.location}
          </p>
        ) : null}
      </div>

      <div className="mt-xl border-t border-hairline-soft">
        {experience.roles.map((role, index) => (
          <section
            key={`${role.role}-${role.duration}`}
            aria-label={`${role.role}, ${role.duration}`}
            className={
              index === 0
                ? "pt-lg"
                : "mt-xl border-t border-hairline-soft pt-xl"
            }
          >
            <div className="grid gap-xs tablet:grid-cols-[minmax(0,1fr)_auto] tablet:items-start">
              <div>
                <h4 className="font-sans text-title-md text-ink">
                  {role.role}
                </h4>
                <p className="mt-xxs text-caption text-muted">
                  {role.employmentType}
                </p>
              </div>
              <p className="text-body-sm text-muted tablet:text-right">
                {role.duration}
              </p>
            </div>

            <ul className="mt-lg grid gap-sm text-body-sm text-body tablet:text-body-md">
              {role.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="grid grid-cols-[auto_1fr] gap-sm"
                >
                  <span
                    aria-hidden="true"
                    className="mt-xs size-1 rounded-pill bg-muted-soft"
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <ul
              aria-label={`Technologies used as ${role.role}`}
              className="mt-lg flex flex-wrap gap-xs"
            >
              {role.technologies.map(({ skillId }) => (
                <TechBadge key={skillId}>{skillById[skillId].label}</TechBadge>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </motion.article>
  );
}
