# Shikhar Sharma — Portfolio

A menu-driven portfolio for Shikhar Sharma, an AI Engineer based in India. The site pairs an original, comic-book-inspired command-center aesthetic with the fundamentals that keep it usable: semantic HTML, full keyboard navigation, responsive layouts, and reduced-motion support.

Live at **[b1uxo.vercel.app](https://b1uxo.vercel.app)**.

## Stack

- **React** + **TypeScript** — component-driven UI, fully typed
- **Vite** + **React Router** — fast builds and client-side routing
- **Vitest** with Testing Library and jsdom — unit and interaction tests
- **CSS custom properties** — a token layer (`tokens.css`) drives every color, font, and accent

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run dev      # Start the Vite dev server
npm run lint     # TypeScript type-check (tsc -b)
npm run test     # Vitest suite
npm run build    # Production build
npm run preview  # Serve the production build locally
```

## Deployment

The site deploys to Vercel from the `main` branch. Because routing is client-side (`BrowserRouter`), `vercel.json` rewrites every path to `index.html` so deep links like `/projects` resolve on direct visits and refreshes.

## Routes

| Route | Screen |
| --- | --- |
| `/` | Home screen and primary menu |
| `/projects` | Featured projects |
| `/projects/:slug` | Project case file |
| `/skills` | Grouped skills |
| `/about` | Profile and working approach |
| `/resume` | Credentials summary and CV request |
| `/contact` | Email contact |
| `/socials` | External links |

Unknown paths render the built-in 404 screen.

## Content model

Portfolio content lives in typed modules under `src/data/`, kept separate from presentation so copy can change without touching components:

- `site.ts` — identity, biography, contact, and social links
- `projects.ts` — project summaries, case-study details, stacks, and source links
- `skills.ts` — grouped skills
- `experience.ts` — experience structure and owner-supplied placeholders

> Project descriptions and metrics must be grounded in the linked source repositories. Do not invent employers, education, achievements, metrics, or project details. Replace placeholders only with verified information supplied by the owner.

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

- Visible focus states and full keyboard menu navigation (arrow keys move the selection, Enter opens a route)
- Responsive mobile navigation
- Reduced-motion handling that disables entrance and hover animations
- Staggered entrance animations and hover glides across content screens
- A custom animated cursor for fine pointers, with its hotspot aligned to the pointer
- An optional interface select sound, off by default

## Assets and rights

The visual direction is original and is not affiliated with ATLUS, SEGA, or Persona 5 Royal. Do not add or deploy official game artwork, characters, logos, music, sound effects, or fonts without documented permission. Use original or properly licensed replacements and record provenance before adding assets.

Keep generated files, temporary captures, and unlicensed font binaries out of commits.

## Documentation

Implementation specifications live in `docs/`:

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
