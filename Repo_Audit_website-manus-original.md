# Repo Audit — website-manus-original

## Quick Verdict
- **Build readiness: Needs work.** The codebase targets the right Next.js/React generation and ships a comprehensive component library, but conflicting lockfiles, committed `node_modules`, disabled lint/type gates, and numerous placeholder assets/routes mean the project will not build or render a finished experience without cleanup and content completion.【F:package.json†L5-L75】【F:next.config.js†L2-L8】【2f8b45†L1-L7】【F:app/treatments/implants/page.tsx†L1-L21】【F:app/patient-info/page.tsx†L1-L9】

## Commands
- **Node & package manager assumptions:** Next 15.5 requires Node 18.18+; adopt Node 20 LTS. Prefer pnpm (lockfile present) but reconcile or remove the stray npm lock and tracked `node_modules` before installs.【F:package.json†L43-L49】【2f8b45†L1-L7】
- **Install:** `pnpm install`
- **Build:** `pnpm run build`
- **Dev:** `pnpm run dev`
- **Optional diagnostics:** `pnpm run audit:champagne` (checks overlay assets) and `pnpm run gen:champagne` (regenerates Champagne overlays).【F:package.json†L6-L13】

## Structure Map
- **Top level:** App Router Next.js project with supporting scripts, docs, and brand assets alongside both pnpm and npm locks (resolve duplication).【2f8b45†L1-L7】
- **`app/`:** App Router tree covering marketing (`page.tsx`), Champagne QA, patient info, treatments, admin dashboard, and a 3D showcase placeholder; `/api/champagne-audit` probes overlay assets.【F:app/page.tsx†L1-L19】【d0b1d4†L1-L20】【F:app/api/champagne-audit/route.ts†L1-L128】
- **`components/`:** Extensive UI kit (luxury cards/buttons, Radix wrappers), feature sections (hero/services/about/testimonials/CTA), effects (particles, waves), navigation, AI/chat concierge, treatments scaffolding, and admin panels.【1f97e6†L1-L18】【F:components/features/hero-section.tsx†L1-L200】【F:components/ui/luxury-card.tsx†L1-L187】【F:components/ui/luxury-button.tsx†L1-L186】
- **`lib/`:** Brand theme tokens, utility helpers, overlay runtime generator, analytics and schema helpers.【871ff8†L1-L6】【F:lib/theme.ts†L1-L145】【F:lib/visual/champagneOverlays.ts†L1-L184】
- **`public/`:** Brand logos, gradients, wave masks, Champagne overlays/textures, manifest, generated sitemap/robots, but many hero/testimonial images are stubs and the referenced hero video is absent.【4e09c6†L1-L9】【d63a02†L1-L7】【7c1cde†L1-L6】【bcb30a†L1-L25】【10efe7†L1-L5】【0fef16†L1-L2】
- **`styles/`:** Token maps (`smh-champagne-tokens.css`), overlay utilities, glass/wave helpers, and Tailwind v4 configuration support.【53964a†L1-L5】【F:styles/tokens/smh-champagne-tokens.css†L1-L190】【F:styles/champagne/overlays.css†L1-L85】【c1ddfb†L1-L1】
- **`scripts/`:** Node/TS scripts to regenerate Champagne assets, verify uploads, and clone mobile fallbacks.【54653a†L1-L3】【aa3e48†L1-L157】【badc97†L1-L26】【bc0739†L1-L23】

### Router & Routes
- **Router type:** Next.js App Router (no `pages/` directory). Layout hierarchy begins at `app/layout.tsx` with optional admin-only layout at `app/admin/layout.tsx`.【F:app/layout.tsx†L1-L135】【d0b1d4†L1-L20】
- **Top-level routes:** `/`, `/champagne`, `/__champagne-check` (redirect), `/patient-info` (+ `/blog`, `/leaflets`, `/newsletter`, `/stories`), `/treatments` (+ `/general`, `/cosmetic`, `/3d-dentistry`, `/orthodontics`, `/implants`, `/technology`, `/veneers`), `/admin` (+ `/appointments`), `/3d-showcase`, and `/api/champagne-audit`.
- **Dynamic segments:** None defined yet; treatment sub-links in data point toward deeper nested routes that are not implemented (e.g., `/treatments/general/check-ups`).【F:components/treatments/groups.ts†L1-L56】

