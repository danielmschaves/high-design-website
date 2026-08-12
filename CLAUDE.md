# CLAUDE.md — High Design Website

Project context and working rules for Claude Code sessions on this repository.

---

## Project

Landing page MVP for **High Design Arquitetura** — an architecture and urbanism studio specialising in residential and commercial projects at medium to high standard.

- **GitHub**: `danielmschaves/high-design-website`
- **Deployed**: Vercel (connected to `main` branch)
- **Dev environment**: Docker container `highdesign_dev`, port 3000

---

## Brand identity (source of truth)

Reference documents (gitignored, local only):
- `Reference/Identidade da Empresa.pdf`
- `Reference/21. POSICIONAMENTO - ESTEIRA DE PRODUTOS.pdf`

### Contact
- **Responsável**: Emanoella Goulart
- **E-mail**: contato@highdesign.arq.br

### Taglines
- **Principal**: *"Arquitetura que guia, do primeiro traço à obra."*
- **Secundária**: *"Transformamos histórias em espaços bem planejados — com método, técnica e acolhimento."*

### Four brand pillars (exact — do not change or invent)
1. **Funcional** — espaços inteligentes que servem à vida real
2. **Elegante** — estética refinada, coerente e sofisticada
3. **Atemporal** — soluções que permanecem relevantes ao longo dos anos
4. **Executável** — projetos viáveis, alinhados à obra que será construída

### Colors
| Token | Hex | Name |
|---|---|---|
| `--color-brand-primary` | `#786169` | Taupe |
| `--color-brand-secondary` | `#e8e1d7` | Cream |
| `--color-brand-accent` | `#ba9e84` | Sand |
| `--color-brand-dark` | `#3d3035` | Deep Taupe |
| `--color-brand-white` | `#f5f2ee` | Warm White |

### Typography
Primary typeface: **Century Gothic Pro** — local OTF files in `public/assets/fonts/`, loaded via `next/font/local` in `lib/fonts.ts`. Used for both display and body.

Companion typeface: **JetBrains Mono** — loaded via `next/font/google` in `lib/fonts.ts`. Reserved for *technical metadata only*: chapter codes (`01 · …`), kickers, captions, code-style labels (`hd-code`), form labels, and footer attribution. Never use for body copy or headings.

### Visual rules
- `border-radius: 0` on all brand elements — sharp, architectural
- No cold colours — palette is entirely warm/earthy
- No fabricated statistics or claims not present in the brand documents

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.29 (App Router) + TypeScript |
| Styles | Tailwind CSS + CSS custom properties (`styles/tokens.css`) |
| Animations | Framer Motion |
| Fonts | `next/font/local` (Century Gothic Pro) + `next/font/google` (JetBrains Mono) |
| Testing | Jest + React Testing Library (`__tests__/`, run with `npm test`) |
| Dev | Docker (`highdesign_dev`, port 3000, node:20-alpine) |

---

## File structure

