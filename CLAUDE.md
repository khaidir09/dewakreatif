# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Dewa Kreatif** (an Indonesian graphic design / web / custom app agency). Built on the Cruip "Simple" Next.js template (see `CHANGELOG.md` for template history; `README.md` is unmodified create-next-app boilerplate and partly wrong about paths). All user-facing copy is in **Bahasa Indonesia** (`<html lang="id">`); keep new copy in Indonesian.

Portfolio, products, and services are managed in **Payload CMS 3** (embedded in this Next.js app, SQLite database, single admin at `/admin`). Everything else is still hard-coded. The conversion path is WhatsApp.

## Setup

1. `npm ci`
2. Copy `.env.example` to `.env.local` and set `PAYLOAD_SECRET` (long random string) and `DATABASE_URI` (default `file:./dewakreatif.db`).
3. `npm run seed` — fills an empty database with the original site content (copies images from `public/images` into `media/`). Skips collections that already have data.
4. `npm run dev`, then open `/admin` and create the (only) admin account.

## Commands

```bash
npm run dev     # dev server (Turbopack) at http://localhost:3000; DB schema is auto-pushed in dev
npm run build   # production build — also runs type checking; needs .env.local (reads the DB to prerender pages)
npm run start   # serve the production build; pending migrations run automatically on startup
npx tsc --noEmit  # standalone type check (not a package.json script); stale .next/types can cause false errors
npm run seed                  # payload run scripts/seed.ts
npm run generate:types        # regenerate payload-types.ts after changing a collection
npm run generate:importmap    # regenerate app/(payload)/admin/importMap.js after adding custom admin components
npm run payload -- migrate:create <name>   # create a migration after changing a collection (required for production)
```

- The package is ESM (`"type": "module"`); CommonJS configs are `tailwind.config.cjs` / `postcss.config.cjs`.
- `next`, `@next/mdx`, and all `payload`/`@payloadcms/*` versions are **pinned exactly**: Payload 3.90.2 only supports Next `>=15.4.11 <15.5` or `>=16.3.3 <17`, and all Payload packages must share one version. Upgrade them together. Stay on Next 16: every 15.4.x release has critical unpatched advisories (RCE in the image optimizer), and no Payload version supports the patched 15.5.x line.
- `next dev` (Next 16) writes `AGENTS.md` with Next's agent rules; it is regenerated on every dev run.

- `npm run lint` is **broken**: it calls `next lint`, which Next 16 removed, and ESLint is not installed. Don't treat it as a working check.
- There is no test suite.
- `postcss.config.cjs` uses `postcss-import`, which is not declared in `package.json` (it only arrives transitively).

## Stack

Next.js 16 App Router, React 19.2, Payload CMS 3 (SQLite), TypeScript (strict), Tailwind CSS 3 (`@tailwindcss/forms`, `@tailwindcss/typography`), Headless UI, AOS scroll animations, MDX via `next-mdx-remote` + `rehype-pretty-code`/`shiki`. `next.config.mjs` also wraps `@next/mdx` with `.mdx` page extensions, but no `.mdx` pages exist — MDX is rendered via `next-mdx-remote`. Vercel Analytics, Speed Insights, and Google Analytics (gtag, measurement ID hard-coded, no env vars) are wired in `app/(frontend)/layout.tsx`. Import alias: `@/*` → repo root.

## Routes: real vs template

- **Dewa Kreatif content**: `/` (`app/(frontend)/(default)/page.tsx`), `/service`, `/produk`, `/about`, `/portofolio`. Admin: `/admin`.
- **Untouched template leftovers** (English copy, "Simple" branding, still publicly reachable): `/pricing`, `/customers`, `/support`, `/blog`, `/documentation`, `/signin`, `/signup`, `/reset-password` (UI-only forms, no auth), `/api/hello`. Don't polish or translate these unless asked — confirm with the user whether they should be kept.
- Unused template components (safe to ignore): `components/about.tsx`, `dropdown.tsx`, `features-home.tsx`, `features-planet.tsx`, `large-testimonial.tsx`, `utils/useMasonry.tsx`.

## CMS (Payload)

- `payload.config.ts` — SQLite adapter, Indonesian admin UI, `prodMigrations` from `migrations/`.
- `collections/` — `Portfolio`, `Products`, `Services`, `Media` (uploads stored in `media/`, gitignored, served at `/api/media/file/<name>`), `Users` (auth; `create`/`delete` are denied, so only the first-registered admin can exist). `collections/shared.ts` holds the shared category options (`website` / `aplikasi` / `desain-grafis`), the `order` field, and the revalidation hooks.
- `lib/content.ts` — server-only read helpers (`getPortfolio`, `getProducts`, `getServices`) using the Payload Local API, plus `WHATSAPP_URL`. Use these from server components; pass plain data as props to client components (see `portofolio/page.tsx` → `portofolio-categories.tsx`).
- Public pages are statically prerendered. Each collection's `afterChange`/`afterDelete` hook calls `revalidatePath` for the pages that show it — **when a new page displays CMS data, add its path to that collection's `revalidatePaths([...])`**. Scripts outside Next (seed) must pass `context: { disableRevalidate: true }`.
- Changing a collection: edit `collections/*`, run `npm run generate:types`, then `npm run payload -- migrate:create <name>` and commit the migration.
- Deployment needs a server with a persistent disk (SQLite file + `media/`). On Vercel's ephemeral filesystem, uploads and DB writes would be lost — that would need Postgres + a storage adapter (e.g. Vercel Blob).

