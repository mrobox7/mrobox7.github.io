import { Project } from "@/data/projects";

import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section aria-label="Projects">
      <div className="grid gap-xl tablet:grid-cols-2 desktop:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}