```
app/
  layout.tsx        — global metadata (title template, keywords, robots/googleBot,
                      viewport/theme-color) + site-wide JSON-LD @graph
  page.tsx          — composes the landing-page sections (order: Hero → Sobre → Diferenciais → ParaQuemE → Esteira → Processo → Portfolio → Blog → Depoimentos → Faq → Contato) + homepage WebPage/FAQPage schema
  globals.css       — imports tokens, Tailwind, responsive helpers, animations
  icon.png          — favicon (HD monogram)
  opengraph-image.tsx — generated 1200×630 share card (next/og)
  sitemap.ts        — /sitemap.xml, driven by lib/blog.ts + lib/services.ts
  robots.ts         — /robots.txt; blocks indexing on Vercel preview deploys
  manifest.ts       — /manifest.webmanifest
  sobre/
    page.tsx        — Emanoella Goulart entity page (ProfilePage schema)
  servicos/
    page.tsx        — services hub (CollectionPage + ItemList + OfferCatalog)
    [slug]/page.tsx — one indexable page per service (Service schema), driven by lib/services.ts
  blog/
    page.tsx        — blog index (lists posts via lib/blog.ts) + Blog/ItemList schema
    [slug]/page.tsx — individual article route (generateStaticParams + generateMetadata) + BlogPosting schema
  privacidade/
    page.tsx        — privacy policy page (LGPD)

components/
  sections/
    Navbar.tsx      — fixed, transparent → frosted glass on scroll, sand underline-on-hover, mobile menu. Nav links: Sobre (#sobre) · Por que a HD (#diferenciais) · Serviços (/servicos) · Portfólio (#portfolio) · Arquiteta (/sobre) · Blog (/blog). Contact reached via "Iniciar projeto" CTA (#contato) — no standalone Contato link.
    Hero.tsx        — centered single-column with eyebrow/h1/lead/CTAs and 4-cell marquee bar (Método · Técnica · Obra · Contato)
    Sobre.tsx       — chapter header (01) + framed image + 2x2 brand-pillar grid + "Por que nascemos" centered pull-quote
    Diferenciais.tsx — chapter header (02) + 8-item grid on dark bg (2-col tablet / 4-col desktop) with monogram watermark
    ParaQuemE.tsx   — chapter eyebrow (03) on cream bg + 3 client-profile cards (residencial/comercial/investidor)
    Esteira.tsx     — chapter header (04) "Serviços" + 7 horizontal expandable rows (single-open accordion) driven by lib/services.ts; every panel standardised: tagline + descrição + "O que entregamos" + link to /servicos/[slug]
    Processo.tsx    — chapter header (05) "Como funciona" on cream bg + 3 progressive advantages
    Portfolio.tsx   — chapter header (06) on light bg + filter chips + 12-col masonry with hover overlay
    Blog.tsx        — chapter header on cream bg + featured/recent post cards driven by lib/blog.ts
    Depoimentos.tsx — chapter header (07) on cream bg + 3 testimonial cards (sand stars, italic blockquote, mono attribution)
    Faq.tsx         — chapter header (08) + 10-question accordion driven by lib/faq.ts. Answers stay mounted while collapsed — FAQPage schema requires the text in the served HTML.
    Contato.tsx     — chapter header (09) on dark bg + 4 info blocks (e-mail/WhatsApp/responsável/segmento) + Formspree form with monogram watermark
    Footer.tsx      — 4-column grid on ink bg (logo+tagline / Navegação / Serviços / Contato) + mono bottom bar
  blog/
    BlogHeader.tsx     — masthead for the blog index/article pages
    BlogIndexList.tsx  — category-grouped list of posts on the index
    PostCard.tsx       — editorial card used on the index and homepage Blog section
    PostBody.tsx       — renders a post's typed BlogBlock[] body (headings, lists, steps, callouts, pullquotes, nextStep)
    AuthorCard.tsx     — author byline block on an article
    ArticleCTA.tsx     — end-of-article call to action
    ReadingProgress.tsx — scroll-linked reading progress bar
  ui/
    WhatsApp.tsx    — floating CTA, bottom-right, env-gated
    ScrollToTop.tsx — floating back-to-top button, appears after scroll
    CookieBanner.tsx — LGPD cookie consent banner (links to /privacidade)

lib/
  fonts.ts          — Century Gothic Pro, all 4 weights
  blog.ts           — typed blog content (BlogPost / BlogBlock) + helpers (getAllPosts, getPostBySlug, getRelatedPosts, getPostWordCount). Posts authored inline here. Every post needs `publishedAt` (ISO) and `keywords` — both feed the sitemap and BlogPosting schema.
  seo.ts            — SEO single source of truth: site URL, entity @ids, Organization/Person/WebSite/WebPage/Breadcrumb builders, keyword list
  services.ts       — the 7 services: copy, slug, metaDescription, relatedPosts, faqQuestions.
                      Shared by Esteira.tsx, /servicos, /sobre, the Footer and the OfferCatalog schema.
  faq.ts            — FAQ copy + faqSchema(). Visible section and schema read from the same array, so they cannot drift.

styles/
  tokens.css        — CSS custom properties for colours, spacing, radius, easing

__tests__/          — Jest + React Testing Library specs (one per section/component)
__mocks__/          — module mocks for next/image, next/link, framer-motion, CSS/asset imports

public/assets/
  fonts/            — 4 OTF files (Regular, Bold, Italic, Bold Italic)
  logos/            — 25 PNG variants (Ativo 1–25)
  images/           — editorial interior JPGs (also used as blog covers)
  textures/         — 3 texture files
  mockups/          — 9 mockup files (not yet used in production)
```

### Key logo variants
| File | Use |
|---|---|
| `Ativo 1.png` | Full horizontal logo — for dark backgrounds (Footer) |
| `Ativo 2.png` / `Ativo 3.png` | HD monogram only — decorative use (Diferenciais, Contato, blog index, ArticleCTA) |
| `Ativo 5.png` | Compact horizontal, white text — dark backgrounds (not currently referenced in code) |
| `Ativo 9.png` | Text-only "HIGH DESIGN. ARQ.®" in sand — Navbar + BlogHeader (light backgrounds) |

---

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for OG metadata |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Phone number with country code, no symbols (e.g. `5511999990000`). WhatsApp button hidden until set. |
| `NEXT_PUBLIC_FORMSPREE_ID` | 8-character form ID from formspree.io (not the full URL). Without it, form fakes success in dev. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Full Instagram profile URL (e.g. `https://instagram.com/highdesign.arq`). Footer Instagram link hidden until set. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Full LinkedIn company URL (e.g. `https://linkedin.com/company/highdesign`). Footer LinkedIn link hidden until set. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console token (HTML-tag method, content value only). Optional — DNS verification needs no value. |

Social URLs do double duty: when set they also populate `sameAs` on the Organization and Person schema, which is how Google connects the site to those profiles. `NEXT_PUBLIC_WHATSAPP_NUMBER` likewise becomes the E.164 `telephone` in the LocalBusiness markup.

Set in Vercel dashboard for production. Locally, copy `.env.example` to `.env`.

---

## Git workflow

