/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const ROOT = process.cwd();
const P = (p)=> path.join(ROOT,"public",p);
const files = [
"textures/film-grain-desktop.webp","textures/film-grain-mobile.webp",
"textures/film-grain-dark.webp","textures/film-grain-mobile-dark.webp",
"textures/particles-gold.webp","textures/particles-gold-mobile.webp",
"textures/particles-gold-dark.webp","textures/particles-gold-mobile-dark.webp",
"textures/particles-teal.webp","textures/particles-teal-mobile.webp",
"textures/particles-teal-dark.webp","textures/particles-teal-mobile-dark.webp",
"textures/particles-magenta.webp","textures/particles-magenta-mobile.webp",
"textures/particles-magenta-dark.webp","textures/particles-magenta-mobile-dark.webp",
"overlays/glow-dust.webp","overlays/glow-dust-mobile.webp",
"overlays/glow-dust-dark.webp","overlays/glow-dust-mobile-dark.webp",
"gradients/hero-gradient-fallback.webp","gradients/hero-gradient-fallback-dark.webp",
"waves/smh-wave-mask.svg","waves/smh-wave-fill.svg"
];
const rows = files.map(f=>{
try { const s=fs.statSync(P(f)).size; return [f, s, s>=5000?"✅ real":"⚠️ small"]; }
catch { return [f, "-", "❌ missing"]; }
});
console.table(rows);
const ok = rows.filter(r=>r[2]==="✅ real").length;
console.log(`Verified real assets: ${ok}/${files.length}`);
