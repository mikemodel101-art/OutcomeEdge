import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Auto-sliding testimonial marquee.
 * Pure-CSS loop (duplicated track, translateX -50%); pauses on hover.
 */
export default function TestimonialsSlider({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div className="flex w-max animate-marquee-slow py-2 [animation-play-state:running] hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className={cn(
              "mr-4 flex w-[300px] shrink-0 flex-col gap-5 rounded-3xl p-7 md:w-[420px]",
              dark
                ? "glass"
                : "border border-ink/10 bg-white/60 shadow-[0_1px_0_0_rgba(8,11,21,0.04)] backdrop-blur",
            )}
          >
            <Quote className={cn("h-5 w-5", dark ? "text-ember" : "text-volt-deep")} aria-hidden />
            <blockquote
              className={cn(
                "text-base leading-relaxed",
                dark ? "text-paper/95" : "text-ink/90",
              )}
            >
              “{t.text}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-2">
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm",
                  dark ? "bg-ember text-ink" : "bg-ink text-ember",
                )}
              >
                {t.name
                  .split(" ")
                  .filter((w) => /^[A-Z]/.test(w))
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("") || t.name[0]}
              </span>
              <span>
                <span className={cn("block text-sm font-medium", dark ? "text-paper" : "text-ink")}>
                  {t.name}
                </span>
                <span className={cn("eyebrow", dark ? "text-fog" : "text-clay")}>{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
