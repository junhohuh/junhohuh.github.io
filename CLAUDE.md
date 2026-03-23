# Claude Code — personal website

Read first: [docs/PROJECT_BRIEF.md](docs/PROJECT_BRIEF.md), [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Current work: [docs/TASKS.md](docs/TASKS.md).

## Project

Static personal portfolio: Astro 6 + TypeScript + Tailwind 4. Output is static HTML in `dist/`.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Conventions

- TypeScript strict; avoid `any`.
- Prefer `.astro` + small components; keep client JS minimal.
- Style with Tailwind utility classes; global entry is `src/styles/global.css`.
- Do not add npm dependencies without a one-line entry in [docs/DECISIONS.md](docs/DECISIONS.md).
- Do not expand MVP scope without updating [docs/PROJECT_BRIEF.md](docs/PROJECT_BRIEF.md).

## Key paths

- Pages: `src/pages/`
- Layout/shell: `src/layouts/Layout.astro`
- Projects data: `src/data/projects.ts`
- Résumé file: `public/resume.pdf`
