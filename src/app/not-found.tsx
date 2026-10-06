import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GhostButton, PrimaryButton } from "@/components/site/chrome";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-paper">
      <div className="container-x relative flex flex-col gap-8 py-40">
        <p className="eyebrow flex items-center gap-3 text-fog">
          <span className="inline-block h-[7px] w-[7px] rounded-[1px] bg-ember" aria-hidden />
          Error 404
        </p>
        <h1 className="text-hero">
          This outcome wasn&apos;t <span className="serif-italic text-ember-2">delivered</span>.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-fog">
          The page you&apos;re looking for moved, was renamed, or never shipped. Let&apos;s get you
          back to something useful.
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Home
          </PrimaryButton>
          <GhostButton href="/contact" className="text-paper">
            Contact Us
          </GhostButton>
        </div>
        <p className="eyebrow pt-6 text-fog/70">
          <Link href="/wins" className="link-line hover:text-paper">
            Client Wins
          </Link>
          {"  ·  "}
          <Link href="/blog" className="link-line hover:text-paper">
            Knowledge Center
          </Link>
          {"  ·  "}
          <Link href="/services" className="link-line hover:text-paper">
            Services
          </Link>
        </p>
      </div>
    </section>
  );
}
