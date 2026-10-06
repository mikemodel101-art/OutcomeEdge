import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Quote, ShieldCheck, Sparkles, Users, Medal } from "lucide-react";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/chrome";
import { ADVISORS, CORE_VALUES, FOUNDER, MEMBERS, PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Amitabh Sinha — the Agile Whisperer. Servant leader transforming struggling teams into high-performing ones, one team at a time.",
};

const VALUE_ICONS = [HeartHandshake, ShieldCheck, Users, Sparkles, Medal];

function PersonCard({
  name,
  role,
  delay = 0,
}: {
  name: string;
  role: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group flex h-full items-center gap-4 rounded-2xl border border-ink/10 bg-white/60 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-volt-deep/40">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm text-ember">
          {name
            .split(" ")
            .filter((w) => /^[A-Z]/.test(w))
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{name}</span>
          <span className="eyebrow mt-1 block text-clay">{role}</span>
        </span>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/3760374/pexels-photo-3760374.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
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
            <Eyebrow dark>About Us — The people behind the outcomes</Eyebrow>
            <h1 className="text-hero text-balance">
              Amitabh Sinha, the{" "}
              <span className="serif-italic text-ember-2">Agile Whisperer</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              A servant leader who transforms struggling teams into high-performing ones — with a
              sharp eye for business outcomes and a deep belief that great delivery is human work
              first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =============================== BIO ============================== */}
      <section className="container-x grid items-start gap-12 py-24 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="relative overflow-hidden rounded-3xl lg:sticky lg:top-28">
            <div className="relative aspect-[4/4.6]">
              <Image
                src={FOUNDER.image}
                alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="duotone object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl p-5 text-paper">
                <p className="eyebrow text-ember">Founder</p>
                <p className="mt-2 font-display text-xl leading-snug">{FOUNDER.name}</p>
                <p className="mt-1 text-sm text-fog">{FOUNDER.role}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The practice</Eyebrow>
              <p className="font-display text-2xl leading-snug md:text-3xl">
                From executives to Scrum Masters, from product leaders to delivery teams — Amit
                works across all levels to create alignment, build trust, and accelerate impact.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-clay md:text-lg">
                His approach blends coaching, leadership development, and hands-on problem solving
                — ensuring organizations don&apos;t just &quot;do Agile,&quot; but achieve real,
                lasting results. He partners with leaders and teams to unlock collaboration, cut
                through dysfunction, and deliver results that matter.
              </p>
            </Reveal>

            <Reveal>
              <figure className="flex flex-col gap-4 rounded-3xl bg-ink p-8 text-paper md:p-10">
                <Quote className="h-6 w-6 text-ember" aria-hidden />
                <blockquote className="font-display text-xl italic leading-snug md:text-2xl">
                  Serving selflessly is at the core of Servant Leadership. Such selfless activity
                  fosters an environment of safety, trust, teamwork and collaboration — a foundation
                  that brings out the best in people and organizations.
                </blockquote>
                <figcaption className="eyebrow text-fog">Amitabh Sinha — Founder</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== PURPOSE + CORE VALUES ====================== */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/11538562/pexels-photo-11538562.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            sizes="100vw"
            className="duotone object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink/95" />
          <div className="grid-bg absolute inset-0" />
        </div>
        <div className="container-x grain relative py-24 md:py-32">
          <Reveal className="flex max-w-4xl flex-col gap-6">
            <Eyebrow dark>Our company&apos;s purpose</Eyebrow>
            <h2 className="text-display text-balance">
              Creating greatness in the corporate world,{" "}
              <span className="serif-italic text-ember-2">one team at a time</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <Reveal key={value} delay={i * 80}>
                  <div className="glass flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember text-ink">
                      <Icon className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <p className="font-display text-xl">{value}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================== PEOPLE ============================ */}
      <section className="container-x flex flex-col gap-20 py-24 md:py-32">
        <div>
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Members</Eyebrow>
            <h2 className="text-display-sm">The core team</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MEMBERS.map((p, i) => (
              <PersonCard key={p.name} name={p.name} role={p.role} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>

        <div>
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Partners</Eyebrow>
            <h2 className="text-display-sm">Coaches, trainers &amp; strategists we build with</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <PersonCard key={p.name} name={p.name} role={p.role} delay={(i % 3) * 70} />
            ))}
          </div>
        </div>

        <div>
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Advisors</Eyebrow>
            <h2 className="text-display-sm">Guided by experience</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((p) => (
              <Reveal key={p.name}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white/60 p-6 backdrop-blur">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-sm text-ember">
                      HT
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{p.name}</span>
                      <span className="eyebrow mt-1 block text-clay">{p.role}</span>
                    </span>
                  </div>
                  <p className="text-sm text-clay">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
        lead="Work directly with Amitabh and the OutcomeEdge network of coaches, partners, and advisors."
        primaryLabel="Book a 30-Minute Consultation"
        primaryHref="/contact?intent=strategy"
        secondaryLabel="See Client Wins"
        secondaryHref="/wins"
      />
    </>
  );
}
