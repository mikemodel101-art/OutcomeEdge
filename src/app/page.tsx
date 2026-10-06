import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Compass, Target, Users } from "lucide-react";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { PostCard } from "@/components/site/cards";
import { Eyebrow, GhostButton, Marquee, PrimaryButton, SectionHead } from "@/components/site/chrome";
import { getAllPosts } from "@/lib/content";
import { BIZ_IMPACT, CREDENTIALS, PILLARS } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OutcomeEdge — Turn Strategic Initiatives Into Predictable Delivery",
  description:
    "When critical initiatives are funded but delivery slows, business outcomes slip. OutcomeEdge helps product and engineering leaders restore execution confidence.",
};

const MARQUEE_ITEMS = [
  "Outcome-Aligned Execution",
  "Conscious Leadership",
  "Team Cohesion",
  "GCCs · US–India & Global",
  "Predictable Delivery",
  "Human-Centric Transformation",
];

const PILLAR_ICONS = [Target, Compass, Users];

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <video
            className="duotone h-full w-full object-cover opacity-55"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/4480391/pexels-photo-4480391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          >
            <source
              src="https://videos.pexels.com/video-files/4480391/4480391-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/4480391/4480391-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 vignette" />
          <div className="grid-bg absolute inset-0" />
          <div
            className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
            style={{ background: "radial-gradient(circle, #c6f244 0%, transparent 65%)" }}
          />
          <div
            className="absolute -left-48 bottom-24 h-[420px] w-[420px] rounded-full opacity-15 blur-[140px]"
            style={{ background: "radial-gradient(circle, #8b7cff 0%, transparent 65%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-x relative flex flex-1 flex-col justify-end pb-10 pt-36">
          <Reveal className="flex max-w-5xl flex-col gap-7">
            <Eyebrow dark>Execution Confidence for High-Stakes Initiatives</Eyebrow>
            <h1 className="text-hero text-balance">
              Turn strategic initiatives into{" "}
              <span className="serif-italic text-ember-2">predictable delivery</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              When critical initiatives are funded but delivery slows, business outcomes slip.
              OutcomeEdge helps product and engineering leaders restore execution confidence so
              priorities begin translating into measurable progress early — not late. Without
              adding more teams or complexity.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PrimaryButton href="/contact?intent=initiative">
                Discuss a Priority Initiative
              </PrimaryButton>
              <GhostButton href="/services" className="text-paper">
                Explore Services
              </GhostButton>
            </div>
          </Reveal>

          <div className="mt-16 flex items-end justify-between gap-6">
            <Reveal delay={150}>
              <p className="eyebrow hidden max-w-md leading-relaxed text-fog/80 md:block">
                30+ years across Sony PlayStation, Google, Molson Coors &amp; more
              </p>
            </Reveal>
            <Reveal delay={250} className="flex items-center gap-3 text-fog">
              <span className="eyebrow">Scroll</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20">
                <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
              </span>
            </Reveal>
          </div>
        </div>

        <div className="relative border-t border-paper/15 py-4 text-paper/75">
          <Marquee items={MARQUEE_ITEMS} />
        </div>
      </section>

      {/* =========================== THREE PILLARS ========================= */}
      <section className="container-x py-24 md:py-36">
        <SectionHead
          eyebrow="Our three pillars of outcome delivery"
          title={
            <>
              The gap between ambition and delivery is{" "}
              <span className="serif-italic text-volt-deep">closable</span>.
            </>
          }
          lead="Three disciplines, one outcome: priorities that move predictably, leaders who see clearly, and teams that execute as one."
        />

        <div className="mt-14 grid gap-4 md:mt-20 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <Reveal key={pillar.index} delay={i * 100}>
                <div className="group flex h-full flex-col gap-6 rounded-3xl border border-ink/10 bg-white/60 p-8 shadow-[0_1px_0_0_rgba(8,11,21,0.04)] backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-volt-deep/40 hover:shadow-[0_32px_70px_-34px_rgba(77,124,15,0.45)] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-ember transition-colors duration-500 group-hover:bg-ember group-hover:text-ink">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-display text-5xl leading-none text-ink/8 transition-colors duration-500 group-hover:text-volt-deep/25">
                      {pillar.index}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight md:text-[1.7rem]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-clay">{pillar.description}</p>
                  <Link
                    href="/services"
                    className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-ink"
                  >
                    <span className="link-line">Learn more</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-volt-deep transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ====================== DELIVERED BY AMITABH ====================== */}
      <section className="bg-ink text-paper">
        <div className="container-x grid items-center gap-14 py-24 md:py-36 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/4.6]">
                <Image
                  src="https://images.pexels.com/photos/30692588/pexels-photo-30692588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Amitabh Sinha — Executive Delivery Transformation Partner"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="duotone object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl p-5">
                  <p className="eyebrow text-ember">Amitabh Sinha</p>
                  <p className="mt-2 font-display text-xl leading-snug">
                    Executive Delivery Transformation Partner
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow dark>Delivered by Amitabh Sinha</Eyebrow>
              <h2 className="text-display text-balance">
                Recognized for turning struggling environments into{" "}
                <span className="serif-italic text-ember-2">aligned, high-performing teams</span>.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-fog">
                30+ years helping product and engineering organizations stabilize execution during
                high-stakes growth and transformation initiatives. This is human-centric
                transformation for the AI era.
              </p>
            </Reveal>

            <div className="flex flex-col">
              {CREDENTIALS.map((cred, i) => (
                <Reveal key={cred.org} delay={i * 90}>
                  <div className="hairline-t group flex items-start justify-between gap-6 py-5">
                    <div className="flex flex-col gap-1.5">
                      <p className="font-display text-xl text-paper md:text-2xl">{cred.org}</p>
                      <p className="max-w-md text-sm leading-relaxed text-fog">{cred.note}</p>
                    </div>
                    <span className="eyebrow shrink-0 pt-2 text-fog/60">0{i + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <GhostButton href="/wins" className="text-paper">
                View Case Studies
              </GhostButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================= BUSINESS IMPACT ======================== */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/29617312/pexels-photo-29617312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            sizes="100vw"
            className="duotone object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink/95" />
          <div className="grid-bg absolute inset-0" />
        </div>

        <div className="container-x grain relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="flex flex-col gap-5 lg:col-span-6">
              <Eyebrow dark>Business impact leaders experience</Eyebrow>
              <h2 className="text-display text-balance">
                We close the gap between strategy, leadership, teams, and{" "}
                <span className="serif-italic text-ember-2">delivery</span>.
              </h2>
            </Reveal>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex flex-col gap-4">
                {BIZ_IMPACT.map((impact, i) => (
                  <Reveal key={impact} delay={i * 80}>
                    <div className="glass flex items-start gap-4 rounded-2xl p-5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <p className="text-base leading-relaxed text-paper">{impact}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= KNOWLEDGE CENTER ======================== */}
      <section className="container-x py-24 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="From the Knowledge Center"
            title={
              <>
                Thinking from the <span className="serif-italic text-volt-deep">field</span>.
              </>
            }
          />
          <Reveal delay={120} className="hidden md:block">
            <GhostButton href="/blog" className="text-ink">
              Visit the Knowledge Center
            </GhostButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:mt-20 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================ CTA ============================== */}
      <CtaBand
        title={
          <>
            Ready to turn ambition into{" "}
            <span className="serif-italic text-ember-2">outcomes</span>?
          </>
        }
        lead="If you're leading a high-stakes initiative in tech, AI, or innovation — OutcomeEdge is here to make sure it actually lands. We partner with visionary leaders ready to move fast, align their teams, and deliver real impact."
        primaryLabel="Book a 30-Minute Consultation"
        primaryHref="/contact?intent=strategy"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
