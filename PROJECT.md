# PROJECT.md — OutcomeEdge Engineering Guide

Deep-dive documentation for maintaining and extending the OutcomeEdge website.
For a quick start, see **README.md**.

---

## 1. Architecture

**Next.js 16 App Router**, server components by default, client components only
where interactivity demands it (nav menu, forms, filters, scroll reveals).

```
Browser
  │
  ├─ RSC pages (src/app/*)          ── render content, compose sections
  │     └─ async pages call ───────► src/lib/content.ts
  │                                    ├─ Drizzle → PostgreSQL (seeded)
  │                                    └─ fallback → src/lib/data.ts
  │
  ├─ Client islands                  ── Navbar, ContactForm, InsightsBrowser,
  │                                    Reveal, StatCounter (hydration)
  │
  └─ POST /api/contact ────────────► validates + inserts into `inquiries`
```

### Route map

| Route                    | Type    | Data source                              |
| ------------------------ | ------- | ---------------------------------------- |
| `/`                      | dynamic | posts via `getAllPosts()` (preview row)  |
| `/services`              | static  | `SERVICES`, `TESTIMONIALS` from data.ts  |
| `/gcc`                   | static  | `GCC_*` from data.ts                     |
| `/wins`                  | static  | `TRANSFORMATIONS`, `IMPACT_GLANCE`       |
| `/blog`                  | dynamic | `getAllPosts()`                          |
| `/blog/[slug]`           | dynamic | `getPostBySlug()` + related posts        |
| `/about` `/contact` `/privacy` | static | people / `CONTACT` from data.ts   |
| `/api/contact`           | POST    | Drizzle insert → `inquiries`             |
| `/api/health`            | GET     | liveness probe used by the platform      |

Content pages that touch the DB export `export const dynamic = "force-dynamic"`
so they render per-request. The DB is wrapped in `try/catch` with fallback to
`src/lib/data.ts`, making builds and cold starts safe even without a database.

---

## 2. Design System ("Midnight Volt")

All tokens live in `src/app/globals.css` inside Tailwind v4's `@theme` block.

### Color tokens

| Token            | Value      | Role                                        |
| ---------------- | ---------- | ------------------------------------------- |
| `ink / ink-2/3`  | navy darks | Dark sections, nav, footer, panels          |
| `paper / paper-2`| ice mists  | Light section backgrounds                   |
| `fog` / `clay`   | muting     | Secondary text on dark / on light           |
| `ember / ember-2`| volt       | Primary accent — buttons, glows, markers    |
| `volt-deep`      | olive      | Accent **on light surfaces** (contrast)     |
| `gold`           | violet     | Aurora secondary gradients                  |

> ⚠️ Rule: use `ember` text only on dark backgrounds; on light backgrounds use
> `volt-deep`. Volt backgrounds (`bg-ember`) always pair with `text-ink`.

### Type system

- `--font-display` → **Space Grotesk** (`.text-hero`, `.text-display`, `font-display`)
- `--font-serif-accent` → **Fraunces** (`.serif-italic` accent words in headlines)
- `--font-sans` → **Inter** (body) · `--font-mono` → **IBM Plex Mono** (`.eyebrow`)

### Signature utilities (globals.css)

`grain` (film noise) · `grid-bg` (perspective grid) · `glass` (frosted card) ·
`vignette` / `duotone` (image treatments) · `link-line` (underline sweep) ·
`btn-primary / btn-ghost` · `mask-fade-x` · `text-glow-volt` · `text-outline` ·
`container-x` · `hairline-t/b` · `animate-marquee` + `animate-marquee-slow`
(testimonials slider) · `.reveal` (IntersectionObserver entrance)

### Motion rules

Entrances via `<Reveal>` (0.9s ease-out, once, respects
`prefers-reduced-motion`). Marquees are pure CSS (`translateX(-50%)` on a
duplicated track) and pause on hover via arbitrary
`hover:[animation-play-state:paused]`.

---

## 3. Component Inventory

