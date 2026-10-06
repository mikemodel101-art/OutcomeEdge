import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

const NAVIGATE = [
  { href: "/services", label: "Services" },
  { href: "/gcc", label: "GCCs (US-India & Global)" },
  { href: "/wins", label: "Client Wins" },
  { href: "/wins#testimonials", label: "Testimonials" },
  { href: "/blog", label: "Knowledge Center" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const EXPLORE = [
  { href: "/services", label: "Strategic Initiative Acceleration" },
  { href: "/services", label: "Leadership Development" },
  { href: "/services", label: "Coaching & Workshops" },
  { href: "/wins", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy / Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="container-x relative pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="inline-block h-2 w-2 translate-y-[-2px] rounded-[1px] bg-ember" aria-hidden />
              <span className="font-display text-2xl font-semibold tracking-tight">
                Outcome<span className="serif-italic font-normal">Edge</span>
                <span className="text-ember">.</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
              We help product and engineering leaders restore execution confidence — turning
              strategic initiatives into predictable delivery, one aligned team at a time.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-sm text-fog">
              <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-3 hover:text-paper">
                <Mail className="h-4 w-4 shrink-0 text-ember" aria-hidden />
                <span className="link-line">{CONTACT.email}</span>
              </a>
              <a href={`tel:${CONTACT.phone}`} className="group flex items-center gap-3 hover:text-paper">
                <Phone className="h-4 w-4 shrink-0 text-ember" aria-hidden />
                <span className="link-line">{CONTACT.phone}</span>
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-ember" aria-hidden />
                {CONTACT.address}
              </p>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-6 text-fog">Pages</p>
            <ul className="space-y-3.5">
              {NAVIGATE.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="link-line text-sm text-paper/85 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-6 text-fog">Explore</p>
            <ul className="space-y-3.5">
              {EXPLORE.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="link-line text-sm text-paper/85 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-6 text-fog">Start here</p>
            <p className="mb-5 text-sm leading-relaxed text-fog">
              No slides. No sales pitch. Just a real conversation about what&apos;s in your way.
            </p>
            <Link href="/contact?intent=strategy" className="btn-ghost text-paper">
              Book a Call
              <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Stylish giant wordmark — complete OutcomeEdge */}
        <div className="pointer-events-none mt-20 select-none" aria-hidden>
          <p
            className="whitespace-nowrap text-center font-display font-semibold leading-none tracking-tight text-paper"
            style={{ fontSize: "clamp(3.4rem, 12.5vw, 12rem)" }}
          >
            <span className="text-outline">Outcome</span>
            <span className="serif-italic font-normal text-ember text-glow-volt">Edge</span>
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="hairline-t w-16 text-paper/40 md:w-28" aria-hidden />
            <p className="eyebrow text-center text-fog">
              Outcome Edge — Turn Ambition Into Outcomes
            </p>
            <span className="hairline-t w-16 text-paper/40 md:w-28" aria-hidden />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-t mt-12 flex flex-col items-start justify-between gap-4 pt-6 text-fog md:flex-row md:items-center">
          <p className="eyebrow">© 2026 Outcome Edge — All rights reserved</p>
          <Link href="/privacy" className="eyebrow link-line hover:text-paper">
            Privacy / Cookie Policy
          </Link>
          <Link href="#top" className="eyebrow link-line hover:text-paper">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
