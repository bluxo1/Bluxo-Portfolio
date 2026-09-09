# Design Specification

## Design intent

Create a high-energy, cinematic portfolio interface that feels like entering a personal command center. The design may borrow broad ideas—bold diagonals, dramatic contrast, menu-driven navigation, animated wipes—from the references, but all visual identity must be original.

## Owner identity

Present **Shikhar Sharma** as an **AI Engineer** based in **India**. The first content should feature Regressa and the ML-Based Network Intrusion Detection System, with GitHub links from `https://github.com/bluxo1`. Contact: `b1uxo@protonmail.com`; X: `@b1uxo`.

## Requested character direction and rights gate

The requested direction is Joker from Persona 5 Royal across the imagery, sound effects, and typography. Treat this as a gated asset requirement: only use files Shikhar provides with permission/license for the deployment. Do not fetch or redistribute official game artwork, music/sound effects, logos, or proprietary fonts. If rights are unavailable, create an original masked-vigilante/comic-book direction using a red/black palette, sharp diagonals, halftone texture, gloves/masquerade motifs, and an original type treatment without using Persona names or copied assets.

## Visual system

Use a dark foundation with one dominant accent and one supporting accent. A suggested starting palette:

- Ink: `#090b12`
- Panel: `#121826`
- Primary accent: an original electric cyan, violet, red, or amber selected for the owner
- Text: warm white with a muted secondary gray
- Status: green/amber/red used sparingly and never as the only meaning

Make colors configurable through CSS variables. Do not copy the exact Persona 3 or Persona 5 palettes, logos, UI symbols, or typography.

## Typography

- Display face: condensed or geometric, used for identity and section titles.
- Body face: highly legible sans-serif used for summaries and project details.
- Mono face: optional for metadata, tags, timestamps, and technical labels.
- Use `clamp()` for fluid headings and never render body copy in all caps exclusively.

## Layout

### Desktop

- Full-height screen with a thin top status bar and bottom control/status bar.
- Hero identity occupies roughly the left or central third; menu occupies a visually distinct zone.
- Content panels use a max width around 1100–1280px with generous margins.
- Project grid uses 2–3 cards depending on width.

### Mobile

- Stack identity, menu, and content vertically.
- Keep menu items large enough to tap; provide a conventional scrollable navigation.
- Replace full-bleed video with a compressed poster or gradient.
- Project cards become one column; avoid text over busy artwork.

## Interaction language

- Selection: accent outline, cursor marker, subtle scale/translate, and optional short sound.
- Confirmation: brief wipe, fade, or directional slide into the destination screen.
- Back: visible back control plus Escape and browser Back.
- Loading: stable skeleton or status label, never a blank screen.
- External link: clear icon/label and opens in a new tab only when useful.
- Focus: always visible, high contrast, and not represented only by a color change.

## Motion rules

- Motion should communicate hierarchy and direction, not decorate every element.
- Use one dominant transition per navigation event.
- Avoid continuous animation behind dense text.
- Provide a reduced-motion mode that removes parallax, autoplay video, cursor sprite animation, and large wipes while retaining instant state changes.
- Avoid flashing effects and rapidly changing patterns.

## Screen compositions

- Home: identity, tagline, menu, ambient background, system status.
- Projects: featured work first, filter/archive second, strong thumbnail-to-title relationship.
- Project detail: title and outcome first; technical details and links follow.
- Skills: grouped capability panels with evidence links.
- About: portrait/identity block paired with readable biography and timeline.
- Resume: preview or download CTA with accessible text fallback.
- Contact: direct CTA, social links, availability/location, optional form.

## Content design

- Lead with outcomes: what was built, for whom, and what changed.
- Keep card summaries to 1–3 sentences.
- Use technical tags as supporting metadata, not the primary explanation.
- Avoid placeholder lorem ipsum in the finished build.
- Never invent metrics, employers, degrees, or client names.

## Asset requirements

- Original background artwork for each major screen or a reusable abstract system.
- Project thumbnails in consistent aspect ratios.
- Optional portrait, logo/monogram, cursor, texture, and short UI sound.
- Provide light/dark or low-bandwidth fallbacks where relevant.
- Maintain an asset inventory with source, license, dimensions, and intended use.
- Record provenance and license status for every requested character image, sound effect, and font before adding it to the repository.

## Accessibility and usability design

- Contrast must remain adequate over every background state.
- Add overlays behind text where needed.
- The site must remain understandable with images, animation, and sound disabled.
- Use descriptive labels instead of icon-only actions.
- Do not hide core content behind an interaction that is unavailable to keyboard or assistive technology users.

## Design QA checklist

- Check 320px, 375px, 768px, 1024px, and 1440px widths.
- Check keyboard-only and reduced-motion modes.
- Check a slow connection with cache disabled.
- Check long project titles, missing images, empty links, and large text settings.
- Confirm the visual system is original and the asset inventory has rights information.
