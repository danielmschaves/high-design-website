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
  layout.tsx        — metadata, SEO, OG tags, font variable on <html>
  page.tsx          — composes the landing-page sections (order: Hero → Sobre → Diferenciais → ParaQuemE → Esteira → Processo → Portfolio → Blog → Depoimentos → Contato)
  globals.css       — imports tokens, Tailwind, responsive helpers, animations
  icon.png          — favicon (HD monogram)
  blog/
    page.tsx        — blog index (lists posts via lib/blog.ts)
    [slug]/page.tsx — individual article route (generateStaticParams + generateMetadata)
  privacidade/
    page.tsx        — privacy policy page (LGPD)

components/
  sections/
    Navbar.tsx      — fixed, transparent → frosted glass on scroll, sand underline-on-hover, mobile menu. Nav links: Sobre · Por que a HD · Serviços · Portfólio · Blog. Contact reached via "Iniciar projeto" CTA (#contato) — no standalone Contato link.
    Hero.tsx        — centered single-column with eyebrow/h1/lead/CTAs and 4-cell marquee bar (Método · Técnica · Obra · Contato)
    Sobre.tsx       — chapter header (01) + framed image + 2x2 brand-pillar grid + "Por que nascemos" centered pull-quote
    Diferenciais.tsx — chapter header (02) + 8-item grid on dark bg (2-col tablet / 4-col desktop) with monogram watermark
    ParaQuemE.tsx   — chapter eyebrow (03) on cream bg + 3 client-profile cards (residencial/comercial/investidor)
    Esteira.tsx     — chapter header (04) "Serviços" + 7 horizontal expandable rows (single-open accordion); every panel standardised: tagline + descrição + "O que entregamos"
    Processo.tsx    — chapter header (05) "Como funciona" on cream bg + 3 progressive advantages
    Portfolio.tsx   — chapter header (06) on light bg + filter chips + 12-col masonry with hover overlay
    Blog.tsx        — chapter header on cream bg + featured/recent post cards driven by lib/blog.ts
    Depoimentos.tsx — chapter header (07) on cream bg + 3 testimonial cards (sand stars, italic blockquote, mono attribution)
    Contato.tsx     — chapter header (08) on dark bg + 4 info blocks (e-mail/WhatsApp/responsável/segmento) + Formspree form with monogram watermark
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
  blog.ts           — typed blog content (BlogPost / BlogBlock) + helpers (getAllPosts, getPostBySlug, getRelatedPosts). Posts authored inline here.

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

Set in Vercel dashboard for production. Locally, copy `.env.example` to `.env`.

---

## Git workflow

- Local branch: `master` → remote branch: `main`
- Push with: `git push origin HEAD:main`
- `Reference/` folder is gitignored — contains large design PDFs, never commit
- Docker and PRD files are excluded from Vercel deploy via `.vercelignore`

---

## Known issues / decisions

- **Hot reload on Docker + Windows**: file system events (inotify) don't propagate reliably from the Windows host to the Linux container. Changes may require `docker compose restart web` to take effect.
- **`output: "standalone"`** was removed from `next.config.mjs` — Vercel manages its own output format.
- **`next.config.mjs`** must stay `.mjs` — Next.js 14.2.29 does not support `next.config.ts`.

---

## Pending (post-MVP)

- Add real WhatsApp number and Formspree ID to Vercel env vars
- Replace placeholder testimonials with real client quotes
- Add Instagram handle and social links to Footer
- Content review pass on mobile after first Vercel deploy
- Consider enabling Next.js polling mode to fix hot reload on Docker + Windows
