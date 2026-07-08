import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  MessageCircle,
} from "lucide-react";

import type { Blog } from "@/lib/blogs";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const image = blog.cover_image || blog.social_image;

  return (
    <Link
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-xl border border-hairline bg-canvas/80 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20"
    >
      <div className="flex h-full flex-col desktop:flex-row">
        {/* Content */}
        <div className="order-2 flex flex-1 flex-col p-xl desktop:order-1">
          <h2 className="font-display text-title-lg text-ink transition-colors group-hover:text-accent">
            {blog.title}
          </h2>

          <p className="mt-md line-clamp-3 text-body-md text-muted">
            {blog.description}
          </p>

          {blog.tag_list.length > 0 && (
            <div className="mt-lg flex flex-wrap gap-2">
              {blog.tag_list.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-hairline px-2 py-1 text-caption text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-xl flex flex-wrap gap-x-5 gap-y-2 text-body-sm text-muted">
            <div className="flex items-center gap-1">
              <CalendarDays className="size-4" />
              {new Date(blog.published_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="flex items-center gap-1">
              <Clock3 className="size-4" />
              {blog.reading_time_minutes} min
            </div>

            <div className="flex items-center gap-1">
              <Heart className="size-4" />
              {blog.public_reactions_count}
            </div>

            <div className="flex items-center gap-1">
              <MessageCircle className="size-4" />
              {blog.comments_count}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between pt-xl">
            <span className="text-body-sm text-muted">Published on Dev.to</span>

            <span className="inline-flex items-center gap-2 text-body-sm text-ink">
              Read Article
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="order-1 relative aspect-video desktop:order-2 desktop:w-2/5 desktop:aspect-auto">
            <Image
              src={image}
              alt={blog.title}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
