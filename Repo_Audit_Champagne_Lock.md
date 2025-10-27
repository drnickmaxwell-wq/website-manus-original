# Champagne Lock Audit – website-manus-original

## 1. Structure Map
### 1.1 App Router & Global Shell
- **Root layout** wires the App Router, loads global styles/tokens, and mounts shared providers (theme, chat, chatbot) while still instantiating Montserrat and Lora font variables.【F:app/layout.tsx†L1-L135】
- **Global CSS** imports Tailwind v4, sets light theme tokens, and applies Montserrat/Lora stacks site-wide; brand texture helpers are mixed in via `styles/brand/champagne-textures.css`.【F:app/globals.css†L1-L188】
- **Champagne token sheet** exposes gradient, motion, wave-mask, and overlay utilities that downstream components are expected to consume via CSS variables.【F:styles/tokens/smh-champagne-tokens.css†L1-L205】
- **Layout wrapper** injects the persistent header/footer chrome around page children.【F:components/layout/layout-wrapper.tsx†L1-L24】

### 1.2 Routes & Layouts (App Router)
| Scope | Files | Notes |
| --- | --- | --- |
| Site root | `app/page.tsx` | Home composes `<HeroSection /> → <ServicesSection /> → <AboutSection /> → <TestimonialsSection /> → <CTASection />` inside the shared layout.【F:app/page.tsx†L1-L17】 |
| Treatments hub | `app/treatments/page.tsx`, `app/treatments/[group]/page.tsx` examples | Every treatment screen shares `TreatmentLayout`, which supplies the gradient + wave hero and CTA buttons before rendering group-specific subnav/content shells.【F:app/treatments/page.tsx†L1-L16】【F:app/treatments/technology/page.tsx†L1-L25】【F:components/treatments/TreatmentLayout.tsx†L13-L41】 |
| 3D showcase | `app/3d-showcase/page.tsx` | Standalone canvas viewer entry with basic heading/intro copy.【F:app/3d-showcase/page.tsx†L1-L13】 |
| Champagne diagnostics | `app/champagne/page.tsx` & redirect guard `app/__champagne-check/page.tsx` | Client utility screens that audit overlay assets and demonstrate proper gradient→mask→grain→particles stacking.【F:app/champagne/page.tsx†L1-L116】【F:app/__champagne-check/page.tsx†L1-L10】 |
| Admin area | `app/admin/layout.tsx`, `app/admin/page.tsx`, `app/admin/appointments/page.tsx` | Client-only dashboard layout with animated sidebar and rich mock data cards/tables for back-office flows.【F:app/admin/layout.tsx†L1-L170】【F:app/admin/page.tsx†L1-L200】【F:app/admin/appointments/page.tsx†L1-L160】 |
| API surface | `app/api/champagne-audit/route.ts` | Server route that verifies presence/size of champagne overlay assets and token imports.【F:app/api/champagne-audit/route.ts†L1-L128】 |

### 1.3 Shared Systems & Scripts
- **Overlay runtime** generates particle/grain canvases and hydrates CSS vars when physical assets are missing, backing up the champagne effect pipeline.【F:lib/visual/champagneOverlays.ts†L1-L184】
- **Tailwind config** maps Tailwind tokens to champagne CSS variables and exposes `fontFamily.heading/body/data` hooks.【F:tailwind.config.ts†L1-L38】
- **npm scripts** cover Turbopack dev/build, ESLint, and champagne asset generation/audit utilities; pnpm is the documented package manager with Node ≥18.17 requirement.【F:package.json†L5-L75】【F:README.md†L16-L36】

## 2. Build Health Snapshot
- **Framework**: Next.js 15.5.2 with React 19.1.0 and Turbopack dev/build scripts already defined.【F:package.json†L5-L49】
- **Styling**: Tailwind CSS v4 (`tailwindcss@^4`) mapped to champagne tokens plus `tw-animate-css`; no Prettier config is present so formatting is manual.【F:package.json†L5-L75】【F:tailwind.config.ts†L1-L38】
- **Linting/Type safety**: ESLint 9 with `eslint-config-next`, TypeScript 5, and Sharp included for image optimization.【F:package.json†L61-L75】
- **Node toolchain**: README locks Node.js 18.17+ and pnpm for install/run flows.【F:README.md†L16-L36】

## 3. Brand Compliance Audit
### 3.1 Typography
- Site-wide fonts still import Montserrat (headings) and Lora (body) instead of the Playfair Display + Inter mandate; tokens echo the same legacy stack and only the data font resolves to Inter.【F:app/layout.tsx†L1-L31】【F:app/globals.css†L1-L188】【F:styles/tokens/smh-champagne-tokens.css†L34-L37】
- Numerous components (Hero headline classes, Tailwind utilities) assume Montserrat sizing, so swapping to Playfair/Inter will require both token updates and utility revisions.【F:app/globals.css†L147-L186】

