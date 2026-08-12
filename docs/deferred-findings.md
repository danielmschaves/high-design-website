# Deferred findings — contrast and homepage LCP

Two issues surfaced during the SEO audit. Both are real and worth fixing, but
neither belongs in that pull request: the first is a **brand decision**, not an
engineering one, and the second is a **refactor of most of
`components/sections/`**. They are written up here so the work can be picked up
without re-deriving the measurements.

Everything below was measured with Lighthouse against a production build
(`npm run build && npx next start`), driving headless Chromium. Absolute
timings come from a throttled container and will be better on Vercel's CDN —
treat them as relative, and re-measure before and after any change.

---

## Finding 1 — Colour contrast fails WCAG AA

### The problem

`--color-brand-accent` (Sand `#ba9e84`) is the site's signature accent. It is
used for every mono eyebrow, kicker, chapter number and caption — small
uppercase text at 10–11px. Against the warm-white backgrounds it lands at
roughly **2.3:1**, where WCAG AA requires **4.5:1** for normal-size text.

Measured ratios:

| Foreground | Background | Ratio | AA (4.5:1) |
|---|---|---|---|
| `#ba9e84` accent | `#f5f2ee` stone-50 | **2.26:1** | ✗ |
| `#ba9e84` accent | `#faf7f2` paper | **2.36:1** | ✗ |
| `#ba9e84` accent | `#e8e1d7` cream | **1.95:1** | ✗ |
| `#cec6bc` stone-300 | `#f5f2ee` stone-50 | **1.51:1** | ✗ |
| `#a59495` (Depoimentos kicker) | `#e8e1d7` cream | **2.23:1** | ✗ |
| `rgba(245,242,238,0.4)` → `#726e6b` (footer bottom bar) | `#1a1614` ink | **3.56:1** | ✗ |
| `#9b8370` (cookie banner link) | `#3d3035` dark | **3.51:1** | ✗ |

This is the only thing keeping the Lighthouse accessibility score off 100 (it
sits at 97 after the heading-order fixes).

### Why it was not fixed in the SEO PR

`CLAUDE.md` names the palette as brand source-of-truth, taken from
`Reference/Identidade da Empresa.pdf`. Darkening `--color-brand-accent`
globally would change the brand's appearance on every page — that is the
owner's call, not a drive-by fix.

### Recommended approach

**Do not change `--color-brand-accent`.** Add a second token used only for
small text, and leave the existing one for rules, borders, underlines,
watermarks and large display type, where the low contrast is decorative and
WCAG does not apply the same threshold.

```css
/* styles/tokens.css */
--color-brand-accent:      #ba9e84;  /* unchanged — rules, borders, decoration */
--color-brand-accent-text: #716051;  /* small text on light backgrounds */
```

`#716051` is the same hue and saturation as Sand, darkened ~39%. Measured:
**5.39:1** on stone-50, **5.62:1** on paper, **4.63:1** on cream — clears AA on
all three surfaces the token is used against.

For the two dark-background cases, lighten instead:

| Element | Current | Proposed | Ratio |
|---|---|---|---|
| Footer bottom bar | `rgba(245,242,238,0.4)` | `#8a8480` | 4.87:1 |
| Cookie banner link | `#9b8370` | `#c2a98f` | 5.60:1 |

The Esteira row numbers (`text-stone-300` at 1.51:1) should move to
`text-stone-500`, and the Depoimentos kicker likewise.

### Where the change lands

`text-brand-accent` appears on small text in roughly these places — swap to a
`text-brand-accent-text` utility (add it to `tailwind.config.ts` alongside the
existing `brand-accent`):

- `components/sections/` — `Hero.tsx` (marquee labels), `Sobre.tsx` (pillar
  codes), `Diferenciais.tsx` (item numbers), `ParaQuemE.tsx`, `Esteira.tsx`
  (panel labels + row numbers), `Processo.tsx`, `Portfolio.tsx`, `Blog.tsx`,
  `Depoimentos.tsx`, `Faq.tsx` (question numbers), `Contato.tsx` (form
  labels), `Footer.tsx` (column headings, bottom bar)
- `components/blog/` — `PostCard.tsx`, `PostBody.tsx`, `AuthorCard.tsx`,
  `ArticleCTA.tsx`, `BlogIndexList.tsx`
- `app/sobre/page.tsx`, `app/servicos/page.tsx`, `app/servicos/[slug]/page.tsx`
- `app/globals.css` — `.hd-chapter .num`, `.hd-eyebrow`, `.hd-code`

Keep `--color-brand-accent` on: the 44px hairline rules, `border-brand-accent`
underlines, the monogram watermarks, and `<em>` display text inside `h2`s.

### How to verify

```bash
npm run build && npx next start -p 3113 &
npx lighthouse http://localhost:3113/ --only-categories=accessibility \
  --chrome-flags="--headless --no-sandbox" --view
```

