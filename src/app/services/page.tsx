import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import TestimonialsSlider from "@/components/site/TestimonialsSlider";
import { Eyebrow } from "@/components/site/chrome";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Execution support for high-priority strategic initiatives — strategic initiative acceleration, execution confidence for leadership teams, and cross-team execution stabilization.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
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
            <Eyebrow dark>Services — Three ways we break delivery logjams</Eyebrow>
            <h1 className="text-hero text-balance">
              Execution support for{" "}
              <span className="serif-italic text-ember-2">high-priority</span> initiatives.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              We help product and engineering leaders accelerate progress on critical initiatives
              when delivery confidence is low — through initiative acceleration, leadership
              development, and cross-team stabilization.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================== CORE SERVICES ========================== */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>Three core services</Eyebrow>
          <h2 className="text-display text-balance">
            How we help high-stakes teams{" "}
            <span className="serif-italic text-volt-deep">break through</span>.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-28">
          {SERVICES.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={service.index} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <Reveal className={cn(flip && "md:order-2")}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="relative aspect-[16/11]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="duotone object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-ember font-display text-ink">
                        {service.index}
                      </span>
                    </div>
                  </div>
                </Reveal>

                <div className={cn("flex flex-col gap-6", flip && "md:order-1")}>
                  <Reveal className="flex flex-col gap-4">
                    <h3 className="text-display-sm text-balance">{service.title}</h3>
                    <p className="text-base leading-relaxed text-clay md:text-lg">
                      {service.description}
                    </p>
                  </Reveal>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <Reveal key={point}>
                        <div className="flex items-start gap-2.5 text-sm text-ink/90">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-deep" aria-hidden />
                          {point}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  <Reveal delay={120}>
                    <Link href={`/contact?intent=${service.intent}`} className="btn-primary w-fit">
                      {service.cta}
                      <ArrowRight className="btn-arrow h-4 w-4" aria-hidden />
                    </Link>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================== TESTIMONIALS ========================== */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-x relative pt-24 md:pt-32">
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <Eyebrow dark>Clients say it best</Eyebrow>
            <h2 className="text-display text-balance">
              Warmth, candor, and{" "}
              <span className="serif-italic text-ember-2">conviction in the practice</span>.
            </h2>
          </Reveal>
        </div>
        <Reveal className="relative mt-14">
          <TestimonialsSlider dark />
        </Reveal>
        <div className="container-x relative flex flex-wrap items-center justify-between gap-4 pb-24 pt-8 md:pb-32">
          <p className="eyebrow text-fog/70">Hover to pause the slider</p>
          <Link
            href="/wins#testimonials"
            className="eyebrow inline-flex items-center gap-2 text-fog transition-colors hover:text-paper"
          >
            See more testimonials
            <ArrowRight className="h-3.5 w-3.5 text-ember" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ================================ CTA ============================= */}
      <CtaBand
        title={
          <>
            Not sure where to start?{" "}
            <span className="serif-italic text-ember-2">Let&apos;s talk</span>.
          </>
        }
        lead="Book a 30-minute consultation. No slides, no sales pitch — just a real conversation about what's in your way and how we can help."
        primaryLabel="Book a 30-Minute Consultation"
        primaryHref="/contact?intent=strategy"
        secondaryLabel="See Client Wins"
        secondaryHref="/wins"
      />
    </>
  );
}
