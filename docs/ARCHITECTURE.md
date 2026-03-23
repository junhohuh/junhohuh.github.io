# Architecture

## Stack

| Layer | Choice |
|--------|--------|
| Framework | [Astro](https://astro.build/) 6.x |
| Language | TypeScript (strict tsconfig from Astro) |
| Styles | Tailwind CSS 4.x via `@tailwindcss/vite` |
| Output | **Static** (`output: "static"`, default) → `dist/` |
| Hosting (TBD) | GitHub Pages, Netlify, or Vercel—all can serve `dist/` |

## Repo layout (high level)

```text
src/
  components/     Header, Footer, ProjectCard
  data/projects.ts   Project list for /projects
  layouts/Layout.astro Site shell
  pages/*.astro     File-based routes
  styles/global.css Tailwind entry
public/
  favicon.svg
  resume.pdf        Replace with your real résumé
docs/               Intake, brief, this file, tasks, decisions
```

## Routing

| Path | Source |
|------|--------|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/resume.pdf` | `public/resume.pdf` |

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve `dist/` locally

## Deploy notes

- **Host:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Live URL:** `https://junhohuh.github.io/personal_website/`
- **`site`:** `https://junhohuh.github.io`, **`base`:** `/personal_website` — set in `astro.config.mjs` so asset paths resolve correctly on the subpath.

## Env vars

None for MVP.