### 3.2 Gradient & Gold Treatments
- Champagne tokens correctly define the brand gradient at 135° via `var(--smh-gradient)` and the champagne gold `var(--smh-gold)`, but implementation leans on Tailwind `bg-gradient-to-r` shorthands (0°/90°) and a metallic var(--smh-accent-gold) accent in buttons, CTAs, and header bars.【F:styles/tokens/smh-champagne-tokens.css†L3-L21】【F:components/features/hero-section.tsx†L77-L210】【F:components/features/cta-section.tsx†L88-L224】【F:components/layout/header.tsx†L70-L143】【F:components/ui/luxury-button.tsx†L23-L139】
- Gold CTAs and badges rely on var(--smh-accent-gold) gradients instead of the softer `var(--smh-gold)` champagne tone specified in the brand lock.【F:styles/tokens/smh-champagne-tokens.css†L3-L24】【F:components/features/cta-section.tsx†L188-L224】

### 3.3 Layer Stack (Gradient → Wave Mask → Particles → Film Grain → Content)
- Treatment pages adhere to the prescribed layering via `smh-gradient-bg smh-wave-mask` plus film-grain/particle overlays before content.【F:components/treatments/TreatmentLayout.tsx†L17-L35】
- Home hero relies on bespoke Framer layers (`SparkleSystem`, floating gradients) and an SVG footer wave instead of the wave mask + film grain stack.【F:components/features/hero-section.tsx†L77-L259】
- Final CTA likewise applies simple background gradients and floating dots without wave masking or `smh-film-grain` overlays.【F:components/features/cta-section.tsx†L88-L259】
- The champagne diagnostics page and chat overlay demonstrate correct usage of the layer utilities; these can be used as implementation references.【F:app/champagne/page.tsx†L101-L112】【F:components/chat/ChatOverlay.tsx†L24-L55】

### 3.4 Motion & Interaction
- Hero parallax scroll maps 0→150px vertical offset, greatly exceeding the ≤6px parallax tolerance; easing falls back to Framer defaults (`easeOut`, `easeInOut`) rather than the mandated `easeInOutCubic` family.【F:components/features/hero-section.tsx†L28-L75】
- Luxury buttons add ripple animations on click without checking `prefers-reduced-motion`, and hover scales to 1.05 (higher than subtle magnetism).【F:components/ui/luxury-button.tsx†L38-L185】
- Global CSS removes animations when `prefers-reduced-motion` is set, but bespoke Framer sequences in hero, header, and admin dashboards ignore the flag and should be wrapped with conditional logic.【F:app/globals.css†L200-L220】【F:components/features/hero-section.tsx†L45-L240】【F:components/layout/header.tsx†L70-L200】

## 4. Page Inventory & Section Order
| Route | Section Flow |
| --- | --- |
| `/` | Hero → Services → About → Testimonials → CTA (all inside header/footer chrome).【F:app/page.tsx†L1-L17】 |
| `/treatments` | Champagne hero (gradient + wave mask) → placeholder overview card → hidden 3D viewer anchor.【F:app/treatments/page.tsx†L1-L16】【F:components/treatments/TreatmentLayout.tsx†L17-L41】 |
| `/treatments/[group]` (e.g., Technology, Cosmetic) | Shared hero stack → left rail `GroupSubnav` → right content glass card → 3D viewer anchor stub.【F:app/treatments/technology/page.tsx†L1-L25】【F:app/treatments/cosmetic/page.tsx†L1-L25】 |
| `/3d-showcase` | Container → title/subtitle → `<ViewerClient />` canvas mount.【F:app/3d-showcase/page.tsx†L1-L13】 |
| `/champagne` | Asset audit table → explanatory text → demo hero featuring the full gradient/mask/overlay stack.【F:app/champagne/page.tsx†L71-L114】 |
| `/admin` | Dashboard header → stat cards grid → revenue line chart + treatment pie chart → patient experience timeline → appointment table, all under the admin layout shell.【F:app/admin/layout.tsx†L46-L168】【F:app/admin/page.tsx†L1-L200】 |
| `/admin/appointments` | Filters/search toolbar → schedule timeline grid → appointment cards table with status chips.【F:app/admin/appointments/page.tsx†L24-L151】 |
| `/patient-info` | Simple heading + summary placeholder pending build-out.【F:app/patient-info/page.tsx†L1-L9】 |

