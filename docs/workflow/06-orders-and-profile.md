# PR Evidence 06 — Orders and Profile

This slice records persisted orders, simulated delivery tracking, reorder/invoice actions, profile settings, theme persistence, logout, and local-data reset.

## Acceptance evidence

- Orders remain available after reload and status intervals clean up on unmount.
- Reorder returns items to the cart using stock-safe quantities.
- Profile and theme changes persist locally without storing payment or password data.
