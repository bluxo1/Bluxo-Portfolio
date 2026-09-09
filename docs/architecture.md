# Architecture Document

## Overview

The application is a static React/TypeScript single-page app with route-level screens. Content is modeled as typed data. Presentation is composed from reusable UI primitives. A small navigation controller coordinates the menu, keyboard input, route changes, transition lock, sound preference, and reduced-motion preference.

## Owner and initial content

The site represents Shikhar Sharma, an AI Engineer based in India. Contact is `b1uxo@protonmail.com`; X is `@b1uxo`; GitHub is https://github.com/bluxo1. The first featured projects are Regressa and ML-Based Network Intrusion Detection System, linked from the PRD. Project descriptions must be verified from those repositories.

## High-level flow

```text
User input
  → NavigationController
  → route + transition state
  → Screen component
  → reusable UI components
  → typed content + asset manifest
```

External services are optional enhancements only. The portfolio must render with local content if GitHub, a form provider, or any remote API is unavailable.

## Suggested structure

```text
src/
  app/
    App.tsx
    routes.tsx
    AppProviders.tsx
  components/
    chrome/               # HUD, menu, cursor, sound toggle, skip link
    layout/               # screen shell, panels, responsive containers
    motion/               # page transition and reveal primitives
    projects/             # cards, filters, detail sections
    content/              # skills, timeline, links, resume CTA
  screens/
    HomeScreen.tsx
    ProjectsScreen.tsx
    ProjectDetailScreen.tsx
    SkillsScreen.tsx
    AboutScreen.tsx
    ResumeScreen.tsx
    ContactScreen.tsx
    SocialsScreen.tsx
    NotFoundScreen.tsx
  data/
    site.ts
    projects.ts
    skills.ts
    experience.ts
  hooks/
    useKeyboardMenu.ts
    useReducedMotion.ts
    useSoundPreference.ts
  lib/
    routes.ts
    externalLinks.ts
    media.ts
  styles/
    tokens.css
    globals.css
    utilities.css
  assets/
```

## Component responsibilities

- `App`: providers and router only.
- `ScreenShell`: common background, HUD, heading, back behavior, and content landmark.
- `MainMenu`: renders menu items and exposes selection/focus state; it does not own business data.
- `useKeyboardMenu`: maps ArrowUp/ArrowDown/Enter/Escape to callbacks and ignores typing contexts.
- `PageTransition`: handles enter/exit animation and respects reduced motion.
- `ProjectCard`: renders one project from a typed object and gracefully handles missing media.
- `ProjectDetailScreen`: resolves a slug, renders content, and provides a clear back/link path.
- `SoundToggle`: owns only user preference and playback state, never essential navigation.

## State model

Keep state local unless it must survive route changes.

- URL state: current route and project slug.
- UI state: selected menu index, transition lock, mobile menu open state.
- Preference state: sound enabled, reduced motion derived from media query, theme if added.
- Content state: imported static data.
- Remote state: optional GitHub/form states with explicit loading/error/empty values.

Use a reducer for menu/transition behavior if more than two components need the same state. Do not create a global store for static portfolio content.

## Data flow and fallback strategy

1. Load `SiteConfig` and project data synchronously.
2. Render the core screen immediately.
3. Enhance with optional project thumbnails, repository metadata, or video only after the core content is usable.
4. If an asset or remote request fails, render the local fallback and a nonblocking diagnostic in development.

The asset manifest must distinguish `licensed-reference-assets` from `original-fallback-assets`. The application must run with the fallback set and must not assume Joker imagery, Persona 5 Royal audio, or a proprietary font is available.

## Routing strategy

Use route components with a shared `ScreenShell`. The home menu navigates with router APIs, not hard-coded page reloads. Preserve deep links and configure the chosen host to serve `index.html` for unknown application paths. If the host cannot do that, use hash routing and document the tradeoff.

## Styling architecture

Define theme tokens in `tokens.css`: background layers, accent colors, text colors, spacing, type scale, z-index, shadows, and motion durations. Build the look from layers:

1. base color/gradient
2. texture or grain
3. background image/video
4. geometric HUD/decorative elements
5. readable content surface
6. interaction/focus layer

Decorative layers must not intercept pointer events. Content surfaces must remain readable when background media is disabled.

## Deployment architecture

```text
Git repository → CI build/lint/test → static artifact → GitHub Pages/Netlify/Vercel
```

Use the platform’s recommended SPA fallback and HTTPS custom-domain configuration. Store no server-side state in v1.

## Architecture decisions

- React + TypeScript: maintainable component boundaries and safe content models.
- Vite: fast local development and static deployment.
- Router: shareable project URLs and browser history.
- Motion library: consistent enter/exit transitions, with CSS fallback.
- Static data first: portfolio remains available if APIs fail.
- Original assets: avoids legal and operational dependency on game-owned content.

## Risks and mitigations

- Heavy media slows first load → posters, responsive images, lazy loading, reduced-motion fallback.
- Novel navigation confuses visitors → visible conventional links, skip link, clear labels, route URLs.
- API rate limits → static project data and optional enrichment only.
- Copyright risk → commissioned/created assets and an asset inventory with licenses.
