# Technical Requirements Document

## Technical direction

Use a static-first Vite application with React and TypeScript. This combines the Persona 3 reference’s componentized routing and motion approach with the Persona 5 reference’s data-driven separation of model, view, and controller responsibilities.

Recommended baseline:

- React + TypeScript + Vite
- React Router for navigable URLs
- Framer Motion or a small custom transition layer for page transitions
- CSS Modules or organized global CSS; prefer CSS variables for theme tokens
- ESLint, TypeScript strict mode, and a formatter
- Vitest + Testing Library for behavior tests
- Playwright for a small smoke/accessibility suite if available

Do not add a dependency when native browser APIs and a small typed utility are sufficient.

## Project-specific content

- Owner identity: use `[PORTFOLIO_OWNER_*]` placeholders until supplied in the working session.
- Initial projects: use `[PROJECT_*]` placeholders until verified repository URLs are supplied.
- Inspect each repository before writing project metadata; use verified facts only.

## Runtime requirements

- Node.js LTS and npm.
- Commands: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`, `npm run test`.
- Environment variables, if any, must be documented in `.env.example` and accessed through Vite’s public-prefix rules only when the value is safe for the browser.
- The production build must work from a static host and support a configured base path.

## Functional requirements

### Navigation

- Routes: `/`, `/projects`, `/projects/:slug`, `/skills`, `/about`, `/resume`, `/contact`, `/socials`.
- Direct navigation to every route must render or show a controlled not-found state.
- Browser Back/Forward must work.
- Escape returns to the previous logical screen where appropriate.
- Arrow-key navigation must not trap users inside the decorative menu.
- The active route and selected menu item must have a programmatic state.

### Data

- Store portfolio content in typed modules under `src/data/`.
- Define types for `Project`, `SkillGroup`, `SocialLink`, `Experience`, and `SiteConfig`.
- Validate external URLs and use safe link attributes for new tabs.
- Do not fetch GitHub data at runtime for essential content. Optional repository enrichment must have loading, error, rate-limit, and static fallback states.

### Assets

- Keep assets under `public/assets` or `src/assets` consistently; choose one convention and document it.
- Provide responsive image sizes and modern formats where possible.
- Lazy-load below-the-fold images and nonessential video.
- Use poster images for video and disable motion/audio when reduced motion is requested.
- Missing optional images must render a designed fallback, not a broken image.
- Requested Persona 5 Royal/Joker images, sound effects, and fonts are third-party copyrighted assets. Do not download, commit, bundle, or deploy them without documented permission/license. Support a replaceable asset manifest so licensed assets can be supplied by the owner, and provide original fallback assets for development and deployment.
- Persona 5 Royal, Joker, and related names, characters, artwork, music, sound effects, logos, and fonts belong to their respective rights holders, including ATLUS and SEGA. All rights reserved; the portfolio is unofficial and non-affiliated.

### Motion and audio

- Implement a transition state machine: idle → leaving → entering → active.
- Prevent double navigation during transitions.
- Keep transitions short enough to preserve usability; default target 250–650ms.
- Audio requires explicit user opt-in, volume control is not required for v1 but a mute toggle is.
- Stop and clean up audio/video listeners on route change and unmount.

## Accessibility requirements

- Use semantic HTML and native buttons/links for controls.
- Use `aria-current`, `aria-label`, `aria-expanded`, and live regions only where appropriate.
- Focus the route heading after navigation without causing a disorienting scroll.
- Decorative visuals use empty alt text; informative visuals use useful alt text.
- All content remains usable at 200% zoom and on narrow viewports.
- Test with keyboard-only navigation and a screen reader smoke pass.

## Security and privacy

- No secrets or private tokens in source or client bundles.
- Sanitize or avoid rendering user-controlled HTML.
- External links use HTTPS where supported.
- Contact form, if implemented, must include spam protection, rate limiting through the provider, and a privacy notice.
- Do not collect analytics until an explicit privacy approach and consent decision exists.

## Performance and browser support

- Target current Chrome, Edge, Firefox, and Safari plus recent mobile browsers.
- Avoid blocking fonts and large hero video downloads.
- Use `content-visibility`, responsive images, and route-level lazy loading when measurements justify them.
- Keep initial JavaScript and media budgets documented in the build notes; investigate any unusually large bundle.

## Quality gates

- TypeScript has no errors.
- Lint passes with no ignored errors.
- Unit tests cover menu reducer/state, route selection, project rendering, reduced-motion behavior, and external-link helpers.
- Smoke tests cover loading every route, keyboard selection, Escape/back behavior, and mobile layout.
- Production build is served locally and inspected at desktop and mobile widths.

## Codex implementation rules

1. Inspect the existing repository before creating files.
2. Implement in small phases and run the relevant checks after each phase.
3. Do not overwrite user-authored files or assets without explaining the conflict.
4. Prefer typed, reusable components over duplicated markup.
5. Keep content separate from presentation.
6. Never use copyrighted reference assets; use placeholders until original assets are provided.
7. Before finishing, report changed files, commands run, known limitations, and how to start the site.
