# Shikhar Sharma — Portfolio

An original, menu-driven portfolio for Shikhar Sharma, an AI Engineer based in India. The site uses a cinematic red-and-black interface while keeping the content semantic, keyboard-accessible, responsive, and usable with reduced motion.

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run lint    # TypeScript validation
npm run test    # Vitest suite
npm run build   # Production build
npm run preview # Serve the production build locally
```

## Routes

- `/` — home and primary menu
- `/projects` — featured projects
- `/projects/:slug` — project case file
- `/skills` — grouped skills
- `/about` — profile and working approach
- `/resume` — accessible credentials summary and CV request CTA
- `/contact` — email contact
- `/socials` — external links

## Content model

Portfolio content is kept in typed modules under `src/data/`:

- `site.ts` — identity, biography, contact, and social links
- `projects.ts` — project summaries, case-study details, stacks, and links
- `skills.ts` — grouped skills

Project descriptions and metrics should be based on the linked source repositories. Replace owner-supplied placeholders or contact details only with verified information.

## Architecture

The application is a React + TypeScript + Vite single-page app using React Router. Screens are composed from shared shell and chrome components under `src/components/`, with reusable hooks under `src/hooks/` and imported media exposed through `src/lib/assets.ts`.

The visual system uses CSS tokens and custom CSS motion. It includes keyboard menu navigation, visible focus styles, responsive mobile navigation, reduced-motion handling, a custom cursor for fine pointers, and an optional interface sound effect.

## Assets and rights

The visual direction is original and is not affiliated with ATLUS, SEGA, or Persona 5 Royal. Do not add or deploy official game artwork, characters, logos, music, sound effects, or fonts without documented permission. Use original or properly licensed replacements and record provenance before adding assets.

Local media lives in `assets/` and deployable static files live in `public/`. Keep generated files, temporary captures, and unlicensed font binaries out of commits.

## Project documentation

The implementation specifications are in `docs/`:

- `prd.md` — product requirements
- `trd.md` — technical requirements
- `architecture.md` — application architecture
- `design.md` — visual and interaction system
- `phases.md` — implementation sequence
- `AGENTS.md` — repository instructions for Codex

Read the five specifications and `docs/AGENTS.md` before making implementation changes.

## Current limitations

- The resume screen provides an accessible summary and email CTA until an owner-supplied PDF is available.
- Contact uses a `mailto:` fallback rather than a server-backed form.
- The site is static-first and does not fetch remote repository data at runtime.