## Architecture

- **Route groups**: there is no root `app/layout.tsx`. `app/(frontend)/layout.tsx` is the site's root layout (`<html>`, fonts, analytics) and `app/(payload)/` is Payload's admin (`/admin`) and REST API (`/api/*`) with its own `<html>` — don't edit the generated Payload files except `importMap.js` via the CLI. Inside `(frontend)`: `(default)/` holds the public pages and its `layout.tsx` (a client component) renders `Header`/`Footer` and initializes AOS; `(auth)/` holds template sign-in/up/reset pages with a separate layout.
- **Page pattern**: each page is a server component exporting `metadata` (title format `"<Page> - Dewa Kreatif"` or `"... | Dewa Kreatif"`, with a real Indonesian `description` — not the template's `"Page description"`) and composing sections. Page-specific sections live beside the page (e.g. `app/(frontend)/(default)/produk/hero.tsx`); reusable sections live in `components/`. Interactive components opt in with `"use client"` and use Headless UI; scroll animations use `data-aos` attributes.
- **Content sources**:
  - From the CMS: `components/app-list.tsx` (services, one section per category), `components/product-list.tsx` (products), `components/portofolio-categories.tsx` (portfolio tabs, client component fed by the page), `components/testimonials-carousel.tsx` (home carousel = portfolio items with "Tampilkan di beranda" checked). Product/service cards with an empty `link` fall back to WhatsApp.
  - Still hard-coded JSX: `components/business-categories.tsx`, `components/hero-home.tsx`, page heroes, about page, footer. Several footer links are still `"#0"` placeholders.
- **MDX content**: `content/blog/*.mdx` and `content/docs/*.mdx` are read from disk by `components/mdx/utils.ts` (`getBlogPosts`, `getDocPages`) using a simple hand-rolled frontmatter parser (one `key: value` per line; fields: `title`, `publishedAt`, `updatedAt`, `summary`, `author`, `authorImg`, `kind`). Every `.mdx` file **must** have a frontmatter block or the parser throws. The slug is the filename. Rendered by `CustomMDX` in `components/mdx/mdx.tsx`. Blog/docs content is still template placeholder.
- **Navigation is duplicated**: desktop links are in `components/ui/header.tsx` and mobile links in `components/ui/mobile-menu.tsx` — update both when adding a page (the mobile menu currently lacks `/produk`). Footer links are in `components/ui/footer.tsx`.
- **CTAs** point to WhatsApp `https://wa.me/6281938960028`, hard-coded in 7 places: `components/ui/header.tsx`, `components/ui/footer.tsx`, `components/cta.tsx`, `components/hero-home.tsx`, and the `buttonLink` prop in `app/(frontend)/(default)/{service,produk,portofolio}/page.tsx`. Change all of them together. `components/cta-alternative.tsx` takes `heading`/`buttonText`/`buttonLink` props; `components/cta.tsx` is the fixed home-page CTA.
- **Styling**: `app/css/style.css` (imported by `app/(frontend)/layout.tsx`) imports Tailwind layers plus `app/css/additional-styles/utility-patterns.css` and `theme.css` (`custom-fonts.css` is empty and not imported). Use the `btn`/`btn-sm` classes for buttons. Brand colors are custom Tailwind tokens `kuning` (#F3EC1A) and `kuninggelap` (#B7B218) in `tailwind.config.cjs`.

## Adding a page (reference: commit `d6cbb6a`, the Produk page)

1. `app/(frontend)/(default)/<route>/page.tsx` with `metadata` (title + Indonesian description).
2. `app/(frontend)/(default)/<route>/hero.tsx` beside it (copy `produk/hero.tsx`: `PageIllustration` + centered heading).
3. A data/list component in `components/` (copy `product-list.tsx` + `AppCard`). If the data should be editable, add a collection (see "CMS") and a getter in `lib/content.ts`, and register the route in the collection's `revalidatePaths`.
4. End with `<Cta>` from `components/cta-alternative.tsx` linking to WhatsApp.
5. Add the link to **both** `components/ui/header.tsx` and `components/ui/mobile-menu.tsx` (and `footer.tsx` if relevant).
6. Verify with `npm run build`.
