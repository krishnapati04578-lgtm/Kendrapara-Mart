# Kendrapara Mart

## Overview

Kendrapara Mart is a local grocery delivery web application for a store in Kendrapara, India. It displays products with prices organized by category (Vegetables, Fruits, Groceries, Snacks & Cold Drinks) and lets customers build an order list that gets sent via WhatsApp as a pre-filled message. This is NOT a full e-commerce platform — there's no payment processing, no user authentication, and no checkout flow. WhatsApp is the sole order channel.

The product catalog is stored as a frontend JSON structure in `client/src/lib/catalog.ts` for easy price updates without touching UI code. The backend exists primarily to serve the frontend and has a minimal API for categories (stored in PostgreSQL via Drizzle ORM), though the core product data lives client-side.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript, bundled by Vite
- **Routing:** Wouter (lightweight client-side router) — single page app with Home and 404 routes
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **State Management:** Zustand (`client/src/lib/order-store.ts`) for the shopping cart / order list — purely frontend, no persistence
- **Data Fetching:** TanStack React Query for any server API calls
- **Animations:** Framer Motion for scroll reveals and micro-interactions
- **Styling:** Tailwind CSS with CSS variables for theming (green/orange grocery palette), custom fonts (DM Sans for body, Outfit for display headings)
- **Path Aliases:** `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework:** Express 5 running on Node.js with TypeScript (via tsx)
- **Architecture:** Monorepo — server code in `server/`, client code in `client/`, shared types/schemas in `shared/`
- **Dev Server:** Vite dev server is integrated as Express middleware during development (`server/vite.ts`)
- **Production:** Client is built to `dist/public/`, server is bundled with esbuild to `dist/index.cjs`
- **API:** Minimal REST API — currently only `GET /api/categories` endpoint defined in `server/routes.ts`

### Database
- **ORM:** Drizzle ORM with PostgreSQL dialect
- **Connection:** `pg` Pool using `DATABASE_URL` environment variable
- **Schema:** Defined in `shared/schema.ts` — currently only a `categories` table (id, name, description, imageUrl)
- **Migrations:** Drizzle Kit with `drizzle-kit push` command (`npm run db:push`)
- **Note:** The actual product catalog is hardcoded in `client/src/lib/catalog.ts` as a design decision for simplicity — the database categories table exists for potential future dynamic use

### Key Design Decisions

1. **Frontend-only product catalog** — Products and prices are stored in a simple TypeScript array (`CATALOG` in `catalog.ts`). This was intentional: the store owner can update prices by editing one file without needing an admin panel or database changes.

2. **WhatsApp as order channel** — No payment gateway or order management system. Users add items to a cart (Zustand store), then click "Order on WhatsApp" which opens WhatsApp with a pre-filled message listing their items. The WhatsApp number is `919556217676`.

3. **Category navigation** — Category cards on the homepage scroll to the corresponding product section on the same page (no separate pages per category). The `scrollToSection` function handles smooth scrolling with header offset.

4. **Shared route definitions** — API routes are defined with Zod schemas in `shared/routes.ts` for type-safe API contracts between client and server.

### Build Process
- `npm run dev` — Starts dev server with Vite HMR
- `npm run build` — Builds client with Vite, then bundles server with esbuild
- `npm run start` — Runs production build
- `npm run db:push` — Pushes Drizzle schema to PostgreSQL

## External Dependencies

### Database
- **PostgreSQL** — Required, connected via `DATABASE_URL` environment variable. Used by Drizzle ORM for the categories table. Must be provisioned before the app can start.

### Third-Party Services
- **WhatsApp Web API** — Orders are sent via `https://wa.me/{phone}?text={message}` deep links. No API key needed — it opens WhatsApp in a new browser tab.
- **Unsplash** — Product and category images are loaded from Unsplash CDN URLs (hardcoded in catalog data). No API key needed as they use direct image URLs.
- **Google Fonts** — DM Sans, Outfit, Fira Code, and Geist Mono fonts loaded from Google Fonts CDN.

### Key npm Packages
- `drizzle-orm` + `drizzle-kit` — Database ORM and migration tooling
- `zustand` — Lightweight state management for the order cart
- `framer-motion` — Animation library
- `wouter` — Client-side routing
- `@tanstack/react-query` — Server state management
- `zod` + `drizzle-zod` — Schema validation
- shadcn/ui ecosystem: Multiple `@radix-ui/*` packages, `class-variance-authority`, `clsx`, `tailwind-merge`
- `connect-pg-simple` — PostgreSQL session store (available but sessions not actively used)