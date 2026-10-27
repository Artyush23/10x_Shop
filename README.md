# 10X Shop

10X Shop is a precision-commerce SPA built with React, TypeScript, Tailwind CSS v4, and the DummyJSON products API. Authentication, checkout, cart persistence, orders, and theme preferences are local simulations designed for the graduation-project flow.

## Features

- Catalog with API pagination, URL-driven search/category/sort state, debounce, abortable requests, loading/error/empty states, and retry.
- Product details with gallery, reviews, stock-aware quantity controls, and add-to-cart.
- Persistent cart with immutable reducer updates, stock limits, `10X10` promo code, shipping and totals.
- Controlled checkout with validation, local order creation, confirmation, and cart clearing.
- Formik + Yup login validation, protected routes, logout, orders, order tracking, reorder, and profile settings.
- Light/dark theme persistence, error boundary, semantic labels, image dimensions, lazy loading, and mobile navigation.

## Tech Stack

React 19, TypeScript strict mode, Vite, Tailwind CSS v4, React Router, Formik, Yup, Lucide Icons, and DummyJSON.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

Demo login: any username plus a password with at least six characters. The Quick Fill button uses `emilys / emilyspass`.

## Architecture

`src/api` owns typed API requests and `ApiError`; `src/types` owns domain contracts; `src/context` owns auth, cart, orders, and theme state; `src/models` contains testable Cart and Order logic; `src/pages` owns route views; `src/components` owns shared layout, forms, feedback, and product cards. UI events update Context or reducer state immutably, which drives rerenders and localStorage persistence.

## Deployment

The app is Vercel-ready. `vercel.json` enables SPA fallback so direct `/products/:id` refreshes resolve to the application shell.

## Credits

Design direction is based on the 10X Shop graduation-project specification. Product data is provided by DummyJSON. AI was used for implementation assistance; all generated code was reviewed and validated with TypeScript and production build checks.