## Tech Stack & Config
- **Core:** Next 15.5.2, React 19.1, Tailwind CSS ^4, Framer Motion ^12, GSAP, React Three Fiber, TanStack Query/Table, Zod.【F:package.json†L15-L59】
- **Tooling:** ESLint 9 + `next/core-web-vitals` flat config; Prettier absent. PostCSS loads Tailwind-only. TypeScript strict (no emit) but build ignores type and lint errors via Next config, hiding issues until runtime.【F:eslint.config.mjs†L1-L26】【6d19b4†L1-L5】【F:tsconfig.json†L2-L39】【F:next.config.js†L2-L8】
- **Styling tokens:** Tailwind extends CSS custom properties pointing to Champagne token file; global CSS imports Tailwind, tw-animate, and brand texture sheets while defining Montserrat/Lora font stacks, radius, gradients, and brand CSS variables.【F:tailwind.config.ts†L3-L36】【F:styles/tokens/smh-champagne-tokens.css†L1-L188】【F:app/globals.css†L1-L200】
- **Brand effects:** Dedicated overlay CSS for gradient (135° magenta→teal), film grain, particles, glow, and wave masks; runtime generator ensures fallbacks if assets missing.【F:styles/champagne/overlays.css†L1-L85】【F:styles/brand/champagne-textures.css†L1-L27】【F:lib/visual/champagneOverlays.ts†L13-L184】
- **CI / Hosting:** No GitHub Actions or Vercel config checked in.
- **Images:** `images.unoptimized` disables Next image optimization—consider re-enabling once assets stabilize.【F:next.config.js†L2-L8】

## Page Inventory & Section Order
- **Homepage (`/`):** `LayoutWrapper` → Hero (stats, CTA, particle/grain overlays) → Services grid (luxury cards, off-brand emergency colors) → About (achievement badges, story, CTA buttons) → Testimonials carousel (stats row, video toggle placeholder) → CTA section (contact cards, guarantees).【F:app/page.tsx†L1-L17】【F:components/features/hero-section.tsx†L1-L200】【F:components/features/services-section.tsx†L1-L200】【F:components/features/about-section.tsx†L1-L200】【F:components/features/testimonials-section.tsx†L1-L200】【F:components/features/cta-section.tsx†L1-L200】
- **Treatments hub (`/treatments`):** `TreatmentLayout` supplies Champagne hero (wave mask, overlays, CTA buttons) with placeholder body copy; same structure for each specialty page with `GroupSubnav` sticky navigation and empty content panels.【F:components/treatments/TreatmentLayout.tsx†L1-L41】【F:components/treatments/GroupSubnav.tsx†L1-L29】【F:app/treatments/implants/page.tsx†L1-L21】
- **Patient info (`/patient-info` + subsections):** Simple stubs with headings and placeholder text awaiting real stories/news assets.【F:app/patient-info/page.tsx†L1-L9】【F:app/patient-info/blog/page.tsx†L1-L9】
- **Champagne QA (`/champagne`):** Client page fetches `/api/champagne-audit`, lists each overlay asset with file/fallback status, and renders a proof block stacking gradient, wave mask, grain, particles, and glow layers.【F:app/champagne/page.tsx†L1-L111】
- **Admin (`/admin`):** Dashboard layout with sidebar/topbar, mocked charts (Recharts), stats, alerts; uses bright semantic Tailwind colors. `/admin/appointments` extends layout with slot timeline, filters, and fake data sets.【F:app/admin/layout.tsx†L1-L136】【F:app/admin/page.tsx†L1-L200】【F:app/admin/appointments/page.tsx†L1-L200】
- **3D Showcase (`/3d-showcase`):** Placeholder marketing copy and stub client component awaiting R3F canvas integration.【F:app/3d-showcase/page.tsx†L1-L13】【F:app/3d-showcase/viewer-client.tsx†L1-L6】
- **Chat/AI overlays:** `SimpleChatbot`, `ChatDock`, and `ChatOverlay` wrap the app via `ThemeProvider`/`ChatProvider`, exposing concierge UI with speech toggles and placeholder conversation logic.【F:app/layout.tsx†L7-L133】【F:components/ai/simple-chatbot.tsx†L1-L200】【F:components/chat/ChatDock.tsx†L1-L18】【F:components/chat/ChatOverlay.tsx†L1-L59】

