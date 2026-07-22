import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectGrid from "@/components/sections/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="relative isolate min-h-screen py-section">
      <div className="w-full px-md tablet:px-xl desktop:px-section">
        <header className="mb-xxl max-w-3xl">
          <Link
            href="/"
            className="mb-md inline-flex w-fit items-center gap-sm text-body-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <p className="mb-sm text-caption-uppercase uppercase text-muted">
            Work
          </p>

          <h1 className="font-display text-display-lg text-ink">
            Projects
          </h1>

          <p className="mt-md text-body-md text-muted">
            A collection of software projects exploring frontend engineering,
            interactive experiences, and AI-powered applications.
          </p>
        </header>

        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}