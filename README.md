# Personal website

Static personal site (Astro + TypeScript + Tailwind) for bio, projects, and résumé—aimed at recruiters and collaborators.

## Docs

- [Project intake](docs/PROJECT_INTAKE.md) — original requirements
- [Initial build plan](docs/1.%20Initial%20Build%20Plan.md) — MVP scope and shared-context conventions
- [Project brief](docs/PROJECT_BRIEF.md) — living product summary
- [Architecture](docs/ARCHITECTURE.md) — stack, structure, deploy
- [Tasks](docs/TASKS.md) — current checklist
- [Decisions](docs/DECISIONS.md) — short ADR-style notes

## Commands

```bash
npm install          # first time
npm run dev          # local dev server
npm run build        # static output to dist/
npm run preview      # preview production build locally
```

## Customize

- Replace placeholders: **Your Name**, email, GitHub, LinkedIn in `src/components/Header.astro`, `Footer.astro`, and page copy under `src/pages/`.
- Projects: edit `src/data/projects.ts`.
- Résumé: replace `public/resume.pdf` with your real PDF (a placeholder ships in-repo).

## License

Private / all rights reserved (update if you prefer MIT, etc.).
