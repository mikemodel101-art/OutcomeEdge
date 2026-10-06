import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/site/Reveal";

/* ------------------------------ Eyebrow ----------------------------- */

export function Eyebrow({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        dark ? "text-fog" : "text-clay",
        className,
      )}
    >
      <span className="inline-block h-[7px] w-[7px] rounded-[1px] bg-ember" aria-hidden />
      {children}
    </p>
  );
}

/* ---------------------------- Section head -------------------------- */

export function SectionHead({
  eyebrow,
  title,
  lead,
  dark,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={cn("text-display max-w-4xl text-balance", dark ? "text-paper" : "text-ink")}>{title}</h2>
      {lead ? (
        <p className={cn("max-w-2xl text-base leading-relaxed md:text-lg", dark ? "text-fog" : "text-clay")}>
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ------------------------------ Marquee ----------------------------- */

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div className="animate-marquee flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="eyebrow whitespace-nowrap px-6">{item}</span>
            <Asterisk className="h-4 w-4 shrink-0 text-ember" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Buttons ----------------------------- */

export function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("btn-primary", className)}>
      {children}
      <ArrowRight className="btn-arrow h-4 w-4" aria-hidden />
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("btn-ghost", className)}>
      {children}
      <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
    </Link>
  );
}

/* ------------------------------- Tag -------------------------------- */

export function Tag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center rounded-full border px-3 py-1",
        dark ? "border-paper/25 text-fog" : "border-ink/20 text-clay",
      )}
    >
      {children}
    </span>
  );
}
