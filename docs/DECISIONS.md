# Decisions

Short log of choices worth remembering. Newest first.

## 2026-03-20 — Astro static site

**Decision:** Build the MVP as **Astro + TypeScript + Tailwind** with default **static** output (`dist/`), no backend.

**Why:** Fits a content-first portfolio, minimal client JS, and deploys cleanly to static hosts (GitHub Pages, Netlify, Vercel).

**Alternatives considered:** Next.js on Vercel (more server/SSR surface than needed for MVP).

## 2026-03-22 — GitHub Pages for hosting

**Decision:** Deploy static `dist/` to **GitHub Pages** via GitHub Actions. Set `site` and `base` in `astro.config.mjs` for the project subpath URL (`junhohuh.github.io/personal_website/`).

**Why:** Repo is already on GitHub; Pages is free and zero-config for static sites. No extra service needed for MVP.
