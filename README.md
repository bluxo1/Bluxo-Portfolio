# Shikhar Sharma — Portfolio

A menu-driven portfolio for Shikhar Sharma, an AI Engineer based in India. The site combines an original masked-vigilante/comic-book visual direction with semantic HTML, keyboard navigation, responsive layouts, and reduced-motion support.

## Stack

- React and TypeScript
- Vite and React Router
- Vitest with Testing Library/JSDOM dependencies
- CSS tokens and component-level styles

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run lint    # TypeScript validation
npm run test    # Vitest suite
npm run build   # Production build
npm run preview # Serve the production build locally
```

## Routes

- `/` — home screen and primary menu
- `/projects` — featured projects
- `/projects/:slug` — project case file
- `/skills` — grouped skills
- `/about` — profile and working approach
- `/resume` — credentials summary and CV request CTA
- `/contact` — email contact
- `/socials` — external links

Unknown paths render the built-in 404 screen.

## Content model

Portfolio content is kept in typed modules under `src/data/`:

- `site.ts` — identity, biography, contact, and social links
- `projects.ts` — project summaries, case-study details, stacks, and source links
- `skills.ts` — grouped skills
- `experience.ts` — experience structure and owner-supplied placeholders

Project descriptions and metrics must be based on the linked source repositories. Do not invent employers, education, achievements, metrics, or project details. Replace placeholders only with verified information supplied by the owner.

## Project structure

- `src/components/` — shared shell, navigation, chrome, content, and motion components
- `src/screens/` — route-level screens
- `src/hooks/` — reduced-motion, cursor, and sound-preference hooks
- `src/lib/` — assets and route utilities
- `src/styles/` — design tokens and global styles
- `assets/` — local source media
- `public/` — static files served as-is
- `docs/` — product, technical, architecture, design, and phase documentation

## Interface behavior

The interface includes visible focus states, keyboard-accessible menu navigation, responsive mobile navigation, reduced-motion handling, a custom cursor for fine pointers, and an optional select sound that is off by default.

## Assets and rights

The visual direction is original and is not affiliated with ATLUS, SEGA, or Persona 5 Royal. Do not add or deploy official game artwork, characters, logos, music, sound effects, or fonts without documented permission. Use original or properly licensed replacements and record provenance before adding assets.

Keep generated files, temporary captures, and unlicensed font binaries out of commits.

## Documentation

The implementation specifications are in `docs/`:

- `prd.md` — product requirements
- `trd.md` — technical requirements
- `architecture.md` — application architecture
- `design.md` — visual and interaction system
- `phases.md` — implementation sequence
- `AGENTS.md` — repository instructions

Read the specifications and `docs/AGENTS.md` before making implementation changes.

## Current limitations

- The resume screen provides a verified skills summary and email CTA until an owner-supplied PDF is available.
- Contact uses a `mailto:` fallback rather than a server-backed form.
- Experience data still contains owner-supplied placeholders.
- The site is static-first and does not fetch remote repository data at runtime.