| Component                         | Server/Client | Purpose                                |
| --------------------------------- | ------------- | -------------------------------------- |
| `site/Navbar.tsx`                 | client        | Scroll glass nav, KC dropdown, mobile menu |
| `site/Footer.tsx`                 | server        | Links, contact info, **giant stylish "OutcomeEdge" wordmark** |
| `site/CtaBand.tsx`                | server        | Dark CTA band w/ aurora + grid         |
| `site/chrome.tsx`                 | server        | `SectionHead`, `Eyebrow`, `Marquee`, `PrimaryButton`, `GhostButton`, `Tag` |
| `site/Reveal.tsx`                 | client        | Scroll-reveal wrapper                  |
| `site/StatCounter.tsx`            | client        | Animated numbers (rAF, easeOut)        |
| `site/TestimonialsSlider.tsx`     | server        | **Sliding testimonial marquee** (`dark` variant supported) |
| `site/cards.tsx`                  | server        | `PostCard` (normal + `large` featured) |
| `insights/InsightsBrowser.tsx`    | client        | Search + category tabs + load more     |
| `contact/ContactForm.tsx`         | client        | Validated booking/inquiry form         |

---

## 4. Data & Database

### Drizzle schema (`src/db/schema.ts`)

- **`posts`** — slug (unique), title, excerpt, category, author, authorRole,
  image, readTime, featured, `content` (jsonb block array), publishedAt.
- **`inquiries`** — name, email, **phone**, company, intent, message, createdAt.

### Content flow

`src/lib/data.ts` is the **single source of truth** for all copy: pillars,
services, GCC content, transformations, testimonials, people, contact info, and
the 13 blog posts (including full article body blocks).

1. Edit `src/lib/data.ts`.
2. Blog posts: apply to DB with
   `psql $DATABASE_URL -c "TRUNCATE posts RESTART IDENTITY;" && npx tsx src/db/seed.ts`
   (seed is idempotent via `ON CONFLICT DO NOTHING` on slug).
3. Everything else (services, testimonials, wins…) is read statically at
   render time — no reseed needed.

### Post body format

`content: PostBlock[]` where blocks are `{type:"p"}`, `{type:"h2"}`,
`{type:"quote"}`, `{type:"list", items:[…]}` — rendered by the
`Block` component in `src/app/blog/[slug]/page.tsx`.

---

## 5. How-To Guides

**Add a blog post** → append to `POSTS` in `data.ts` (unique slug, one of the
four `POST_CATEGORIES`, Pexels image URL), then reseed as above.

**Add a testimonial** → append to `TESTIMONIALS`; the sliding marquee on
`/services` and `/wins` updates automatically.

**Add/edit a client win** → edit `TRANSFORMATIONS` (label, org, points,
outcome, quote, image). The wins page alternates layout automatically.

**Edit team/advisors** → `MEMBERS`, `PARTNERS`, `ADVISORS` in `data.ts`.

**Change theme** → edit `@theme` tokens in `globals.css` only; every component
consumes tokens, nothing hardcodes colors (except aurora radial gradients).

---

## 6. API Reference

### `POST /api/contact`

Request JSON: `name` (≥2 chars), `email` (RFC-ish), `phone` (7–20 dial chars),
`intent` ∈ `strategy|initiative|leadership|gcc|coaching|other`,
`message` (≥20 chars), optional `company`.

Responses: `201 {ok:true,id}` · `400 {ok:false,error}` (validation) ·
`500 {ok:false,error}` (persistence). Values are length-capped server-side.

### `GET /api/health` → `200` liveness (platform healthcheck).

---

## 7. Validation Checklist (run before finishing any change)

```bash
npx next typegen                                   # route types
npm exec tsc -- --noEmit --pretty false            # type safety
npm run build                                      # production build
# then start + healthcheck via the platform build_and_start step
```

## 8. Performance & A11y Notes

- All photography via `next/image` with sized `sizes` hints; heroes use
  `priority`. `duotone` filter keeps imagery on-brand.
- `prefers-reduced-motion` disables reveals + marquee feel.
- Form fields have labels + `aria-invalid`; nav dropdown is keyboard-focusable
  via `group-hover`/focus styles; landmarks (`header/main/footer/nav`) used.
