# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Dewa Kreatif** (an Indonesian graphic design / web / custom app agency). Built on the Cruip "Simple" Next.js template (see `CHANGELOG.md` for template history; `README.md` is unmodified create-next-app boilerplate and partly wrong about paths). All user-facing copy is in **Bahasa Indonesia** (`<html lang="id">`); keep new copy in Indonesian.

There is no backend, database, auth, or CMS — it is a static marketing site whose conversion path is WhatsApp.

## Commands

```bash
npm ci          # install exactly from package-lock.json — run after pulling (lockfile pins next 15.0.5, a security patch)
npm run dev     # dev server (Turbopack) at http://localhost:3000
npm run build   # production build — also runs type checking
npm run start   # serve the production build
npx tsc --noEmit  # standalone type check (not a package.json script)
```

- `npm run lint` runs `next lint`, but ESLint is **not installed** and no ESLint config is committed — it will prompt to set one up. Don't treat it as a working check.
- There is no test suite.
- `postcss.config.js` uses `postcss-import`, which is not declared in `package.json` (it only arrives transitively).

## Stack

Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS 3 (`@tailwindcss/forms`, `@tailwindcss/typography`), Headless UI, AOS scroll animations, MDX via `next-mdx-remote` + `rehype-pretty-code`/`shiki`. `next.config.js` also wraps `@next/mdx` with `.mdx` page extensions, but no `.mdx` pages exist — MDX is rendered via `next-mdx-remote`. Vercel Analytics, Speed Insights, and Google Analytics (gtag, measurement ID hard-coded, no env vars) are wired in `app/layout.tsx`. Import alias: `@/*` → repo root.

## Routes: real vs template

- **Dewa Kreatif content**: `/` (`app/(default)/page.tsx`), `/service`, `/produk`, `/about`, `/portofolio`.
- **Untouched template leftovers** (English copy, "Simple" branding, still publicly reachable): `/pricing`, `/customers`, `/support`, `/blog`, `/documentation`, `/signin`, `/signup`, `/reset-password` (UI-only forms, no auth), `/api/hello`. Don't polish or translate these unless asked — confirm with the user whether they should be kept.
- Unused template components (safe to ignore): `components/about.tsx`, `dropdown.tsx`, `features-home.tsx`, `features-planet.tsx`, `large-testimonial.tsx`, `utils/useMasonry.tsx`.

## Architecture

- **Route groups**: `app/(default)/` holds the public pages and its `layout.tsx` (a client component) renders `Header`/`Footer` and initializes AOS. `app/(auth)/` holds template sign-in/up/reset pages with a separate layout.
- **Page pattern**: each page is a server component exporting `metadata` (title format `"<Page> - Dewa Kreatif"` or `"... | Dewa Kreatif"`, with a real Indonesian `description` — not the template's `"Page description"`) and composing sections. Page-specific sections live beside the page (e.g. `app/(default)/produk/hero.tsx`); reusable sections live in `components/`. Interactive components opt in with `"use client"` and use Headless UI; scroll animations use `data-aos` attributes.
- **Content is hard-coded in components**, not a CMS. Edit these arrays/JSX to change content:
  - `components/app-list.tsx` — services (Website / Aplikasi / Desain Grafis)
  - `components/product-list.tsx` — products
  - `components/portofolio-categories.tsx` — portfolio tabs (static image imports from `public/images`)
  - `components/testimonials-carousel.tsx` — home-page portfolio carousel with client site links (**duplicates** portfolio data; keep both in sync)
  - `components/business-categories.tsx`, `components/hero-home.tsx` — home page sections
  - Many card/footer links are still `"#0"` placeholders.
- **MDX content**: `content/blog/*.mdx` and `content/docs/*.mdx` are read from disk by `components/mdx/utils.ts` (`getBlogPosts`, `getDocPages`) using a simple hand-rolled frontmatter parser (one `key: value` per line; fields: `title`, `publishedAt`, `updatedAt`, `summary`, `author`, `authorImg`, `kind`). Every `.mdx` file **must** have a frontmatter block or the parser throws. The slug is the filename. Rendered by `CustomMDX` in `components/mdx/mdx.tsx`. Blog/docs content is still template placeholder.
- **Navigation is duplicated**: desktop links are in `components/ui/header.tsx` and mobile links in `components/ui/mobile-menu.tsx` — update both when adding a page (the mobile menu currently lacks `/produk`). Footer links are in `components/ui/footer.tsx`.
- **CTAs** point to WhatsApp `https://wa.me/6281938960028`, hard-coded in 7 places: `components/ui/header.tsx`, `components/ui/footer.tsx`, `components/cta.tsx`, `components/hero-home.tsx`, and the `buttonLink` prop in `app/(default)/{service,produk,portofolio}/page.tsx`. Change all of them together. `components/cta-alternative.tsx` takes `heading`/`buttonText`/`buttonLink` props; `components/cta.tsx` is the fixed home-page CTA.
- **Styling**: `app/css/style.css` imports Tailwind layers plus `app/css/additional-styles/utility-patterns.css` and `theme.css` (`custom-fonts.css` is empty and not imported). Use the `btn`/`btn-sm` classes for buttons. Brand colors are custom Tailwind tokens `kuning` (#F3EC1A) and `kuninggelap` (#B7B218) in `tailwind.config.js`.

## Adding a page (reference: commit `d6cbb6a`, the Produk page)

1. `app/(default)/<route>/page.tsx` with `metadata` (title + Indonesian description).
2. `app/(default)/<route>/hero.tsx` beside it (copy `produk/hero.tsx`: `PageIllustration` + centered heading).
3. A data/list component in `components/` (copy `product-list.tsx` + `AppCard`).
4. End with `<Cta>` from `components/cta-alternative.tsx` linking to WhatsApp.
5. Add the link to **both** `components/ui/header.tsx` and `components/ui/mobile-menu.tsx` (and `footer.tsx` if relevant).
6. Verify with `npm run build`.
