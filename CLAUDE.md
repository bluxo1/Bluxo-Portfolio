# Claude Code Project Instructions

## Project

Build a portfolio website using the owner-provided identity and content. Personal identity details are intentionally omitted from this repository; use placeholders until the owner supplies them in the working session.

Before making implementation decisions, read:

- `docs/prd.md`
- `docs/trd.md`
- `docs/architecture.md`
- `docs/design.md`
- `docs/phases.md`

## Owner content

Use placeholders for name, role, location, email, social links, and project URLs until the owner supplies them. Never invent metrics, technologies, employers, education, screenshots, or achievements.

## Implementation rules

- Follow `docs/phases.md` in order.
- Use React, TypeScript, and Vite unless the existing project proves a different stack is already established.
- Keep portfolio content in typed data modules.
- Preserve keyboard navigation, semantic HTML, responsive layouts, visible focus, reduced-motion support, and audio-off-by-default behavior.
- Read and follow the architecture and design documents before creating components.
- Use original or properly licensed assets only.
- The requested Persona 5 Royal/Joker images, sound effects, and fonts must not be downloaded, bundled, or deployed without documented permission. If permission is unavailable, use the original masked-vigilante/comic-book fallback direction specified in `docs/design.md`.
- Persona 5 Royal, Joker, and related names, characters, artwork, music, sound effects, logos, and fonts belong to their respective rights holders, including ATLUS and SEGA. All rights reserved. This is an unofficial, non-affiliated portfolio concept.
- Do not expose secrets or private API keys in client code.
- Do not add dependencies without explaining why they are needed.
- Do not overwrite user-authored files or delete assets without asking first.

## Validation

After meaningful changes, run the relevant checks. Before handoff, run:

```bash
npm run lint
npm run test
npm run build
```

If a command does not exist, report that clearly and run the closest available validation. Check desktop, mobile, keyboard-only, reduced-motion, and no-audio behavior.

## Workflow

1. Inspect the current repository and working tree.
2. Read all five files in `docs/`.
3. Implement one phase at a time.
4. Verify each phase before continuing.
5. Summarize changed files, checks run, known limitations, and next steps.
