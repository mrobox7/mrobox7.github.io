import { experiences } from "@/data/experiences";
import SkillsSection from "@/components/sections/skills/SkillsSection";

import ExperienceList from "./ExperienceList";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden py-section"
    >
      <div className="w-full px-md tablet:px-xl desktop:px-section">
        <header className="mb-xxl desktop:w-1/2">
          <p className="mb-sm text-caption-uppercase uppercase text-muted">
            Career
          </p>
          <h2
            id="experience-heading"
            className="font-display text-display-md text-ink tablet:text-display-lg"
          >
            Experience
          </h2>
          <p className="mt-md text-body-md text-muted">
            Companies I&apos;ve worked with and the impact I&apos;ve made.
          </p>
        </header>

        <div className="grid gap-xl desktop:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] desktop:items-stretch">
          <ExperienceList experiences={experiences} />
          <SkillsSection />
        </div>
      </div>
    </section>
  );
}
