# Kompleks Penyayang BAKTI

The public-facing website for Lembaga Pelawat Kompleks Penyayang BAKTI. It is a
single-page Astro site containing the organisation's mission, board members,
activities, contact details, and donation options.

## Stack

- Astro 7 with static output
- Vite 8
- Tailwind CSS 4 through the official Vite plugin
- TypeScript, ESLint, and Prettier

## Requirements

- Node.js 22.12 or newer
- pnpm 11

Install dependencies with:

```sh
pnpm install
```

## Commands

```sh
pnpm dev       # start the local development server
pnpm check     # run Astro and TypeScript diagnostics
pnpm lint      # check formatting and lint the project
pnpm build     # create a production build
pnpm preview   # preview the production build locally
```

## Project structure

- `src/pages/index.astro` — the complete landing page and its content data
- `src/layouts/Layout.astro` — document metadata, global font, stylesheet, and navigation
- `src/components/Logo.astro` — site wordmark
- `src/app.css` — Tailwind import and CSS-first theme tokens
- `public/images` — source images and payment logos served at `/images/*`

The site uses Astro's static output; `pnpm build` writes the deployable output
to `dist/`.
