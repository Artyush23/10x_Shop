# PR Evidence 01 — Setup and Tailwind

This delivery slice records the project foundation: strict TypeScript settings, Vite integration, Tailwind CSS v4, design tokens, and the Vercel SPA rewrite.

## Acceptance evidence

- `npm run typecheck` passes with strict compiler options.
- Tailwind is loaded through `@tailwindcss/vite` and `@import "tailwindcss"`.
- `vercel.json` rewrites nested SPA routes to `index.html`.
