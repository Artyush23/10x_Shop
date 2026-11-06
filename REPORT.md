# 10X Shop Delivery Report

## Delivered

- React + TypeScript SPA with strict typecheck.
- Tailwind CSS v4 plugin and custom `@theme` tokens.
- Typed DummyJSON client with abortable pagination/search requests.
- Auth, cart, orders, theme contexts and localStorage persistence.
- Product details, reviews, stock controls, promo code, checkout validation, confirmation, order tracking, reorder, profile settings, 404, and error boundary.
- Vercel SPA rewrite and project documentation.

## Verification

GitHub repository: https://github.com/Artyush23/10x_Shop

Live deployment: https://10x-shop.vercel.app

Deployment verification returned HTTP 200 for `/`, `/products/5`, `/cart`, `/login`, and `/orders`. The Vercel SPA rewrite therefore serves the application shell on direct nested-route requests.

Final local verification passed on `main` before synchronization:

- `npm run typecheck`
- `npm run lint`
- `npm run test` — 3 smoke tests passed
- `npm run build` — Vite production build passed with route chunks

The repository contains `main`, six original feature/documentation branches, and eight workflow evidence branches. Lighthouse and browser-matrix measurements belong in `docs/lighthouse/` and `COMPATIBILITY.md`; no values are fabricated here.

Repository counts verified through GitHub on 2026-11-05: 15 local branches, 44 reachable commits, 20 closed issues, and 8 merged pull requests. GitHub default branch is `main`.

### Live Lighthouse evidence

Collected from `https://10x-shop.vercel.app` with Lighthouse 12.8.2:

| Profile | Performance | Accessibility | Best Practices | SEO | CLS |
|---|---:|---:|---:|---:|---:|
| Desktop | 95 | 90 | 100 | 92 | 0.0000 |
| Mobile | 84 | 90 | 96 | 92 | 0.0000 |

Raw reports are stored in `docs/lighthouse/live-desktop.json` and `docs/lighthouse/live-mobile.json`; the live screenshot is `docs/lighthouse/after.png`.

Edge was verified with Playwright screenshot capture stored in `docs/lighthouse/edge-home.png`. Firefox runtime launch failed with Windows `spawn UNKNOWN` and side-by-side configuration errors, so Firefox remains explicitly pending rather than being inferred.

### Demo video evidence

A silent 1920×1080 MP4 demo was generated at `10x-shop-demo.mp4` (approximately 2:33, no audio stream). It covers the catalog, product details, cart/promo, login, protected checkout, order tracking, profile settings, and direct product-route refresh with deterministic demo data. The file is intentionally ignored by Git because of binary size; it must be uploaded to an external host before submission and its real URL added here.

## Limitations

Authentication and payment are intentionally local simulations. DummyJSON is a public demo API and can be unavailable or rate-limited; fallback products preserve the basic catalog experience.

## AI usage

AI assisted with scaffolding, refactoring, typed API/context design, and documentation. The resulting code was checked with strict TypeScript and a production build. Runtime and performance measurements must be collected against the final deployed URL rather than inferred from source code.
