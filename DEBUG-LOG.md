# Debug Log

## 1. API fallback

- Symptom: the catalog could be blank when DummyJSON was unavailable.
- Reproduction: disable network and open `/`.
- Tool: Network panel and the request error state.
- Root cause: the public API is an external dependency.
- Fix: typed request error handling plus local fallback products.

## 2. TypeScript strictness

- Symptom: implicit callback parameters and missing React declarations blocked the build.
- Reproduction: run `npm run typecheck`.
- Tool: TypeScript compiler.
- Root cause: missing type packages and untyped state callbacks.
- Fix: React type packages, explicit domain types, and strict compiler flags.

## 3. Cart stock overflow

- Symptom: repeated add actions could exceed inventory.
- Reproduction: add a low-stock item repeatedly.
- Tool: React state inspection.
- Root cause: quantity updates were not clamped.
- Fix: reducer clamps add and set-quantity actions to product stock.

## 4. Protected checkout

- Symptom: a guest could open checkout without a session.
- Reproduction: open `/checkout` in a fresh browser.
- Tool: Router inspection.
- Root cause: checkout rendered without an auth guard.
- Fix: `ProtectedRoute` redirects to login with a return path.

## 5. Nested route refresh

- Symptom: a production host could return a server 404 for `/products/5`.
- Reproduction: refresh a nested route directly.
- Tool: browser Network panel.
- Root cause: static hosting needs an SPA fallback.
- Fix: `vercel.json` rewrites all routes to `/index.html`.

## 6. Stale cart storage

- Symptom: the Error Boundary showed `Cannot read properties of undefined (reading 'reduce')` on startup.
- Reproduction: keep an older or malformed `shop_cart` value in localStorage and reload the app.
- Tool: browser error title and the React stack location in CartContext.
- Root cause: persisted storage was trusted without validating that `items` was an array.
- Fix: CartContext now normalizes persisted data and safely falls back to an empty cart.
