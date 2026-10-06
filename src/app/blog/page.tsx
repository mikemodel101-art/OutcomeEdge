import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import InsightsBrowser from "@/components/insights/InsightsBrowser";
import { Eyebrow } from "@/components/site/chrome";
import { getAllPosts } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Knowledge Center — Blog",
  description:
    "OutcomeEdge blogs on AI & modern ways of working, leadership & decision making, outcome execution, and team performance & design.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/5313161/pexels-photo-5313161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            priority
            sizes="100vw"
            className="duotone object-cover opacity-35"
          />
          <div className="absolute inset-0 vignette" />
          <div className="grid-bg absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>
        <div className="container-x relative pb-16 pt-44">
          <Reveal className="flex max-w-4xl flex-col gap-7">
            <Eyebrow dark>Knowledge Center — OutcomeEdge Blogs</Eyebrow>
            <h1 className="text-hero text-balance">
              Field notes on delivery,{" "}
              <span className="serif-italic text-ember-2">leadership &amp; teams</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              Essays and playbooks on AI &amp; modern ways of working, leadership &amp; decision
              making, outcome execution, and team performance &amp; design.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================== LISTING =========================== */}
      <section className="container-x py-20 md:py-28">
        <InsightsBrowser posts={posts} />
      </section>

      {/* ================================ CTA ============================= */}
      <CtaBand
        title={
          <>
            Reading is step one.{" "}
            <span className="serif-italic text-ember-2">Delivery is the point.</span>
          </>
        }
        lead="If something here hits a nerve, that nerve is worth a thirty-minute conversation."
        primaryLabel="Book a 30-Minute Consultation"
        primaryHref="/contact?intent=strategy"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
