# High Design — Website

Landing page and blog for **High Design Arquitetura**, an architecture and urbanism studio specialising in residential and commercial projects at medium-to-high standard.

> _"Arquitetura que guia, do primeiro traço à obra."_

- **Live**: deployed on Vercel (tracks the `main` branch)
- **Contact**: Emanoella Goulart — contato@highdesign.arq.br

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.29 (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS custom properties (`styles/tokens.css`) |
| Animations | Framer Motion |
| Fonts | `next/font/local` (Century Gothic Pro) · `next/font/google` (JetBrains Mono) |
| Testing | Jest + React Testing Library |
| Dev runtime | Docker (`highdesign_dev`, port 3000, node:20-alpine) |

---

## Getting started

### With Docker (recommended)

The project ships with a Docker dev container that mirrors the deploy runtime.

```bash
cp .env.example .env        # fill in values as needed
docker compose up -d        # starts highdesign_dev on http://localhost:3000
```

Useful commands:

```bash
docker compose restart web              # pick up changes (see hot-reload note below)
docker compose exec web npm test        # run the test suite
docker compose exec web npm run build   # production build
docker compose down                     # stop
```

### Without Docker

Requires Node 20+.

```bash
cp .env.example .env
npm install
npm run dev                 # http://localhost:3000
```

---

## NPM scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm test` | Run the Jest test suite |
| `npm run test:ci` | Production build + Jest in CI mode |

---

## Environment variables

Copy `.env.example` to `.env` and fill in as needed. All are optional in development — features gate themselves off when their variable is unset.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for OG / SEO metadata |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Phone number with country code, no symbols (e.g. `5511999990000`). WhatsApp button hidden until set. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Form ID from formspree.io (not the full URL). Without it, the contact form fakes success in dev. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Full Instagram profile URL. Footer link hidden until set. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Full LinkedIn company URL. Footer link hidden until set. |

Set these in the Vercel dashboard for production.

---

## Project structure

```
app/
  layout.tsx          metadata, SEO, OG tags, fonts
  page.tsx            landing page (composes the sections below)
  globals.css         tokens + Tailwind + animations
  blog/               blog index and [slug] article routes
  privacidade/        privacy policy (LGPD)

components/
  sections/           landing-page sections (Hero, Sobre, Esteira, Processo, …)
  blog/               blog UI (PostCard, PostBody, ReadingProgress, …)
  ui/                 WhatsApp, ScrollToTop, CookieBanner

lib/
  fonts.ts            Century Gothic Pro (local) + JetBrains Mono
  blog.ts             typed blog content + helpers

styles/tokens.css     brand colours, spacing, radius, easing
__tests__/            Jest + RTL specs
public/assets/        fonts, logos, images, textures
```

A more detailed file map and the page section order live in [`CLAUDE.md`](./CLAUDE.md).

---

## Content

### Blog

Posts are authored inline in [`lib/blog.ts`](./lib/blog.ts) as typed `BlogPost` objects. Each post body is an array of typed `BlogBlock`s (`heading`, `paragraph`, `list`, `steps`, `callout`, `pullquote`, `nextStep`) rendered by `components/blog/PostBody.tsx`. To add a post, append a new entry to the `posts` array — routes and metadata are generated from it automatically.

### Brand identity

Colours, typography, the four brand pillars, and the taglines are documented in [`CLAUDE.md`](./CLAUDE.md). Source brand documents live in the gitignored `Reference/` folder (local only).

---

## Testing

```bash
npm test                              # or: docker compose exec web npm test
```

Specs live in `__tests__/`, one per section/component, using Jest + React Testing Library. Module mocks for `next/image`, `next/link`, Framer Motion, and CSS/asset imports are in `__mocks__/`.

---

## Deployment

Pushes to `main` deploy automatically on Vercel. Docker, test, and PRD files are excluded from the deploy bundle via `.vercelignore`. The `Reference/` design PDFs are gitignored and never committed.

---

## Notes

- **Hot reload on Docker + Windows**: inotify file events don't propagate reliably from the Windows host to the Linux container. Changes may require `docker compose restart web` to take effect.
- **`next.config.mjs`** must stay `.mjs` — Next.js 14.2.29 does not support `next.config.ts`.
- `border-radius: 0` on all brand elements; the palette is entirely warm/earthy. No fabricated statistics or claims.
