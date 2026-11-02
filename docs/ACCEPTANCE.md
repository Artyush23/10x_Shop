# Manual acceptance checklist

- Catalog loads, shows loading/error/empty states, and supports search, category, sort, URL state, and pagination.
- Product details show a gallery, stock-aware quantity controls, reviews, related products, and add-to-cart.
- Cart supports immutable quantity changes, remove, stock limits, totals, shipping, and the `10X10` promo code.
- Guest checkout redirects to login; valid login returns to checkout.
- Checkout blocks invalid required fields, creates a local order, clears the cart, and announces confirmation.
- Orders persist, progress through simulated statuses, show details, and support reorder.
- Profile saves locally, toggles theme, clears local data, and logs out.
- 375px viewport has no intentional horizontal scroll; all form controls have labels and visible focus.

## Automated evidence (2026-11-02)

- `npm run typecheck` — passed.
- `npm run lint` — passed with the repository quality scanner and TypeScript check.
- `npm run test` — passed 3 smoke tests for entrypoint safety, commerce safeguards, and scripts.
- `npm run build` — passed; Vite emitted separate catalog, commerce, and API chunks.
- Vercel, Lighthouse, and cross-browser evidence remain intentionally pending until the final deployment step.
