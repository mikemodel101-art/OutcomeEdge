import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "Privacy / Cookie Policy",
  description: "How Outcome Edge collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    title: "What we collect",
    text: "When you contact us, we collect your name, email, contact number, and the message you send. When you browse, we collect standard, anonymous usage data (pages visited, approximate region, device type) to understand what content is useful.",
  },
  {
    title: "How we use it",
    text: "Contact details are used for exactly one thing: responding to your inquiry within one business day. We do not send newsletters, sell data, or share your information with third parties for marketing.",
  },
  {
    title: "Cookies",
    text: "This site uses a small number of functional cookies for performance and analytics. No advertising trackers. You can block cookies in your browser without breaking anything important.",
  },
  {
    title: "Retention & your choices",
    text: "Inquiry records are kept for up to 24 months, then deleted. You can request a copy or deletion of your data at any time by emailing business@agilonomics.com — we respond within five business days.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-x relative pb-16 pt-44 md:pb-20">
          <Reveal className="flex max-w-3xl flex-col gap-6">
            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 text-fog transition-colors hover:text-paper"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Home
            </Link>
            <h1 className="text-hero text-balance">
              Privacy &amp; <span className="serif-italic text-ember-2">cookies</span>.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-fog">
              Short version: we collect the minimum, use it to reply to you, and never sell
              anything. Details below — in plain language.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="mx-auto flex max-w-[760px] flex-col">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delay={i * 60}>
              <div className="hairline-t flex flex-col gap-3 py-8 first:border-t-0 first:pt-0">
                <p className="eyebrow text-volt-deep">0{i + 1}</p>
                <h2 className="font-display text-2xl">{section.title}</h2>
                <p className="text-base leading-relaxed text-clay">{section.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <p className="hairline-t pt-8 text-sm leading-relaxed text-clay">
              Last updated: February 2026. Questions?{" "}
              <Link href="/contact" className="link-line font-medium text-ink">
                Contact us
              </Link>{" "}
              or email{" "}
              <a href="mailto:business@agilonomics.com" className="link-line font-medium text-ink">
                business@agilonomics.com
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
