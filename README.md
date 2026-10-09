# Shikhar Sharma — Portfolio

A personal portfolio for Shikhar Sharma, an AI Engineer based in India, showcasing work in local AI infrastructure, prompt evaluation, retrieval, and machine learning. A red-and-black comic-book interface brings together project case files, skills, background, and contact details in a navigable command center.

**[Visit the portfolio](https://b1uxo.vercel.app)** · [Explore projects](https://b1uxo.vercel.app/projects) · [Get in touch](https://b1uxo.vercel.app/contact)

[Run locally](#run-locally) · [Update content](#update-content) · [Deployment](#deployment) · [Documentation](#documentation)

## Selected work

| Project | Focus | Evidence or demo |
| --- | --- | --- |
| [Arbiter](https://github.com/bluxo1/Arbiter) | Tenant access, resource policy, accounting, and recovery for shared local AI execution | [v0.1.0 release](https://github.com/bluxo1/Arbiter/releases/tag/v0.1.0) |
| [Regressa](https://github.com/bluxo1/Regressa) | Prompt evaluation, baseline comparisons, and regression checks for CI | [Sample evaluation report](https://bluxo1.github.io/Regressa/report.html) |
| [Network Intrusion Detection System](https://github.com/bluxo1/Network-Intrusion-Detection-System) | A PyTorch and Flask research demo for classifying NSL-KDD records | [Evaluation metrics](https://github.com/bluxo1/Network-Intrusion-Detection-System/blob/main/reports/metrics.json) |
| [Axiom-RAG](https://github.com/bluxo1/Axiom-RAG) | Citation verification, confidence routing, and web-search fallback | [Open app](https://axiom-rag.vercel.app) |

Additional work includes [Kimi Desktop Discord Presence](https://github.com/bluxo1/Kimi-Discord-Rich-Presence-For-kimi-desktop), [Discord Presence for Unity Hub](https://github.com/bluxo1/RPC-for-Unity-Hub), and this portfolio.

Project content was reviewed against the public repositories on **October 9, 2026**. Results are reported by those projects, with their evaluation conditions and limitations preserved in the case files:

- **Arbiter:** the signed v0.1.0 release reports 1,308 passing regression tests and verification with real PostgreSQL, Redis, and Ollama. Its supported scope is one host and one API worker.
- **Intrusion detection:** reports 99.6% held-out validation accuracy and 80.0% multi-class accuracy on KDDTest+. The model is a research demo; its test results include a substantial generalization gap for R2L attacks.
- **Axiom-RAG:** displayed metrics come from deterministic offline evaluation. Live-model RAGAS faithfulness and answer-relevancy reports remain pending.

## Interface

- Arrow keys select home-menu entries; Enter opens the selected destination. Focused links and buttons retain their native keyboard behavior.
- A skip link, visible focus states, route-heading focus, and mobile navigation keep the content accessible through conventional controls.
- Route wipes, card entrances, and a custom cursor provide motion while respecting `prefers-reduced-motion`.
- Interface sound starts muted. The sound toggle saves the preference in local storage and works with pointer or keyboard input.
- Project pages link to source repositories, release evidence, and demos where available.

## Stack

- **React + TypeScript:** components and typed content models.
- **Vite + React Router:** local development, production builds, and client-side routes.
- **CSS custom properties:** shared colors, typography, spacing, and motion tokens.
- **Vitest:** automated checks for the primary route mapping.
- **Vercel Analytics + Speed Insights:** traffic and performance instrumentation on Vercel.

## Run locally

Use **Node.js 24.x** and npm. Install the dependency versions recorded in [package-lock.json](package-lock.json):

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Local development requires no application API credentials or environment file.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run TypeScript build checks with `tsc -b --pretty false` |
| `npm run test` | Run the Vitest suite |
| `npm run build` | Type-check and generate the production site in `dist/` |
| `npm run preview` | Serve the existing production build locally |

Before shipping a change, run:

```bash
npm run lint
npm run test
npm run build
npm run preview
```

The checked-in test suite currently covers route mapping. For interface changes, also inspect the production preview at desktop and mobile widths, navigate with the keyboard, enable reduced motion, and check both sound settings.

## Update content

Content lives in typed modules, so routine copy updates do not require component changes.

| File | What to edit |
| --- | --- |
| [src/data/site.ts](src/data/site.ts) | Name, role, biography, current focus, contact details, and social links |
| [src/data/projects.ts](src/data/projects.ts) | Project summaries, case studies, stacks, results, source links, supporting links, and limitations |
| [src/data/skills.ts](src/data/skills.ts) | Skill groups shared by the Skills and Resume screens |

To add a project:

1. Review its source repository and record the implemented behavior, reported results, and limitations.
2. Copy an existing entry in `src/data/projects.ts`, give it a unique `slug`, and fill in the required fields. Set `featured` to choose between Selected Work and More Work; use optional `links` and `limitations` for supporting evidence and scope.
3. Check the card and `/projects/<slug>` page, then run the validation commands above.

Keep personal claims and project metrics grounded in owner-supplied information or source evidence. Do not invent employers, education, achievements, or results.

Visual settings live in [src/styles/tokens.css](src/styles/tokens.css), with layout and interaction styles in [src/styles/globals.css](src/styles/globals.css). Shared media imports are defined in [src/lib/assets.ts](src/lib/assets.ts).

## Routes

| Route | Screen |
| --- | --- |
| `/` | Identity and primary menu |
| `/projects` | Featured projects and additional work |
| `/projects/:slug` | Project case file |
| `/skills` | Grouped capabilities |
| `/about` | Background, working approach, and current focus |
| `/resume` | Skills summary and CV request |
| `/contact` | Email contact |
| `/socials` | Professional and social links |

Unknown routes and project slugs render dedicated not-found screens.

## Deployment

The site is a static React application deployed to Vercel from its connected Git branch:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **SPA routing:** [vercel.json](vercel.json) rewrites application paths to `/index.html`, allowing direct visits and refreshes on routes such as `/projects/arbiter`.

Other static hosts need an equivalent SPA fallback. Run a production build before using `npm run preview`.

Vercel's analytics and speed-insights scripts are served by the hosting platform. A local production preview can return 404 responses for `/_vercel/` requests; these endpoints are available on Vercel.

## Repository layout

```text
src/
  components/   Shared chrome, layout, content, and motion
  data/         Typed portfolio content
  hooks/        Motion, cursor, and sound behavior
  lib/          Asset imports and route definitions
  screens/      Route-level views
  styles/       Design tokens and global styles
assets/         Imported images, cursors, and sound
public/         Files served as-is
docs/           Product, technical, and design specifications
```

## Documentation

Read the specifications and repository instructions before making implementation changes:

- [Product requirements](docs/prd.md)
- [Technical requirements](docs/trd.md)
- [Architecture](docs/architecture.md)
- [Design and interaction system](docs/design.md)
- [Implementation phases](docs/phases.md)
- [Agent instructions](docs/AGENTS.md)

## Current scope

The resume screen provides a skills summary and an email link to request the full CV; a downloadable PDF has not been added. Contact uses `mailto:`. Project content is maintained in local typed modules.

[src/data/experience.ts](src/data/experience.ts) is reserved scaffolding with placeholders and is not currently rendered. Add verified background information before connecting it to a screen.

## Assets and rights

This project is unofficial and is not affiliated with or endorsed by ATLUS, SEGA, or Persona 5 Royal. Use original or properly licensed assets and record their source and usage rights before adding them. Official game artwork, characters, logos, music, sound effects, and fonts require documented permission suitable for deployment.

Keep build output, temporary captures, and unlicensed font binaries out of commits.