- Local branch: `master` → remote branch: `main`
- Push with: `git push origin HEAD:main`
- `Reference/` folder is gitignored — contains large design PDFs, never commit
- Docker, CI, and PRD files are excluded from Vercel deploy via `.vercelignore`

### CI

`.github/workflows/ci.yml` runs one `Verify` job on every PR into `main`, every push to `main`, and merge-queue entries: `npm ci` → `npm run typecheck` → `npm run test:ci` → `npm run build`, on the Node version in `.nvmrc` (20, matching the Docker dev container).

Before pushing, run the same sequence locally — a red `Verify` blocks the merge once `main` is protected:

```bash
npm run typecheck && npm run test:ci && npm run build
```

`npm run typecheck` is the broadest check: `next build` skips `__tests__/` and `__mocks__/`, `tsc --noEmit` does not.

---

## SEO conventions

The site targets brand and founder queries — "High Design Arquitetura",
"Emanoella Goulart" and variants. The strategy is entity-based: one
`Organization` and one `Person` node, given stable `@id`s in `lib/seo.ts` and
re-emitted on every route so Google merges the signals into a single entity
rather than reading each page as an unrelated listing.

Rules to keep intact when editing:

- **Never set `alternates.canonical` in `app/layout.tsx`.** Metadata is
  inherited, so a canonical there points every page at the homepage and drops
  them from the index. Each route declares its own.
- **Never change an existing `@id`** in `lib/seo.ts` once it has been indexed —
  that splits one entity into two.
- **`/sobre` is the Person's `mainEntityOfPage`.** If the route ever moves,
  update `personSchema()` with it.
- **Every new route needs**: its own canonical, an entry in `app/sitemap.ts`,
  and a `BreadcrumbList`.
- **Only the homepage emits `FAQPage`.** Service pages render relevant FAQ text
  as visible content but deliberately omit the schema — the same Q&A marked up
  on several URLs is duplicate structured data.
- **`faqQuestions` and `relatedPosts` in `lib/services.ts` are assigned
  explicitly**, never matched by substring. A fuzzy matcher put one general FAQ
  on all seven service pages; a test now enforces that no FAQ is assigned twice.
- **Every new blog post needs** `publishedAt` (ISO) and `keywords` in
  `lib/blog.ts`, or the sitemap date and `BlogPosting` schema will be wrong.
- **Schema must only assert what the page shows.** FAQ answers stay mounted
  while collapsed for exactly this reason. Do not add `Review` or
  `AggregateRating` markup while `Depoimentos.tsx` holds placeholder
  testimonials — fabricated review markup is a manual-action risk.
- **No fabricated NAP data.** The Organization node deliberately has no
  `address`; add one only when the real address exists.
- Share images come from `app/opengraph-image.tsx` (1200×630). The editorial
  photography in `public/assets/images/` is portrait and must not be used as an
  OG image.

## Known issues / decisions

- **Hot reload on Docker + Windows**: file system events (inotify) don't propagate reliably from the Windows host to the Linux container. Changes may require `docker compose restart web` to take effect.
- **`output: "standalone"`** was removed from `next.config.mjs` — Vercel manages its own output format.
- **`public/assets/mockups/` and `public/assets/textures/`** (~36 MB, one 25 MB
  PNG) are referenced by no component and are excluded from the deploy via
  `.vercelignore`. They remain in git. Referencing one from a component means
  removing its line there first.
- **`next.config.mjs`** must stay `.mjs` — Next.js 14.2.29 does not support `next.config.ts`.

---

## Pending (post-MVP)

- Add real WhatsApp number and Formspree ID to Vercel env vars
- Replace placeholder testimonials with real client quotes
- Add Instagram handle and social links to Footer
- Content review pass on mobile after first Vercel deploy
- Consider enabling Next.js polling mode to fix hot reload on Docker + Windows

### SEO follow-ups that need real data (cannot be written from the repo)

These are the remaining high-impact items. Each one is blocked on information
the codebase does not contain — none should be invented in code:

1. **Google Business Profile** for the studio, plus a real street address added
   to `organizationSchema()` as `address` and to the visible Contato section.
   This is the single biggest lever for local queries and is what makes the
   `ProfessionalService` markup eligible for a map pack.
2. **Google Search Console**: verify the domain, set
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, submit `/sitemap.xml`.
3. **Emanoella's CAU-BR registration number and CNPJ** — the footer currently
   shows the literal placeholder `CNPJ · CAU-BR · Emanoella Goulart`. Real
   values belong in the footer and in the Person node (`identifier`), and are
   a strong credibility signal for a regulated profession.
4. **A photograph of Emanoella** for `/sobre` and the `Person.image` property.
   Person entities with a real photo are far more likely to get a knowledge
   panel; the page currently uses the EG monogram.
5. **Social profiles** (Instagram, LinkedIn) — set the env vars so `sameAs`
   populates. `sameAs` is the main way Google reconciles a person across sites.
6. **Biography detail**: university, graduation year, years of practice,
   professional affiliations. These would extend `personSchema()`
   (`alumniOf`, `memberOf`) and the `/sobre` copy.
