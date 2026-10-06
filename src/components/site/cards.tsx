import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";

/* ----------------------------- Post card ----------------------------- */

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group flex flex-col", large && "md:grid md:grid-cols-2 md:gap-10")}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          large ? "aspect-[16/10] md:aspect-auto md:min-h-[420px]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="img-zoom duotone object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 text-paper backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className={cn("flex flex-col gap-3 pt-6", large && "md:justify-center md:pt-0")}>
        <p className="eyebrow text-clay">
          {formatDate(post.date)} · {post.readTime} min read
        </p>
        <h3
          className={cn(
            "font-display leading-tight text-ink transition-colors duration-300 group-hover:text-volt-deep",
            large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl",
          )}
        >
          {post.title}
        </h3>
        <p className={cn("text-sm leading-relaxed text-clay", large && "text-base md:max-w-lg")}>
          {post.excerpt}
        </p>
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-ink">
          <span className="link-line">Read article</span>
          <ArrowRight
            className="h-4 w-4 text-volt-deep transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
