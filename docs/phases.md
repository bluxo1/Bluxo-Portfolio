# Implementation Phases

This is the execution order for Claude Code. Each phase should end with a working build and a short verification report. Do not begin a later phase while an earlier phase has broken tests or unresolved build errors.

## Required owner inputs

- Shikhar Sharma — AI Engineer — India.
- Email: `b1uxo@protonmail.com`.
- X: `@b1uxo`.
- GitHub: https://github.com/bluxo1.
- Featured projects: https://github.com/bluxo1/Regressa and https://github.com/bluxo1/Network-Intrusion-Detection-System.
- Persona 5 Royal/Joker assets only when the owner has suitable permission/license; otherwise use original fallback art, sound, and typography.

## Phase 0 — Confirm inputs and constraints

Tasks:

- Inspect the existing repository, package manager, scripts, and current working tree.
- Confirm the owner’s name, role, bio, projects, links, CV, preferred accent, and asset sources.
- Record missing content as explicit placeholders.
- Create an asset/license inventory.
- Confirm whether every requested Joker image, Persona 5 Royal sound effect, and font is licensed for public deployment; if not, select original substitutes before implementation.

Exit criteria: content gaps and copyright-safe asset plan are documented in code comments or project configuration; no invented personal claims.

## Phase 1 — Scaffold and quality baseline

Tasks:

- Create or standardize the Vite React TypeScript app.
- Enable strict TypeScript, linting, formatting, and test scripts.
- Add the required route skeleton and a not-found route.
- Add global reset, tokens, responsive base styles, and accessible focus styles.

Exit criteria: `npm run build`, `npm run lint`, and `npm run test` run successfully; every route renders a minimal screen.

## Phase 2 — Content model and application shell

Tasks:

- Implement typed site, project, skill, experience, and social data.
- Build `ScreenShell`, top/bottom HUD, skip link, back control, and responsive layout primitives.
- Add conventional navigation that works before decorative interactions are added.

Exit criteria: content can be changed from data modules; all routes have headings, landmarks, and working links.

## Phase 3 — Menu interaction and routing

Tasks:

- Implement the menu controller and route mapping.
- Support pointer, touch, ArrowUp/ArrowDown, Enter/Space, Escape, and browser history.
- Add focus management after route changes.
- Prevent double activation during transitions.

Exit criteria: keyboard-only users can access every route; direct URLs and Back/Forward work; no navigation depends solely on animation.

## Phase 4 — Visual identity and motion

Tasks:

- Implement original backgrounds, layered surfaces, typography, diagonal/HUD motifs, cursor treatment, and responsive composition.
- Use the requested Joker assets only if the Phase 0 rights gate passed; otherwise implement the original masked-vigilante fallback direction.
- Add route transitions and local reveal effects.
- Add a sound toggle with audio off by default.
- Implement reduced-motion behavior and static media fallbacks.

Exit criteria: the site has a distinctive cohesive visual system; reduced-motion mode is comfortable; no essential information disappears when media is disabled.

## Phase 5 — Portfolio content screens

Tasks:

- Build project cards, filters if needed, project details, skills, about, resume, contact, and socials screens.
- Add original thumbnails and responsive image handling.
- Add external-link safety and resume download.
- Add optional GitHub enrichment only after static content is complete.

Exit criteria: a visitor can understand the owner and strongest work without needing to explore every animation; missing assets and remote failures have designed fallbacks.

## Phase 6 — Verification and hardening

Tasks:

- Add unit tests for navigation state, route mapping, project rendering, and preference behavior.
- Add browser smoke tests for routes, keyboard controls, mobile layout, and external links.
- Run production build, inspect console/network errors, and measure Lighthouse.
- Test screen reader landmarks, contrast, zoom, reduced motion, and slow network.
- Check metadata, favicon, social preview image, sitemap/robots where appropriate.

Exit criteria: quality gates in `trd.md` pass or deviations are documented with follow-up tasks.

## Phase 7 — Deployment and handoff

Tasks:

- Configure the chosen host and SPA fallback/base path.
- Add deployment instructions and environment variable documentation.
- Verify the deployed URL on desktop and mobile.
- Provide a final handoff listing content edit locations, commands, asset rules, and known limitations.

Exit criteria: production URL works from a fresh browser, HTTPS is active, deep links load, and the owner can update content without changing component logic.

## Claude Code operating rules

- Work phase-by-phase and show the user what changed before moving on.
- Use existing assets only when their license and provenance are clear.
- Ask for missing personal content only when the placeholder would materially affect implementation; otherwise proceed with clearly marked placeholders.
- Run the smallest relevant validation after each change, then the full quality gate before handoff.
- Do not add extra project documentation files beyond the requested documentation set unless the user explicitly asks for them.
