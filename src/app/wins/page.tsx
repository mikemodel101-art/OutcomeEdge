import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Quote } from "lucide-react";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import TestimonialsSlider from "@/components/site/TestimonialsSlider";
import { Eyebrow, GhostButton, PrimaryButton } from "@/components/site/chrome";
import { IMPACT_GLANCE, TRANSFORMATIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Client Wins",
  description:
    "Real transformation starts with real results — proven in high-stakes environments at Google Cloud, Sony PlayStation, Molson Coors, and Blue Shield of California.",
};

export default function WinsPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/6950048/pexels-photo-6950048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            priority
            sizes="100vw"
            className="duotone object-cover opacity-40"
          />
          <div className="absolute inset-0 vignette" />
          <div className="grid-bg absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>
        <div className="container-x relative pb-16 pt-44">
          <Reveal className="flex max-w-4xl flex-col gap-7">
            <Eyebrow dark>Client Wins — Proven in high-stakes environments</Eyebrow>
            <h1 className="text-hero text-balance">
              Real transformation starts with{" "}
              <span className="serif-italic text-ember-2">real results</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              OutcomeEdge helps leaders align teams, unlock execution clarity, and drive outcomes
              that matter — predicted, measured, and repeated.
            </p>
            <div className="pt-2">
              <PrimaryButton href="/contact?intent=strategy">Start a Conversation</PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= TRANSFORMATIONS ========================= */}
      <section className="container-x flex flex-col gap-24 py-24 md:gap-32 md:py-36">
        {TRANSFORMATIONS.map((t, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={t.index}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <Reveal className={cn(flip && "md:order-2")}>
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={t.image}
                      alt={t.org}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="duotone object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember font-display text-lg text-ink">
                        {t.index}
                      </span>
                      <span className="eyebrow rounded-full bg-ink/70 px-3 py-1.5 text-paper backdrop-blur">
                        Transformation {t.index}
                      </span>
                    </div>
                    <p className="absolute bottom-5 left-5 right-5 font-display text-xl italic leading-snug text-paper">
                      “{t.outcome}”
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className={cn("flex flex-col gap-6", flip && "md:order-1")}>
                <Reveal className="flex flex-col gap-4">
                  <Eyebrow>
                    {t.org} — {t.sub}
                  </Eyebrow>
                  <h2 className="text-display-sm text-balance">
                    {t.label} at <span className="serif-italic text-volt-deep">{t.org}</span>
                  </h2>
                </Reveal>
                <div className="flex flex-col gap-3">
                  {t.points.map((point, j) => (
                    <Reveal key={point} delay={j * 70}>
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt-deep/10 text-volt-deep">
                          <Check className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        <p className="text-base leading-relaxed text-ink/90">{point}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={140}>
                  <figure className="flex flex-col gap-3 rounded-2xl bg-ink p-6 text-paper md:p-7">
                    <Quote className="h-5 w-5 text-ember" aria-hidden />
                    <blockquote className="font-display text-lg italic leading-snug md:text-xl">
                      “{t.quote.text}”
                    </blockquote>
                    <figcaption className="eyebrow text-fog">{t.quote.role}</figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* ======================== OUTCOMES AT A GLANCE ===================== */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/35295988/pexels-photo-35295988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            sizes="100vw"
            className="duotone object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink/95" />
          <div className="grid-bg absolute inset-0" />
        </div>
        <div className="container-x grain relative py-24 md:py-32">
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <Eyebrow dark>Outcomes at a glance</Eyebrow>
            <h2 className="text-display text-balance">
              The impact <span className="serif-italic text-ember-2">metrics</span> leaders care
              about.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_GLANCE.map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <div className="glass flex h-full items-start gap-4 rounded-2xl p-6">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-base leading-relaxed text-paper">{item}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={350}>
              <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-ember p-6 text-ink">
                <p className="font-display text-2xl leading-tight">
                  Predictable, cohesive, strategically aligned.
                </p>
                <p className="eyebrow text-ink/60">The operating state we build toward</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== TESTIMONIALS ========================== */}
      <section id="testimonials" className="scroll-mt-24 py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <Eyebrow>Clients say it best</Eyebrow>
            <h2 className="text-display text-balance">
              In their <span className="serif-italic text-volt-deep">words</span>.
            </h2>
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <TestimonialsSlider />
        </Reveal>
        <div className="container-x mt-8">
          <p className="eyebrow text-clay/70">Hover to pause · Sliding live from client engagements</p>
        </div>
      </section>

      {/* ============================ EXPERIENCE CTA ======================= */}
      <section className="container-x pb-24 md:pb-32">
        <Reveal>
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-ink/10 bg-white/60 p-8 backdrop-blur md:flex-row md:items-center md:justify-between md:p-12">
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 className="font-display text-2xl leading-tight md:text-3xl">
                Want to experience this kind of{" "}
                <span className="serif-italic text-volt-deep">transformation</span>?
              </h2>
              <p className="text-sm leading-relaxed text-clay md:text-base">
                Connect with us and let&apos;s explore how OutcomeEdge accelerates clarity and
                execution in your world.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact?intent=strategy">Book a Strategy Call</PrimaryButton>
              <GhostButton href="/services" className="text-ink">
                Explore Services
              </GhostButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================================ CTA ============================= */}
      <CtaBand
        title={
          <>
            Ready to turn ambition into{" "}
            <span className="serif-italic text-ember-2">outcomes</span>?
          </>
        }
        lead="Bring us the initiative that's stuck. We'll bring the clarity, alignment, and execution rhythm that unsticks it."
        primaryLabel="Book a 30-Minute Consultation"
        primaryHref="/contact?intent=strategy"
        secondaryLabel="Meet the Team"
        secondaryHref="/about"
      />
    </>
  );
}
