import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarClock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/chrome";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Book a Call",
  description:
    "Thank you for contacting Outcome Edge. No slides, no sales pitch — just a real conversation about what's in your way and how we can help.",
};

export default function ContactPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt=""
            fill
            priority
            sizes="100vw"
            className="duotone object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="grid-bg absolute inset-0" />
        </div>
        <div className="container-x relative pb-20 pt-44 md:pb-28">
          <Reveal className="flex max-w-4xl flex-col gap-7">
            <Eyebrow dark>Contact — Book a call</Eyebrow>
            <h1 className="text-hero text-balance">
              Thank you for contacting{" "}
              <span className="serif-italic text-ember-2">Outcome Edge</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              No slides. No sales pitch. Just a real conversation about what&apos;s in your way
              and how we can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================== FORM + INFO =========================== */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <Reveal className="flex flex-col gap-10 lg:sticky lg:top-28">
              <div className="flex flex-col gap-4">
                <Eyebrow>How can we help?</Eyebrow>
                <h2 className="text-display-sm text-balance">
                  Tell us what you&apos;re trying to move. We&apos;ll tell you honestly if we can
                  move it.
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-clay">
                  The contact form is intended for individuals interested in our services. We
                  respectfully ask that it not be used for job inquiries or sales outreach — and we
                  ignore messages without a proper description.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 text-sm text-ink"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-ember">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="link-line font-medium">{CONTACT.email}</span>
                </a>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-4 text-sm text-ink">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-ember">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="link-line font-medium">{CONTACT.phone}</span>
                </a>
                <div className="flex items-center gap-4 text-sm text-ink">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-ember">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-medium">{CONTACT.address}</span>
                </div>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm text-ink"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-ember">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="link-line font-medium">Connect with Amit on LinkedIn</span>
                </a>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-dashed border-ink/20 p-5">
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-volt-deep" aria-hidden />
                <p className="text-sm leading-relaxed text-clay">
                  <span className="font-semibold text-ink">Online meeting booking:</span> our
                  scheduling feature is coming soon. For now, send the form and we&apos;ll find a
                  time within one business day.
                </p>
              </div>

              <a
                href="/wins#testimonials"
                className="eyebrow link-line w-fit text-clay hover:text-ink"
              >
                See detailed testimonials →
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-ink/10 bg-white/60 p-7 shadow-[0_1px_0_0_rgba(8,11,21,0.04)] backdrop-blur md:p-10">
                <Suspense
                  fallback={
                    <div className="flex min-h-[420px] items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin text-volt-deep" aria-hidden />
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