Target: accessibility 100, zero `color-contrast` items. Then eyeball the
homepage and `/servicos` — the eyebrows will read noticeably darker, which is
the intended trade.

---

## Finding 2 — Homepage LCP is 3.2 s

### The problem

| Metric | Homepage | A service page | Target |
|---|---|---|---|
| Performance | 82 | 96 | — |
| LCP | **3.2 s** | 2.9 s | ≤ 2.5 s |
| Total blocking time | **430 ms** | 60 ms | ≤ 200 ms |
| First Load JS | 166 kB | 107 kB | — |

Main-thread breakdown on the homepage:

| Category | Time |
|---|---|
| **Style & Layout** | **1065 ms** |
| Other | 811 ms |
| Script evaluation | 673 ms |
| Parse HTML & CSS | 87 ms |

Style & Layout costing more than script evaluation is the tell. This is not a
payload problem — CLS is already 0 and the images are now AVIF/WebP.

### Root cause

Every one of the eleven homepage sections is a client component wrapping its
content in Framer Motion, each with its own `whileInView` viewport observer and
per-child `staggerChildren` variants. Hydrating all of them, then running
layout for every staggered child, is what occupies the main thread while LCP is
waiting.

The service pages are the control: two client components, same design system,
same fonts — **TBT 60 ms and performance 96**.

Seven sections are client components that use Framer Motion purely for entrance
animation and contain **no interactive state at all**:

| Component | `use client` | Framer Motion | Interactive hooks |
|---|---|---|---|
| `Hero.tsx` | yes | yes | **0** |
| `Sobre.tsx` | yes | yes | **0** |
| `Diferenciais.tsx` | yes | yes | **0** |
| `ParaQuemE.tsx` | yes | yes | **0** |
| `Processo.tsx` | yes | yes | **0** |
| `Blog.tsx` | yes | yes | **0** |
| `Depoimentos.tsx` | yes | yes | **0** |
| `Footer.tsx` | yes | **no** | **0** |

`Footer.tsx` is the free win — it is a client component for no reason at all
and can drop `"use client"` today.

These must stay client components: `Navbar` (scroll state, mobile menu),
`Esteira` (accordion), `Portfolio` (filters), `Faq` (accordion), `Contato`
(form), `CookieBanner`, `ScrollToTop`, `WhatsApp`.

### Recommended approach

Replace per-section Framer Motion with **one small shared client wrapper** that
owns a single `IntersectionObserver` and toggles a CSS class, then let CSS do
the animation:

```tsx
// components/ui/Reveal.tsx  ("use client")
// One observer instance, shared. Children stay server-rendered.
<Reveal delay={0.1}>{children}</Reveal>
```

The seven sections above then become server components that render static HTML
and import `Reveal` only around the elements that animate. Framer Motion stops
being in the homepage bundle entirely except for the genuinely interactive
sections.

Expected: First Load JS closer to the service pages' 107 kB, TBT well under
200 ms, LCP under 2.5 s.

**Alternatives considered.** CSS `animation-timeline: view()` needs no JS at
all, but Safari and Firefox support is still incomplete — it would need a
`@supports` fallback, so it is not simpler in practice. Lazy-loading Framer
Motion via `LazyMotion` + `domAnimation` is a smaller change but keeps every
section a client component, so hydration cost stays.

### Watch out for

- `Hero.tsx` animates on mount (`initial`/`animate`), not on scroll — it is
  above the fold and should render its final state immediately with no
  animation gate, which also helps LCP directly.
- The staggered children in `Sobre.tsx`, `Diferenciais.tsx` and `Processo.tsx`
  use `staggerChildren`; reproduce that with a CSS `animation-delay` derived
  from the item index.
- `__tests__/` currently mocks `framer-motion` via `__mocks__/framer-motion.tsx`
  (a Proxy that resolves any tag). Sections that stop importing it will no
  longer need the mock, but the mock must stay for the interactive ones.
- Re-run the full suite: the section tests assert rendered content, so they
  should pass unchanged if the markup is preserved.

### How to verify

```bash
npm run build   # compare First Load JS for "/" against the 166 kB baseline
npx next start -p 3113 &
npx lighthouse http://localhost:3113/ --only-categories=performance \
  --chrome-flags="--headless --no-sandbox" --view
```

Check that Style & Layout drops well below 1065 ms in the main-thread
breakdown — that is the number that actually moves LCP here.

---

## Also noted, lower priority

**Fonts ship as OTF.** `lib/fonts.ts` loads four Century Gothic Pro `.otf`
files from `public/assets/fonts/` (~95 kB transferred). `next/font/local`
serves whatever it is given — it does not convert. Converting to WOFF2
(`fonttools`, `pyftsubset`, or `woff2_compress`) typically saves 30–40% and
decodes faster. Subsetting to Latin would save more again. Low risk, modest
win, and it does touch binary brand assets — worth doing alongside Finding 2
rather than on its own.
