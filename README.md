# Kompleks Penyayang BAKTI

The public-facing website for Lembaga Pelawat Kompleks Penyayang BAKTI. It is a
single-page SvelteKit site containing the organisation's mission, board members,
activities, contact details, and donation options.

## Stack

- Svelte 5 with SvelteKit 2
- Vite 8
- Tailwind CSS 4 through the official Vite plugin
- TypeScript, ESLint, and Prettier

## Requirements

- Node.js 20.19 or newer
- pnpm 11

Install dependencies with:

```sh
pnpm install
```

## Commands

```sh
pnpm dev       # start the local development server
pnpm check     # run Svelte and TypeScript diagnostics
pnpm lint      # check formatting and lint the project
pnpm build     # create a production build
pnpm preview   # preview the production build locally
```

## Project structure

- `src/routes/+page.svelte` — the complete landing page and its content data
- `src/routes/+layout.svelte` — global font, stylesheet, document metadata, and layout shell
- `src/routes/+layout.ts` — prerenders the site for static hosting
- `src/lib/components/logo.svelte` — site wordmark
- `src/app.css` — Tailwind import and CSS-first theme tokens
- `static/images` — source images and payment logos served at `/images/*`

The site uses `@sveltejs/adapter-static`; `pnpm build` writes the deployable
static output to `build/`.
