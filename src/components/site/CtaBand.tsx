import type { ReactNode } from "react";
import Reveal from "@/components/site/Reveal";
import { GhostButton, PrimaryButton } from "@/components/site/chrome";

export default function CtaBand({
  title = "Ready to build your edge?",
  lead = "A thirty-minute strategy call. Bring your hardest operating problem — leave with a sharper read on what to do next.",
  primaryLabel = "Book a Strategy Call",
  primaryHref = "/contact?intent=strategy",
  secondaryLabel,
  secondaryHref,
}: {
  title?: ReactNode;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink text-paper">
      {/* ember glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, #c6f244 0%, transparent 65%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-52 -top-40 h-[520px] w-[520px] rounded-full opacity-15 blur-[150px]"
        style={{ background: "radial-gradient(circle, #8b7cff 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="grid-bg absolute inset-0" aria-hidden />

      <div className="container-x relative py-24 md:py-36">
        <Reveal className="flex max-w-3xl flex-col gap-8">
          <p className="eyebrow flex items-center gap-3 text-fog">
            <span className="inline-block h-[7px] w-[7px] rounded-[1px] bg-ember" aria-hidden />
            Next step
          </p>
          <h2 className="text-display text-balance">{title}</h2>
          <p className="max-w-xl text-base leading-relaxed text-fog md:text-lg">{lead}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
            {secondaryLabel && secondaryHref ? (
              <GhostButton href={secondaryHref} className="text-paper">
                {secondaryLabel}
              </GhostButton>
            ) : null}
          </div>
          <p className="eyebrow pt-4 text-fog/70">Response within one business day</p>
        </Reveal>
      </div>
    </section>
  );
}