## 5. Drift Report
- **Typography drift** – Montserrat/Lora remain the global stacks; Playfair Display for headings and Inter for body copy must replace them in tokens, global CSS, and `next/font` imports.【F:app/layout.tsx†L1-L31】【F:app/globals.css†L1-L188】【F:styles/tokens/smh-champagne-tokens.css†L34-L37】
- **Gradient direction drift** – Hero, header banners, CTA buttons, and badges use `bg-gradient-to-r`/`bg-gradient-to-br` utilities, losing the 135° signature gradient angle; refactor to consume `--smh-gradient` via `.smh-gradient-bg` or equivalent custom classes.【F:styles/tokens/smh-champagne-tokens.css†L16-L86】【F:components/features/hero-section.tsx†L77-L210】【F:components/layout/header.tsx†L70-L143】【F:components/features/cta-section.tsx†L88-L224】
- **Gold tone drift** – Active gold tokens and CTAs lean on var(--smh-accent-gold) and bright metallic variants instead of the champagne `var(--smh-gold)` accent noted in the brand lock; update token values and dependent gradients/badges.【F:styles/tokens/smh-champagne-tokens.css†L3-L24】【F:components/features/cta-section.tsx†L188-L224】
- **Layering gaps** – Home hero and final CTA omit the wave mask plus film grain/particle overlays; adopt the TreatmentLayout or BrandHeroGradient stack to re-align layers.【F:components/features/hero-section.tsx†L77-L259】【F:components/features/cta-section.tsx†L88-L259】【F:components/brand/BrandHeroGradient.tsx†L12-L37】
- **Motion overreach** – Parallax (150px), hover lifts (5%), and ripple effects exceed subtle magnetic guidelines and ignore reduced-motion users; throttle amplitudes and guard with the brand easing curve/`prefers-reduced-motion` checks.【F:components/features/hero-section.tsx†L28-L75】【F:components/ui/luxury-button.tsx†L67-L185】
- **Accessibility gaps** – Header marquees and CTA gradients rely on low-contrast light-on-gradient palettes; ensure new gold/gradient treatments retain WCAG contrast when migrating to Playfair/Inter typography.【F:components/layout/header.tsx†L70-L143】【F:components/features/cta-section.tsx†L88-L224】

## 6. Asset Index (Wave, Overlay, Particle, Gradient)
| Asset | Size (bytes) | Notes |
| --- | --- | --- |
| `public/waves/smh-wave-mask.svg` | 292 | Primary mask referenced by tokens; ensure hero/CTA reuse it.【91eeb6†L1-L8】 |
| `public/waves/smh-wave-hero-desktop.webp` / `smh-wave-hero-mobile.webp` / `smh-wave-cta.webp` / `smh-wave-footer.webp` | 5,300–5,940 | Ready-made masked wave backgrounds for different breakpoints.【91eeb6†L1-L8】 |
| `public/overlays/glow-dust*.webp` (desktop/mobile/dark) | 83,630–97,542 | Glow dust overlays used by champagne effects; mobile/dark variants shipped.【36be1b†L1-L7】 |
| `public/textures/film-grain*.webp` (light/dark/desktop/mobile) | 12,670–1,378,890 | Film grain textures with both fallback and high-res variants; ensure ≥1 KB requirement for audit pass.【2e37f5†L1-L24】 |
| `public/textures/particles-{gold,teal,magenta}*.webp` | 43,298–53,912 | Particle fields for light/dark and mobile/desktop scenarios.【2e37f5†L1-L24】 |
| `public/gradients/hero-gradient-fallback*.webp` | 29,692–51,898 | Static gradient fallbacks referenced by the champagne audit route.【e7abfa†L1-L4】【F:app/api/champagne-audit/route.ts†L17-L41】 |

## 7. Manus Handoff Prompts
- **Homepage cinematic refresh** – Update `app/page.tsx` sections to consume the champagne layer utilities: wrap `<HeroSection />` content in a `BrandHeroGradient` or `smh-gradient-bg smh-wave-mask` container, ensure Playfair Display/Inter replace legacy font tokens, and feed CTA/buttons the 135° gradient + champagne gold per `styles/tokens/smh-champagne-tokens.css`.【F:app/page.tsx†L1-L17】【F:styles/tokens/smh-champagne-tokens.css†L16-L205】
- **Technology treatments page** – In `app/treatments/technology/page.tsx`, populate the glass card with real equipment copy, keep the left `GroupSubnav`, and layer in interactive tech modules while preserving the TreatmentLayout mask/overlay stack and updated typography tokens.【F:app/treatments/technology/page.tsx†L1-L25】【F:components/treatments/TreatmentLayout.tsx†L17-L41】
- **Comprehensive treatments overview** – Replace the placeholder content in `app/treatments/page.tsx` with curated Playfair/Inter storytelling, champagne-gradient CTA chips, and masked divider waves so the hub matches the brand lock before deep-linking into subpages.【F:app/treatments/page.tsx†L1-L16】【F:styles/tokens/smh-champagne-tokens.css†L16-L205】
