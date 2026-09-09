# Claude Code Project Instructions

## Project

Build a portfolio website for **Shikhar Sharma**, an **AI Engineer** based in **India**.

Before making implementation decisions, read:

- `docs/prd.md`
- `docs/trd.md`
- `docs/architecture.md`
- `docs/design.md`
- `docs/phases.md`

## Owner content

- Email: `b1uxo@protonmail.com`
- X: `@b1uxo` — https://x.com/b1uxo
- GitHub: https://github.com/bluxo1
- Featured projects:
  - Regressa: https://github.com/bluxo1/Regressa
  - ML-Based Network Intrusion Detection System: https://github.com/bluxo1/Network-Intrusion-Detection-System

Inspect the project repositories before writing descriptions. Never invent metrics, technologies, employers, education, screenshots, or achievements.

## Implementation rules

- Follow `docs/phases.md` in order.
- Use React, TypeScript, and Vite unless the existing project proves a different stack is already established.
- Keep portfolio content in typed data modules.
- Preserve keyboard navigation, semantic HTML, responsive layouts, visible focus, reduced-motion support, and audio-off-by-default behavior.
- Read and follow the architecture and design documents before creating components.
- Use original or properly licensed assets only.
- The requested Persona 5 Royal/Joker images, sound effects, and fonts must not be downloaded, bundled, or deployed without documented permission. If permission is unavailable, use the original masked-vigilante/comic-book fallback direction specified in `docs/design.md`.
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
