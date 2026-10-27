# 10X Shop Implementation Plan

## Goal

Deliver the CORE, FULL, and selected BONUS requirements for the 10X Shop graduation project while preserving the Precision Commerce visual language.

## Work breakdown

1. Foundation: strict TypeScript, typed API client, domain models, storage service, Tailwind v4.
2. State: AuthContext, reducer-based CartContext, OrdersContext, ThemeContext.
3. Commerce: API catalog, URL filters, product details, cart, promo, protected checkout, order creation.
4. Account: Formik/Yup login, orders/tracking/reorder, profile settings, logout and clear-local-data.
5. Quality: ErrorBoundary, loading/error/empty/retry, lazy images, responsive behavior, focus states.
6. Delivery: README, report, debug log, compatibility notes, Vercel SPA fallback, typecheck/lint/build.

## Risks and mitigations

- DummyJSON unavailable: local fallback products keep the catalog demonstrable.
- Browser refresh on a nested route: Vercel rewrite is included.
- Invalid or stale localStorage: StorageService catches JSON errors and falls back to safe defaults.
- Quantity exceeds stock: reducer clamps every quantity update.

## Definition of Done

`npm run typecheck`, `npm run lint`, and `npm run build` pass; the catalog-to-checkout flow works; protected routes redirect correctly; cart/orders/theme persist; 375px layout has no intentional horizontal overflow; and documented limitations are not presented as completed measurements.
