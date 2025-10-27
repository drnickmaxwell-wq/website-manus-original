# SMH Champagne Intelligence Overview

## Brand Foundations
- **Signature Gradient:** Linear 135° magenta → turquoise (`var(--smh-gradient)`).
- **Accent Gold:** Champagne gold token `var(--smh-gold)` for borders, glows, and metallic cues.
- **Typography:** Playfair Display (headings) and Inter (body/data) distributed via `next/font` and surfaced with Tailwind aliases (`font-heading`, `font-body`).
- **Tone:** Cinematic luxury that balances spa-like calm with coastal energy; avoid neon blues/purples in favour of champagne, slate, and soft teal highlights.

## Tokens & Variables
- `styles/tokens/smh-champagne-tokens.css` exposes the design tokens consumed throughout the app.
- Key variables:
  - `--smh-gradient` — champagne gradient background.
  - `--smh-gold` / `--smh-accent-gold` — shared champagne gold accent colour.
  - `--motion-ease` — cubic-bezier easing (`easeInOutCubic`) for micro-interactions.
  - `--film-grain-opacity`, `--particles-opacity` — adjust overlay intensity per theme.
- CSS utilities in `styles/champagne/overlays.css` provide layer primitives:
  - `.smh-gradient-bg` (animated gradient respecting reduced-motion).
  - `.smh-wave-mask` (wave SVG masking for hero/CTA sections).
  - `.smh-gold-border`, `.smh-glass` (champagne glassmorphism treatments).
  - `.smh-film-grain` + `.smh-particles-*` (cinematic overlays).

## Layer Stack Specification
1. **Gradient Base** – Apply `.smh-gradient-bg` and `.smh-wave-mask` to sections.
2. **Particles** – Use `.smh-particles-{magenta,teal,gold}` beneath content for ambient shimmer.
3. **Film Grain** – Add `.smh-film-grain` as the final overlay before content for subtle texture.
4. **Content** – Place interactive elements above overlays with glass + gold treatments for hero/CTA cards.

## Motion & Accessibility
- Default easing: `easeInOutCubic` (`[0.65, 0.05, 0.36, 1]`).
- Parallax is capped at 6px and disabled when `prefers-reduced-motion` is detected.
- `.smh-gradient-bg` animation automatically halts for users opting into reduced motion.

## QA Focus Areas
- Fonts resolve server-side via `next/font` without FOIT/flash.
- Gradient + overlays load before hero content (no white flash) and support SSR.
- Motion gracefully degrades when reduced motion is enabled.
- Gold borders/glass surfaces read clearly on both light/dark token sets.
- CTA + hero sections preserve stacking order (gradient → wave mask → particles → grain → content).
