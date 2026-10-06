import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Check, Users2, Workflow } from "lucide-react";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { Eyebrow, PrimaryButton, SectionHead } from "@/components/site/chrome";
import { GCC_BRINGS, GCC_EXPERIENCE, GCC_FAILURES, GCC_WHO } from "@/lib/data";

export const metadata: Metadata = {
  title: "GCCs — US-India & Global",
  description:
    "Global Capability Centers that actually work. OutcomeEdge partners with Recro to build or fix GCCs by aligning leaders first, then enabling teams to deliver real outcomes.",
};

const BRING_ICONS = [Users2, Building2, Workflow];

export default function GccPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/33803478/pexels-photo-33803478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            priority
            sizes="100vw"
            className="duotone object-cover opacity-45"
          />
          <div className="absolute inset-0 vignette" />
          <div className="grid-bg absolute inset-0" />
          <div
            className="absolute -left-40 top-24 h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
            style={{ background: "radial-gradient(circle, #c6f244 0%, transparent 65%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>
        <div className="container-x relative pb-16 pt-44">
          <Reveal className="flex max-w-4xl flex-col gap-7">
            <Eyebrow dark>GCCs — US-India &amp; Global</Eyebrow>
            <h1 className="text-hero text-balance">
              Global Capability Centers that{" "}
              <span className="serif-italic text-ember-2">actually work</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              US–India GCCs don&apos;t fail because of talent or cost. They fail because leaders,
              teams, and execution models don&apos;t align across cultures. OutcomeEdge partners
              with <span className="text-paper">Recro</span> to build or fix GCCs — aligning
              leaders first, then enabling teams to deliver real outcomes.
            </p>
            <div className="pt-2">
              <PrimaryButton href="/contact?intent=gcc">Book a Conversation</PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= FAILURE PATTERNS ======================== */}
      <section className="container-x py-24 md:py-32">
        <SectionHead
          eyebrow="From real conversations with GCC leaders and operators"
          title={
            <>
              The three failure patterns we see{" "}
              <span className="serif-italic text-volt-deep">repeatedly</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {GCC_FAILURES.map((failure, i) => (
            <Reveal key={failure.title} delay={i * 90}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-ink/10 bg-white/60 p-8 shadow-[0_1px_0_0_rgba(8,11,21,0.04)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-volt-deep/40 hover:shadow-[0_28px_60px_-30px_rgba(77,124,15,0.4)]">
                <span className="font-display text-6xl leading-none text-ink/10 transition-colors duration-500 group-hover:text-volt-deep/25">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl leading-snug md:text-2xl">{failure.title}</h3>
                <p className="text-sm leading-relaxed text-clay">{failure.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="max-w-2xl border-l-2 border-volt-deep pl-5 font-display text-xl italic leading-snug text-ink md:text-2xl">
            This is the gap OutcomeEdge is designed to close.
          </p>
        </Reveal>
      </section>

      {/* ====================== WHAT OUTCOMEEDGE BRINGS ==================== */}
      <section className="bg-ink text-paper">
        <div className="grid-bg absolute inset-x-0" aria-hidden />
        <div className="container-x relative py-24 md:py-32">
          <SectionHead
            dark
            eyebrow="What OutcomeEdge brings to GCCs"
            title={
              <>
                Alignment first. <span className="serif-italic text-ember-2">Execution follows.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {GCC_BRINGS.map((item, i) => {
              const Icon = BRING_ICONS[i];
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="glass group flex h-full flex-col gap-5 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember text-ink">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl leading-snug md:text-2xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-fog">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== WHO WE WORK WITH + RESULTS ================== */}
      <section className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="text-display-sm text-balance">
              Built for companies at the <span className="serif-italic text-volt-deep">moment of truth</span>.
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {GCC_WHO.map((who, i) => (
              <Reveal key={who} delay={i * 70}>
                <div className="hairline-t flex items-start gap-4 py-5">
                  <span className="eyebrow shrink-0 pt-1 text-volt-deep">0{i + 1}</span>
                  <p className="text-base leading-relaxed text-ink/90">{who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>What clients experience</Eyebrow>
            <h2 className="text-display-sm text-balance">
              From capacity story to <span className="serif-italic text-volt-deep">outcome story</span>.
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {GCC_EXPERIENCE.map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <div className="flex items-start gap-4 rounded-2xl bg-ink p-5 text-paper">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <p className="text-base leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <PrimaryButton href="/contact?intent=gcc" className="w-fit">
              Building or Fixing a GCC? Let&apos;s Talk
            </PrimaryButton>
          </Reveal>
        </div>
      </section>

      {/* ================================ CTA ============================= */}
      <CtaBand
        title={
          <>
            Ready to turn ambition into{" "}
            <span className="serif-italic text-ember-2">outcomes</span>?
          </>
        }
        lead="Whether you're planning a new GCC or rescuing one launched in the last 18 months, the fix starts with alignment — not more process."
        primaryLabel="Book a Conversation"
        primaryHref="/contact?intent=gcc"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
