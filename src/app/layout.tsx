import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plexmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OutcomeEdge — Outcome Delivery, Leadership & Team Performance",
    template: "%s — OutcomeEdge",
  },
  description:
    "OutcomeEdge helps enterprises turn Global Capability Centers into engines of value through outcome delivery, leadership development, and team performance.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body id="top" className="bg-paper font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
