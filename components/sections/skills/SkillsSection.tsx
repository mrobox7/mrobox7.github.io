import { getSkillScores } from "@/lib/skill-score";

import SkillsCloud from "./SkillsCloud";

export default function SkillsSection() {
  const allSkillScores = getSkillScores();
  const skillScores = allSkillScores.slice(0, 16);

  return (
    <aside
      aria-labelledby="skills-heading"
      className="self-start rounded-xl border border-hairline bg-canvas/65 p-lg backdrop-blur-sm tablet:p-xl"
    >
      <header className="flex items-start justify-between gap-md">
        <div>
          <p className="mb-sm text-caption-uppercase uppercase text-muted">
            Evidence based
          </p>
          <h2
            id="skills-heading"
            className="font-display text-display-sm text-ink"
          >
            Skills
          </h2>
        </div>
        <span className="rounded-pill border border-hairline bg-surface-soft px-sm py-xs text-caption text-muted">
          {skillScores.length}/{allSkillScores.length}
        </span>
      </header>

      <p className="mt-md text-body-sm text-muted">
        Ball size reflects weighted use across professional experience and
        projects.
      </p>

      <SkillsCloud skills={skillScores} />

      <p className="border-t border-hairline-soft pt-md text-caption text-muted">
        Showing the top {skillScores.length}. Hover, focus, or tap a skill for
        its evidence.
      </p>
    </aside>
  );
}
