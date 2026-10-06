# OutcomeEdge

> **Turn Strategic Initiatives Into Predictable Delivery.**
> A cinematic, full-stack marketing website for Outcome Edge — the executive delivery
> transformation practice founded by **Amitabh Sinha** ("the Agile Whisperer").

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and
**PostgreSQL via Drizzle ORM**. The look is a custom **Midnight Volt** design system:
deep navy, ice-mist surfaces, electric-volt accents, aurora glows, film grain, and
perspective grids — with background photography on every page.

---

## ✨ Features

- **Cinematic "Midnight Volt" theme** — grotesque display type (Space Grotesk) with
  Fraunces italic accent words, volt glow buttons, glass cards, grid aurora heroes.
- **Real site structure** mirroring the live Outcome Edge presence (7 sections below).
- **Sliding testimonials marquee** — auto-scrolling, pause-on-hover, pure CSS.
- **CMS-ready Knowledge Center** — blog posts served from PostgreSQL with bundled
  fallback content; search, category filters, featured posts, load-more pagination.
- **Working contact + booking form** — validated client & server side, persisted to
  PostgreSQL via `/api/contact`.
- **Background imagery on every page** + duotone inline photography (Pexels CDN),
  scroll reveals, animated counters, accessibility-conscious motion.

## 🗺️ Pages

| Route                    | Content                                                                 |
| ------------------------ | ----------------------------------------------------------------------- |
| `/`                      | Hero, three pillars, "Delivered by Amitabh Sinha", business impact, blog preview |
| `/services`              | Three core services, sliding testimonials, 30-min consultation CTA      |
| `/gcc`                   | GCCs (US-India & Global): failure patterns, what we bring, who we serve |
| `/wins`                  | 4 transformations (Google Cloud, Blue Shield, Molson Coors, PlayStation), impact metrics, sliding testimonials |
| `/blog` `/blog/[slug]`   | Knowledge Center: 13 articles, search + filters + article template      |
| `/about`                 | Amitabh Sinha bio, purpose, core values, members/partners/advisors      |
| `/contact`               | Booking/inquiry form (name, email, phone, reason, message) + details    |
| `/privacy`               | Privacy & cookie policy                                                 |

## 🧰 Tech Stack

| Layer     | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Server Components)                    |
| UI        | React 19, Tailwind CSS v4 (CSS-first `@theme`), lucide-react |
| Fonts     | Space Grotesk · Fraunces · Inter · IBM Plex Mono (next/font) |
| Database  | PostgreSQL + Drizzle ORM (node-postgres pool)                 |
| Media     | Pexels CDN (optimized via `next/image`)                       |

## 🚀 Getting Started

```bash
# 1. Install
npm install

# 2. Configure environment
cp .env.example .env   # then set DATABASE_URL
# DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db

# 3. Create tables + seed blog content
npx drizzle-kit push
npx tsx src/db/seed.ts

# 4. Develop
npm run dev          # http://localhost:3000

# 5. Production
npm run build && npm run start
```

> No database handy? Pages read from the DB **when seeded** and transparently fall
> back to the bundled content in `src/lib/data.ts`, so the site always renders.

## 📜 Scripts

| Command               | Purpose                          |
| --------------------- | -------------------------------- |
| `npm run dev`         | Start dev server (Turbopack)     |
| `npm run build`       | Production build                 |
| `npm run start`       | Start production server          |
| `npm run typecheck`   | `tsc --noEmit`                   |
| `npx drizzle-kit push`| Apply `src/db/schema.ts` to DB   |
| `npx tsx src/db/seed.ts` | Seed the `posts` table        |

## 🗂️ Project Structure

```
src/
├─ app/                    # App Router pages + API routes
│  ├─ api/contact/route.ts # POST inquiries → PostgreSQL
│  └─ (page per section above)
├─ components/
│  ├─ site/                # Navbar, Footer, CtaBand, chrome, cards,
│  │                       # Reveal, StatCounter, TestimonialsSlider
│  ├─ insights/            # Knowledge Center browser (search/filter/load-more)
│  └─ contact/             # Contact + booking form (client)
├─ lib/
│  ├─ data.ts              # ★ All content (services, wins, people, posts…)
│  ├─ content.ts           # DB-first post access with static fallback
│  └─ utils.ts
└─ db/
   ├─ schema.ts            # posts + inquiries tables
   └─ seed.ts              # Idempotent blog seeder
```

See **PROJECT.md** for the full architecture & content-management guide.

## 🔌 Contact API

`POST /api/contact` — JSON: `name`, `email`, `phone`, `intent`, `message`
(all validated server-side) → persists to the `inquiries` table, returns
`{ ok: true, id }` (201) or a 400/500 JSON error.

---

© 2026 Outcome Edge · Thomas Dr, Palo Alto, CA 94303 · business@agilonomics.com
