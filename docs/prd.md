# Product Requirements Document

## Product

An immersive, responsive personal portfolio website inspired by the dramatic menu-driven presentation of Persona-style games. The experience should feel like a polished interactive interface while remaining clear, fast, accessible, and useful to recruiters, clients, and collaborators.

This document is an implementation brief for Claude Code. Build the product described here, but use original branding, copy, artwork, audio, icons, and motion assets. Do not reproduce copyrighted game assets or logos.

## Owner profile

- Name: Shikhar Sharma
- Role: AI Engineer
- Location: India
- Email: b1uxo@protonmail.com
- X: `@b1uxo` — https://x.com/b1uxo
- GitHub: https://github.com/bluxo1

### Initial projects

1. **Regressa** — https://github.com/bluxo1/Regressa
2. **ML-Based Network Intrusion Detection System** — https://github.com/bluxo1/Network-Intrusion-Detection-System

Use these links as the initial featured projects. Claude Code must inspect the repositories before writing detailed descriptions and must not invent results, metrics, screenshots, or technologies.

## Goals

- Make the owner’s identity, specialty, and strongest work immediately understandable.
- Create a memorable interactive experience with a menu screen, animated transitions, layered backgrounds, and deliberate sound/motion.
- Present projects as case studies with outcomes, technologies, links, images, and role.
- Work equally well with mouse, keyboard, touch, screen readers, reduced motion, and slow connections.
- Make content easy to update from typed data objects rather than scattered markup.
- Deploy as a static site with a simple, reproducible build.

## Users

1. Recruiter: wants the person’s role, skills, projects, CV, and contact details in under two minutes.
2. Client or collaborator: wants proof of ability, live demos, repository links, and a clear way to get in touch.
3. Casual visitor: explores the visual experience and may share the site.

## Core experience

### Home/menu

- Full-viewport hero with an original or properly licensed Joker-inspired visual treatment. The requested Persona 5 Royal Joker imagery may be used only if Shikhar supplies assets with permission suitable for the intended deployment; otherwise use original, non-infringing visual art with similar dramatic red/black comic-book energy.
- Identity block: name, role, location, and one-sentence value proposition.
- Main menu entries: Projects, Skills, About, Resume, Contact, and Socials.
- Menu selection works with arrow keys, Enter/Space, pointer, and touch.
- Visible focus state and a small instruction hint such as “Arrow keys to navigate · Enter to select”.
- A “Skip to content” control and a conventional navigation fallback are always available.

### Projects

- Featured project cards first; all other projects below.
- Each card includes title, category, short summary, technologies, image, status, and links.
- Project detail view or route includes problem, solution, contribution, stack, measurable result, screenshots, and links.
- Filters may be included for category or technology, but must not hide the primary content from keyboard users.

### Skills

- Grouped capabilities such as engineering, AI/data, design, tools, and communication.
- Skill level is optional; if shown, it must be represented as a descriptive proficiency or experience label, not a misleading precision score.
- Include tools and practical evidence through project links.

### About

- Concise biography, working approach, education/experience, and current focus.
- Original portrait or illustrated identity treatment is optional.
- Include downloadable resume/CV and a plain-text accessible version of key facts.

### Contact/socials

- Prominent email CTA plus professional social links.
- Contact form is optional. If added, use a trusted form provider or a small server endpoint; never put private API keys in the client.
- Show clear success and failure states and provide a mailto fallback.

## Content model

The owner must supply:

- `name`, `role`, `location`, `tagline`, `bio`
- 3–6 featured projects and optional archive projects
- CV/resume PDF
- skill groups and supporting projects
- email, GitHub, LinkedIn, and other social URLs
- original background, thumbnail, portrait, cursor, and audio assets

Until supplied, use clearly marked placeholders such as `[YOUR NAME]`; do not invent professional achievements.

## Non-functional requirements

- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90 on a representative mobile run.
- Largest Contentful Paint under 2.5 seconds on a good 4G connection where practical.
- Responsive from 320px width through large desktop screens.
- No essential content depends on autoplay video, audio, hover, or JavaScript animation.
- Respect `prefers-reduced-motion` and provide a visible sound toggle; audio is off by default.
- Semantic landmarks, correct heading hierarchy, alt text, visible focus, sufficient contrast, and logical tab order.
- No broken asset icons, console errors, horizontal overflow, or dead links.

## Success criteria

- A first-time visitor understands who the owner is and what they do without learning the interface.
- A recruiter can reach the Projects, Resume, and Contact content within two interactions from the home screen.
- The site feels distinctive and documents the provenance/license of every image, sound, and font. If official Persona 5 Royal assets are not licensed for public web use, ship original alternatives rather than distributing them.
- The owner can add a project by editing one typed data object and adding its assets.

## Out of scope for v1

- CMS, authentication, admin dashboard, database, comments, blog editor, analytics dashboard, and custom backend.
- A pixel-perfect recreation of any commercial game UI.
- Complex WebGL or 3D scenes that harm performance or accessibility.

## Definition of done

All routes and menu actions work on desktop and mobile; content is populated from the owner’s data; build, lint, and tests pass; accessibility and reduced-motion checks are complete; assets have usage rights; and deployment instructions are verified.
