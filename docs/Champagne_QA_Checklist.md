# Champagne QA Checklist

1. **Fonts** – Confirm Playfair Display & Inter load from `next/font` without FOUT and that headings/body inherit the correct CSS variables.
2. **Gradient Layer** – Validate `.smh-gradient-bg` renders at 135° magenta → turquoise on hero and CTA sections.
3. **Mask Integrity** – Ensure `.smh-wave-mask` clips the gradient without jagged edges across desktop/mobile breakpoints.
4. **Particles Placement** – Check `.smh-particles-*` overlays sit beneath content but above the gradient (no overlap on interactive elements).
5. **Film Grain** – Verify `.smh-film-grain` opacity matches tokens and respects `prefers-reduced-motion` (no jitter when disabled).
6. **Parallax Guardrails** – Scroll-test hero content to confirm vertical shift never exceeds 6px and is disabled when reduced motion is on.
7. **Easing Consistency** – Inspect framer-motion transitions to ensure the cubic-bezier `[0.65, 0.05, 0.36, 1]` easing is applied to fades/movements.
8. **Gold Treatments** – Review `.smh-gold-border` + `.smh-glass` surfaces for consistent colour (`var(--smh-gold)`) and blur across cards/badges.
9. **CTA Interactivity** – Hover buttons & cards to confirm gradient/gold focus states remain legible and accessible (sufficient contrast).
10. **Docs & Scripts** – Confirm `npm run format` is available, `node_modules` is ignored, and new documentation is present under `/docs`.
