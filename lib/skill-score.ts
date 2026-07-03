import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import {
  skillById,
  skillScopeWeight,
  skills,
  type SkillId,
} from "@/data/skills";

export type SkillScore = {
  id: SkillId;
  label: string;
  category: (typeof skills)[number]["category"];
  score: number;
  projectCount: number;
  experienceMonths: number;
};

export function formatExperienceMonths(months: number) {
  if (months === 0) return "Projects only";

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return [
    years > 0 ? `${years}y` : null,
    remainingMonths > 0 ? `${remainingMonths}m` : null,
  ]
    .filter(Boolean)
    .join(" ");
}

function monthsBetween(startDate: string, endDate: string) {
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(`${endDate}T00:00:00Z`);

  return Math.max(
    0,
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
      end.getUTCMonth() -
      start.getUTCMonth(),
  );
}

export function getSkillScores(): SkillScore[] {
  return skills
    .map((skill) => {
      let projectUnits = 0;
      let projectCount = 0;
      let weightedExperienceMonths = 0;
      let experienceMonths = 0;

      for (const project of projects) {
        const usage = project.technologies.find(
          ({ skillId }) => skillId === skill.id,
        );

        if (usage) {
          projectCount += 1;
          projectUnits += skillScopeWeight[usage.scope];
        }
      }

      for (const experience of experiences) {
        for (const role of experience.roles) {
          const usage = role.technologies.find(
            ({ skillId }) => skillId === skill.id,
          );

          if (usage) {
            const months = monthsBetween(role.startDate, role.endDate);
            experienceMonths += months;
            weightedExperienceMonths +=
              months * skillScopeWeight[usage.scope];
          }
        }
      }

      const projectEvidence = 1 - Math.exp(-projectUnits / 5);
      const experienceEvidence =
        1 - Math.exp(-weightedExperienceMonths / 18);
      const score = Math.round(
        100 * (projectEvidence * 0.55 + experienceEvidence * 0.45),
      );

      return {
        ...skillById[skill.id],
        score,
        projectCount,
        experienceMonths,
      };
    })
    .filter(({ projectCount, experienceMonths }) => {
      return projectCount > 0 || experienceMonths > 0;
    })
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
}

export function getTopSkillScores(limit = 3) {
  return getSkillScores().slice(0, Math.max(0, limit));
}