## Design & Brand Conformance
- **Champagne design traits present:**
- Gradient tokens (`var(--smh-gradient)`), gold accent shadows, glass utilities, wave masks, film grain, particles, and glow classes defined and used in treatment hero, overlays, and CTA sections.【F:styles/tokens/smh-champagne-tokens.css†L16-L167】【F:styles/champagne/overlays.css†L1-L85】【F:components/treatments/TreatmentLayout.tsx†L13-L41】【F:components/features/cta-section.tsx†L1-L200】
  - Glassmorphism & shimmer via luxury cards/buttons with motion interactions and gradient trims.【F:components/ui/luxury-card.tsx†L16-L114】【F:components/ui/luxury-button.tsx†L23-L171】
  - Particle systems and floating elements supply ambient motion (Sparkle/Dust/Wave presets).【F:components/effects/particle-system.tsx†L1-L239】【F:components/features/hero-section.tsx†L77-L200】【F:components/features/services-section.tsx†L106-L200】

- **Brand drift findings:**
  - Typography uses Montserrat/Lora from Google Fonts despite brand guideline callouts for Cormorant Garamond + Inter/Poppins; tokens reinforce the same non-approved stack.【F:app/globals.css†L1-L186】【F:styles/tokens/smh-champagne-tokens.css†L34-L37】
  - Several UI states rely on Tailwind blues/reds/purples (`text-blue-600`, `from-blue-500`, `from-purple-500`) in services and admin dashboards; replace with magenta/teal/gold ramp or neutrals.【F:components/features/services-section.tsx†L54-L82】【F:app/admin/page.tsx†L21-L45】【F:app/admin/appointments/page.tsx†L54-L117】
  - Navigation/footer link maps include routes not implemented yet (`/about`, `/fees`, `/contact`, etc.), creating dead ends if surfaced in Manus designs.【F:components/layout/header.tsx†L19-L137】【F:components/layout/footer.tsx†L24-L200】
  - Hero references `/videos/dental-hero.mp4` but `public/videos` only contains a poster image—Manus hero compositions need a replacement motion plate or fallback imagery.【F:components/features/hero-section.tsx†L100-L120】【0fef16†L1-L2】
  - `images.unoptimized` and committed low-byte placeholders (12-byte JPGs, 9-byte WEBMs) hint at missing high-quality assets; expect grain/particle fallbacks to kick in frequently.【F:next.config.js†L2-L8】【bcb30a†L1-L25】【10efe7†L1-L5】

## Asset Index
| Asset | Path | Size |
| --- | --- | --- |
| Wave mask SVG | `public/waves/smh-wave-mask.svg` | 292 B【d63a02†L1-L7】 |
| Wave hero textures | `public/waves/smh-wave-hero-desktop.webp` / `smh-wave-hero-mobile.webp` | ~5.3 KB each【d63a02†L1-L7】 |
| CTA/Footer waves | `public/waves/smh-wave-cta.webp`, `smh-wave-footer.webp` | ~5.9 KB each【d63a02†L1-L7】 |
| Gradient fallbacks | `public/gradients/hero-gradient-fallback.webp` (+dark) | ~29 KB; extra `hero-gradient-soft.webp` 50 KB.【b78eb8†L1-L3】 |
| Film grain overlays | `public/textures/film-grain-*.webp` | 12–17 KB except `film-grain-dark-desktop.webp` at 1.3 MB (optimize).【bcb30a†L1-L11】 |
| Particle fields | `public/textures/particles-{gold,teal,magenta}*.webp` | 43–54 KB; animated WEBM placeholders only 9–12 B (missing loops).【bcb30a†L12-L25】 |
| Glow overlays | `public/overlays/glow-dust*.webp` | 83–97 KB.【7c1cde†L1-L6】 |
| Brand gradients & waves (legacy) | `public/brand/gradients/*.webp`, `public/brand/waves/waves-bg-*.jpg` | 236–382 KB; confirm licensing before reuse.【48d4f3†L1-L7】 |
| Hero poster | `public/videos/hero/hero-poster.jpg` | 15 KB (no accompanying video).【0fef16†L1-L2】 |
| Placeholder imagery | `public/images/*.jpg` | 12 B each—replace with production photography.【10efe7†L1-L5】 |

