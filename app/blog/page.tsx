import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="relative isolate min-h-screen py-section">
      <div className="w-full px-md tablet:px-xl desktop:px-section">
        <header className="max-w-3xl">
          <p className="mb-sm text-caption-uppercase uppercase text-muted">
            Writing
          </p>

          <h1 className="font-display text-display-lg text-ink">
            Blog
          </h1>

          <p className="mt-md text-body-md text-muted">
            Thoughts on software engineering, frontend architecture,
            AI, and the things I&apos;m learning along the way.
          </p>
        </header>

        <section className="mt-xxl rounded-xl border border-hairline bg-canvas/80 p-xl backdrop-blur-sm">
          <h2 className="font-sans text-title-lg text-ink">
            Nothing here... yet.
          </h2>

          <p className="mt-md max-w-2xl text-body-md text-muted">
            I&apos;m currently working on long-form articles covering
            interesting engineering problems, architecture decisions,
            project breakdowns, and interview preparation.
          </p>

          <Link
            href="/"
            className="mt-xl inline-flex items-center gap-sm text-body-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </section>
      </div>
    </main>
  );
}