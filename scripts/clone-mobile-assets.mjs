// scripts/clone-mobile-assets.mjs
// Minimal Node copier: duplicates desktop textures to mobile names.

import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

const pairs = [
  { from: "public/textures/particles-gold.webp",    to: "public/textures/particles-gold-mobile.webp" },
  { from: "public/textures/particles-teal.webp",    to: "public/textures/particles-teal-mobile.webp" },
  { from: "public/textures/particles-magenta.webp", to: "public/textures/particles-magenta-mobile.webp" },
  { from: "public/overlays/glow-dust-dark.webp",    to: "public/overlays/glow-dust-mobile-dark.webp" },
];

for (const { from, to } of pairs) {
  const dir = dirname(to);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(from)) throw new Error(`Source missing: ${from}`);
  copyFileSync(from, to);
  // eslint-disable-next-line no-console
  console.log(`Cloned -> ${to}`);
}

console.log("Mobile texture placeholders created.");
