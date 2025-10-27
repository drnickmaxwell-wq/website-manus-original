# St Mary's House Champagne Palette (Locked)

The Champagne brand core is frozen at the values below. Only the repository owner may approve edits to these files.

## Color Tokens

| Token | Role | Value |
| --- | --- | --- |
| `--smh-primary-magenta` | Primary brand magenta | `#C2185B` |
| `--smh-primary-teal` | Primary brand teal | `#40C4B4` |
| `--smh-accent-gold` | Metallic accent gold | `#D4AF37` |
| `--smh-gold` | Champagne soft gold | `#F9E8C3` |
| `--smh-gradient` | Signature diagonal gradient | `linear-gradient(135deg, #D94BC6 0%, #00C2C7 100%)` |
| `--smh-gradient-cta` | CTA gradient blend | `linear-gradient(135deg, #C2185B 0%, #F9E8C3 100%)` |

Surface tokens:

- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Text muted: `#4C4C4C`
- Dark background: `#0D0E10`
- Dark gradient: `linear-gradient(135deg, #EE66D1 0%, #00D6DB 100%)`

## Usage Rules

1. Components must consume palette values through CSS variables, the Tailwind bridge utilities, or the JSON token twin (`styles/tokens/smh-champagne.tokens.json`).
2. Never hard-code the Champagne hex values in application code. Use the tokens defined in `styles/tokens/smh-champagne-tokens.css` or import the JSON twin for runtime needs.
3. Gradients must use `var(--smh-gradient)` for hero/background treatments and `var(--smh-gradient-cta)` for CTA layers. Do not recreate the gradient angle manually.
4. All palette updates require owner approval via CODEOWNERS and must pass the `pnpm brand:check` script.

## Integration Checklist

- [x] `app/layout.tsx` imports the CSS token sheet.
- [x] `app/globals.css` exposes Tailwind utility bridges for brand usage.
- [x] `package.json` includes `brand:check` in the build pipeline.
- [x] `scripts/brand-guard.mjs` blocks raw hex or rogue gradients.
