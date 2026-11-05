# PR Evidence 02 — Architecture and State

This slice documents the typed domain models, Context providers, reducer-driven cart state, and safe localStorage persistence.

## Acceptance evidence

- Auth, Cart, Orders, and Theme state are exposed through typed providers.
- Cart updates are immutable reducer actions.
- Persisted cart, user, order, and profile data have safe fallback behavior.
