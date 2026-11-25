# Bandage – E-commerce Frontend

A React storefront for the [Commerce Platform API](https://github.com/ggozdekocer/commerce-platform-api). Customers can browse products by category, search and sort them, add them to a cart, and place orders after signing in.

Live demo: https://e-commerce-project-ten-iota.vercel.app

## Features

- Sign up (customer or store) and log in with a JWT, with an optional "remember me"
- Shop pages with category menu, text search, sorting (price, rating) and paging
- Product detail page with an image carousel
- Cart that is kept per browser, with quantity and selection controls
- Order creation with saved addresses and cards, and an order history page
- Toast messages for success and error responses from the API

## Tech stack

- React 19 and React Router 5
- Vite 7 (dev server and production bundler)
- Tailwind CSS 4
- Zustand for state management
- React Hook Form for forms
- Axios for API calls
- React Toastify and Lucide icons

## Getting started

You need Node.js 20 or newer and a running backend (see the API repository).

```bash
npm install
npm run dev
```

The app starts on http://localhost:5173.

### Configuration

The API address is read from an environment variable. Create a `.env.local` file in the project root:

```
VITE_API_URL=http://localhost:8080
```

Without this file the app uses the deployed backend. `.env.local` is not committed.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Project structure

The code is grouped by feature. Each feature keeps its own pages, components and store.

```
src/
  api/              Axios instance and error helper
  assets/           Images that are imported by components
  data/             Static content as JSON (top bar, blog, slides, team)
  layout/           Header, footer and the page layout
  styles/           Tailwind theme (colors and fonts)
  features/
    auth/           Login, sign up, route guard, user store
    product/        Shop, product list, product detail, product store
    cart/           Cart page and cart store
    order/          Create order and order history pages
    home/           Home page sections
    company/        About, team, contact and blog pages
public/images/      Images that are loaded from JSON files
```

## How it talks to the API

Every response of the API has the same shape (`data`, `success_message`, `http_status`, `error_message`). The stores read the payload from `data`, and errors show `error_message` in a toast. After login the token is sent as `Authorization: Bearer <token>` on every request by an Axios interceptor.

| Screen | Endpoints |
| --- | --- |
| Sign up and login | `POST /signup`, `POST /login`, `GET /verify`, `GET /roles` |
| Shop | `GET /categories`, `GET /products` (category, filter, sort, offset, limit), `GET /products/{id}` |
| Orders | `GET /user/address`, `GET /user/card`, `POST /order`, `GET /order` |

## Deployment

The `master` branch is deployed to Vercel. Set `VITE_API_URL` in the Vercel project settings to point at the production API.

## Notes

- The payment step is simulated, no real payment is made.
- Shipping is a flat fee that the backend adds to every order.