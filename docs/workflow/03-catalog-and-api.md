# PR Evidence 03 — Catalog and API

This slice records the typed DummyJSON client, pagination, URL-driven catalog filters, debounce, abort handling, and local fallback behavior.

## Acceptance evidence

- Catalog requests use bounded `limit` and `skip` values.
- Search and filter state survives refresh through URL parameters.
- Loading, empty, retry, timeout, and fallback states are explicit.