## Missing/At-Risk Items
- Clean the repository (remove `node_modules`, pick pnpm or npm, ensure lockfile consistency).【2f8b45†L1-L7】
- Provide real hero video/looping particles; current references will 404 or look static.【F:components/features/hero-section.tsx†L100-L120】【0fef16†L1-L2】
- Replace placeholder imagery (`public/images`), animated particle WEBMs, and 12-byte JPGs with production assets to avoid grain fallbacks everywhere.【10efe7†L1-L5】【bcb30a†L15-L21】
- Implement linked routes (`/about`, `/fees`, `/contact`, `/team`, etc.) or adjust navigation/footer to avoid broken IA.【F:components/layout/header.tsx†L19-L137】【F:components/layout/footer.tsx†L24-L200】
- Reintroduce lint/type enforcement (remove `ignoreDuringBuilds` flags) before deployment to catch regressions.【F:next.config.js†L2-L8】
- Swap font stacks to brand-approved Cormorant Garamond + Inter/Poppins and update Tailwind tokens accordingly.【F:app/globals.css†L1-L186】【F:styles/tokens/smh-champagne-tokens.css†L34-L37】
- Normalize color palette in admin/marketing sections to avoid blue/purple drift; rely on magenta/teal/gold gradients from tokens.【F:components/features/services-section.tsx†L54-L82】【F:app/admin/page.tsx†L21-L45】

## Manus AI Handoff Prompts (Next Stage)
1. **Homepage refresh**  
   "Design a Manus homepage hero for St Mary’s House referencing `components/features/hero-section.tsx`. Maintain Champagne gradient `--smh-gradient` and gold accents `--glow-gold` from `styles/tokens/smh-champagne-tokens.css`. Use wave mask `smh-wave-mask.svg` (`styles/champagne/overlays.css`) to clip a responsive video underplate (replace missing `/videos/dental-hero.mp4`). Ensure film grain/particles overlays (`smh-film-grain`, `smh-particles-*`) layer at 6–8% opacity, with low-density particles inspired by `components/effects/particle-system.tsx`. Provide art directions for 1440/1920/2560 widths."【F:components/features/hero-section.tsx†L77-L200】【F:styles/tokens/smh-champagne-tokens.css†L16-L167】【F:styles/champagne/overlays.css†L1-L85】【F:components/effects/particle-system.tsx†L1-L239】
2. **Treatments detail**  
   "For the treatments hub in `app/treatments/page.tsx` and `components/treatments/TreatmentLayout.tsx`, craft Manus guidance for a process-led layout: hero retains Champagne wave/overlay stack (`smh-gradient-bg`, `smh-wave-mask`, `smh-glow`). Outline sections for Process steps, technology callouts, before/after gallery, testimonial quote, and CTA with gold keyline referencing `.smh-gold-border`. Highlight navigation requirements from `components/treatments/GroupSubnav.tsx` and ensure CTA buttons use gradient `LuxuryButton` styling."【F:app/treatments/page.tsx†L1-L17】【F:components/treatments/TreatmentLayout.tsx†L13-L41】【F:components/treatments/GroupSubnav.tsx†L1-L29】【F:components/ui/luxury-button.tsx†L23-L171】
3. **Technology spotlight**  
   "Develop a Manus Technology page concept aligned with `app/treatments/technology/page.tsx` placeholder. Hero should feature scanner/printer imagery framed by glass cards from `components/ui/luxury-card.tsx` (glass variant), with Champagne gradient backdrops and particle overlays (`styles/tokens/smh-champagne-tokens.css`). Include motion guidance using `components/effects/coastal-waves.tsx` and `ParticleSystem` wave presets for subtle ambient movement."【F:app/treatments/technology/page.tsx†L1-L17】【F:components/ui/luxury-card.tsx†L16-L114】【F:styles/tokens/smh-champagne-tokens.css†L16-L167】【F:components/effects/coastal-waves.tsx†L1-L161】【F:components/effects/particle-system.tsx†L1-L239】

## Appendix
- **Environment variables referenced:** `NEXT_PUBLIC_SITE_URL`, `SITE_URL`, `GOOGLE_VERIFICATION_ID`.【F:app/layout.tsx†L55-L95】【F:next-sitemap.config.js†L1-L13】
- **Key npm scripts:** `dev`, `build`, `start`, `lint`, `clone:mobile`, `gen:champagne`, `audit:champagne`, `postinstall`.【F:package.json†L6-L13】
- **Readiness TODOs:**
  - Supply real assets before running `audit:champagne` (script expects ≥1 KB per overlay).【F:app/api/champagne-audit/route.ts†L13-L127】
  - Optimize oversized texture (`film-grain-dark-desktop.webp`) and confirm WEBM loops for particle animations.【bcb30a†L1-L21】
  - Add CI lint/test pipeline once `ignoreDuringBuilds` is removed.

