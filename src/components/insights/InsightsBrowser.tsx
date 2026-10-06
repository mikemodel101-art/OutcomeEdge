"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { PostCard } from "@/components/site/cards";
import Reveal from "@/components/site/Reveal";
import { POST_CATEGORIES, type Post } from "@/lib/data";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export default function InsightsBrowser({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  const showFeatured = category === "All" && query.trim().length === 0;
  const featured = showFeatured ? filtered.find((p) => p.featured) ?? filtered[0] : undefined;
  const grid = (featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered).slice(
    0,
    visible,
  );
  const totalGrid = (featured ? filtered.length - 1 : filtered.length) || 0;

  const reset = () => {
    setQuery("");
    setCategory("All");
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Controls */}
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {POST_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat);
                  setVisible(PAGE_SIZE);
                }}
                className={cn(
                  "eyebrow rounded-full border px-4 py-2 transition-all duration-300",
                  category === cat
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-clay hover:border-ink/40 hover:text-ink",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-clay"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search insights…"
              aria-label="Search insights"
              className="w-full rounded-full border border-ink/15 bg-transparent py-2.5 pl-11 pr-10 text-sm text-ink outline-none transition-colors placeholder:text-clay/70 focus:border-volt-deep"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-clay hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>
        <p className="eyebrow text-clay/80">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {category !== "All" ? ` in ${category}` : ""}
          {query.trim() ? ` matching “${query.trim()}”` : ""}
        </p>
      </Reveal>

      {/* Featured */}
      {featured ? (
        <Reveal>
          <div className="hairline-t pt-10">
            <p className="eyebrow mb-8 text-volt-deep">Featured insight</p>
            <PostCard post={featured} large />
          </div>
        </Reveal>
      ) : null}

      {/* Grid */}
      {grid.length > 0 ? (
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-dashed border-ink/20 py-20 text-center">
            <p className="font-display text-2xl">Nothing matches that search.</p>
            <p className="max-w-sm text-sm text-clay">
              Try a different keyword or clear the filters to browse everything we publish.
            </p>
            <button type="button" onClick={reset} className="btn-ghost text-ink">
              Clear filters
            </button>
          </div>
        </Reveal>
      )}

      {/* Load more */}
      {totalGrid > visible ? (
        <Reveal className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-primary"
          >
            Load more insights
            <ArrowRight className="btn-arrow h-4 w-4" aria-hidden />
          </button>
          <p className="eyebrow text-clay/80">
            Showing {Math.min(visible, totalGrid)} of {totalGrid}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
