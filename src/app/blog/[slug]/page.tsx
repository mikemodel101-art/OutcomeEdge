import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Asterisk } from "lucide-react";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { PostCard } from "@/components/site/cards";
import { Eyebrow, Tag } from "@/components/site/chrome";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import type { PostBlock } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Knowledge Center" };
  return { title: post.title, description: post.excerpt };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">{block.text}</h2>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-volt-deep py-1 pl-6 md:pl-8">
          <p className="font-display text-xl italic leading-snug text-ink md:text-2xl">
            “{block.text}”
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink/85">
              <Asterisk className="mt-1 h-4 w-4 shrink-0 text-volt-deep" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="text-base leading-relaxed text-ink/85 md:text-lg">{block.text}</p>;
  }
}

function Initials({ name }: { name: string }) {
  return (
    <>
      {name
        .split(" ")
        .filter((w) => /^[A-Z]/.test(w))
        .slice(0, 2)
        .map((w) => w[0])
        .join("")}
    </>
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const all = await getAllPosts();
  const related = all
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(all.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 3);

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -left-40 top-16 h-[440px] w-[440px] rounded-full opacity-15 blur-[130px]"
          style={{ background: "radial-gradient(circle, #c6f244 0%, transparent 65%)" }}
          aria-hidden
        />
        <div className="container-x relative pb-16 pt-44 md:pb-24">
          <Reveal className="flex max-w-4xl flex-col gap-7">
            <Link
              href="/blog"
              className="eyebrow inline-flex items-center gap-2 text-fog transition-colors hover:text-paper"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Knowledge Center
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Tag dark>{post.category}</Tag>
              <span className="eyebrow text-fog">
                {formatDate(post.date)} · {post.readTime} min read
              </span>
            </div>
            <h1
              className="text-balance font-display leading-[1.04] tracking-[-0.015em]"
              style={{ fontSize: "clamp(2.1rem, 4.8vw, 4.4rem)" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 border-t border-paper/15 pt-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember font-display text-lg text-ink">
                <Initials name={post.author} />
              </span>
              <div>
                <p className="text-sm font-medium text-paper">{post.author}</p>
                <p className="eyebrow mt-1 text-fog">{post.authorRole}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ COVER IMAGE ========================= */}
      <section className="container-x -mt-1 py-10 md:py-14">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1400px) 1400px, 100vw"
              className="duotone object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* ============================== CONTENT =========================== */}
      <section className="container-x pb-20 md:pb-28">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8">
          <p className="font-display text-xl italic leading-snug text-clay md:text-2xl">
            {post.excerpt}
          </p>
          <div className="hairline-t" aria-hidden />
          {post.content.map((block, i) => (
            <Reveal key={i}>
              <Block block={block} />
            </Reveal>
          ))}
          <div className="hairline-t" aria-hidden />
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg text-ember">
                <Initials name={post.author} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{post.author}</p>
                <p className="eyebrow mt-1 text-clay">{post.authorRole}</p>
              </div>
            </div>
            <Link href="/contact?intent=strategy" className="btn-ghost text-ink">
              Discuss this with us
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ RELATED ============================= */}
      <section className="bg-paper-2">
        <div className="container-x py-20 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow>Keep reading</Eyebrow>
              <h2 className="text-display-sm">Related articles</h2>
            </div>
            <Link href="/blog" className="eyebrow link-line text-clay hover:text-ink">
              View all
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ CTA ============================= */}
      <CtaBand
        title={
          <>
            Put this thinking <span className="serif-italic text-ember-2">into delivery</span>.
          </>
        }
        lead="Ideas are cheap. Aligned teams that execute predictably are the edge."
        primaryLabel="Book a 30-Minute Consultation"
        primaryHref="/contact?intent=strategy"
      />
    </>
  );
}
