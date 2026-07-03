"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import type { Experience } from "@/data/experiences";

import ExperienceCard from "./ExperienceCard";

type ExperienceListProps = {
  experiences: Experience[];
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ExperienceList({
  experiences,
}: ExperienceListProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : listVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="grid gap-lg"
    >
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.company}
          experience={experience}
        />
      ))}
    </motion.div>
  );
}
