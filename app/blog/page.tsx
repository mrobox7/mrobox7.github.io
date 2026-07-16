import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BlogCard from "@/components/ui/BlogCard";
import { getBlogs } from "@/lib/blogs";

export default async function BlogPage() {
  const blogs = await getBlogs();

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
            I write about software engineering, AI, frontend architecture,
            and the lessons I learn while building products.
          </p>
        </header>

        <div className="mt-lg flex flex-col gap-lg">
          {blogs.length === 0 ? (
            <section className="rounded-xl border border-hairline bg-canvas/80 p-xl backdrop-blur-sm">
              <h2 className="font-display text-title-lg text-ink">
                First article coming soon.
              </h2>

              <p className="mt-md max-w-2xl text-body-md text-muted">
                I&apos;m currently working on my first long-form engineering
                articles covering AI, frontend architecture, software
                engineering, project breakdowns, and career lessons.
                They&apos;ll appear here automatically as soon as they&apos;re
                published on Dev.to.
              </p>
            </section>
          ) : (
            <section className="grid gap-xl tablet:grid-cols-1">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} id={blog.slug} blog={blog} />
              ))}
            </section>
          )}

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-sm text-body-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}