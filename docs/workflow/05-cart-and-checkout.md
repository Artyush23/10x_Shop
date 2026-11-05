# PR Evidence 05 — Cart and Checkout

This slice records stock-aware cart operations, the `10X10` promotion, protected checkout, validation, confirmation, and cart clearing after order creation.

## Acceptance evidence

- Quantity never exceeds stock and totals are derived from the Cart model.
- Invalid promo codes show feedback; `10X10` persists and applies the configured discount.
- Guest checkout redirects to login and successful checkout creates an order without storing payment data.
