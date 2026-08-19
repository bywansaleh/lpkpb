# Repository instructions

## Product and content

- This repository is the public, single-page website for Lembaga Pelawat Kompleks Penyayang BAKTI. Keep public-facing copy in Bahasa Malaysia unless the user explicitly requests another language.
- Read `PRODUCT.md` for the confirmed product purpose, brand commitments, and factual constraints before changing public content.
- `src/pages/index.astro` is the source of truth for the landing-page copy and data: mission/history, activities, board members, donation instructions, contact details, and the ToyyibPay destination. Treat names, phone numbers, bank details, URLs, and organisation claims as factual; do not invent or silently rewrite them.
- `src/layouts/Layout.astro` owns document metadata, `lang="ms"`, favicon links, the global font import, and the top navigation. `src/components/Logo.astro` owns the wordmark. Preserve these responsibilities when adding sections or components.

## Architecture and styling

- This is an Astro 7 site with `output: 'static'`. It has no server runtime, API routes, authentication, database, or client-side application state. Keep new features static unless the user explicitly requests an architectural change.
- `src/app.css` is the global Tailwind CSS 4 entry point. Theme tokens, the `container` utility, and the Plus Jakarta Sans font are defined there; prefer existing tokens and utility classes over one-off global CSS.
- Put browser-served assets in `public/` and reference them with root-absolute URLs such as `/images/example.jpg`. Keep organisation photography, favicons, logos, and payment marks in their existing asset folders.
- Keep image alt text meaningful for content images and preserve the existing external-link safety attributes (`target="_blank"` with `rel="noopener noreferrer"`) for donation links.

## Tooling and deployment

- Use Node.js `>=22.12.0` and pnpm `11.22.0`; use pnpm commands and keep `pnpm-lock.yaml` authoritative. `.npmrc` enables strict engine checks.
- Astro uses its default static output directory `dist/`. Keep `vercel.json` set to `"outputDirectory": "dist"` so Vercel and local builds target the same artifact.
- The deployable output is static HTML/assets in `dist/`; it is intentionally ignored by Git. Do not commit generated build output.
- TypeScript and Astro diagnostics are strict. Before handing off code changes, run `pnpm check`, `pnpm lint`, and `pnpm build`; a successful build must report the output directory as `dist/`. Use `pnpm preview` when a production-build smoke test is useful.
- Formatting is controlled by Prettier with the Astro and Tailwind plugins (2-space indentation, single quotes, semicolons, 80-column print width). Use `pnpm format` for broad formatting changes rather than introducing local style exceptions.

## Git workflow

- Never create, switch, or checkout a Git branch for work in this repository.
- Stay on the current branch unless the user explicitly asks for branching.
- Inspect `git status` before editing and preserve unrelated user changes. Do not use destructive reset or checkout commands to clean the worktree.
