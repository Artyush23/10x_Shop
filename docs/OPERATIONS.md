# Delivery and operations notes

- Product API failures are shown as an actionable catalog error and the UI keeps a local fallback for the first screen.
- Cart, user, order, profile, and theme records are scoped to the browser's localStorage and never contain card numbers.
- Order status is derived from `placedAt` and recalculated every 30 seconds; the interval is cleaned up when the page unmounts.
- Invoice download is intentionally a local text receipt because payment processing and PDF generation are out of scope.
- Before deployment, run the scripts in README and verify the SPA rewrite on a direct nested route.
