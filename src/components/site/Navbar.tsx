"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gcc", label: "GCCs" },
  { href: "/wins", label: "Client Wins" },
];

const KC_LINKS = [
  { href: "/blog", label: "Blog", note: "Essays & playbooks" },
  { href: "/about", label: "About Us", note: "Meet Amitabh & the team" },
];

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gcc", label: "GCCs (US-India & Global)" },
  { href: "/wins", label: "Client Wins" },
  { href: "/blog", label: "Knowledge Center" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const kcActive = isActive("/blog") || isActive("/about");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-paper transition-all duration-500",
          scrolled || open
            ? "border-b border-paper/10 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="group flex shrink-0 items-baseline gap-2" aria-label="OutcomeEdge home">
            <span
              className="mt-1 inline-block h-2 w-2 translate-y-[-2px] rounded-[1px] bg-ember transition-transform duration-300 group-hover:rotate-45"
              aria-hidden
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              Outcome<span className="serif-italic font-normal">Edge</span>
              <span className="text-ember">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-line eyebrow transition-colors",
                  isActive(link.href) ? "text-paper" : "text-fog hover:text-paper",
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Knowledge Center dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={cn(
                  "eyebrow flex items-center gap-1.5 py-6 transition-colors",
                  kcActive ? "text-paper" : "text-fog hover:text-paper",
                )}
                aria-haspopup="true"
              >
                Knowledge Center
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" aria-hidden />
              </button>
              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="glass overflow-hidden rounded-2xl bg-ink/95 p-2 shadow-2xl shadow-ink">
                  {KC_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-paper/10"
                    >
                      <span className="text-sm font-medium text-paper">{link.label}</span>
                      <span className="eyebrow text-fog/70">{link.note}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={cn(
                "link-line eyebrow transition-colors",
                isActive("/contact") ? "text-paper" : "text-fog hover:text-paper",
              )}
            >
              Contact
            </Link>

            <Link
              href="/contact?intent=strategy"
              className="btn bg-ember px-5 py-2.5 text-xs font-semibold tracking-wide text-ink hover:bg-ember-2"
            >
              Book a Call
              <ArrowUpRight className="btn-arrow h-3.5 w-3.5" aria-hidden />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink px-5 pb-10 pt-28 text-paper transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {MOBILE_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hairline-b flex items-center justify-between py-4 font-display text-3xl transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: `${60 + i * 50}ms` }}
            >
              {link.label}
              <ArrowUpRight className="h-6 w-6 text-ember" aria-hidden />
            </Link>
          ))}
        </nav>
        <div className={cn("pt-8 transition-all delay-300 duration-500", open ? "opacity-100" : "opacity-0")}>
          <p className="eyebrow mb-4 text-fog">No slides. No sales pitch.</p>
          <Link href="/contact?intent=strategy" className="btn-primary w-full justify-center">
            Book a Call
            <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
