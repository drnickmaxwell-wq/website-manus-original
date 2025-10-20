import { NextResponse } from "next/server";
import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = process.cwd();
const P = (...p: string[]) => path.join(ROOT, "public", ...p);

const ASSETS = [
  ["textures","film-grain-desktop.webp"],
  ["textures","film-grain-mobile.webp"],
  ["textures","film-grain-dark.webp"],
  ["textures","film-grain-mobile-dark.webp"],
  ["textures","particles-gold.webp"],
  ["textures","particles-gold-mobile.webp"],
  ["textures","particles-teal.webp"],
  ["textures","particles-teal-mobile.webp"],
  ["textures","particles-magenta.webp"],
  ["textures","particles-magenta-mobile.webp"],
  ["overlays","glow-dust.webp"],
  ["overlays","glow-dust-dark.webp"],
  ["overlays","glow-dust-mobile.webp"],
  ["gradients","hero-gradient-fallback.webp"],
  ["gradients","hero-gradient-fallback-dark.webp"],
  ["waves","smh-wave-mask.svg"],
];

function statSafe(fp: string){
  try {
    const s = fs.statSync(fp);
    return { exists: s.isFile(), size: s.size };
  } catch {
    return { exists: false, size: 0 };
  }
}

export async function GET(){
  const results = ASSETS.map(parts => {
    const rel = path.join(...parts);
    const abs = P(...parts);
    const { exists, size } = statSafe(abs);
    return { path: "/"+rel.replace(/\\\\/g,"/"), exists, size };
  });

  // detect if tokens file is present and likely imported from layout
  const tokensFile = path.join(ROOT, "styles", "tokens", "smh-champagne-tokens.css");
  const tokensExists = fs.existsSync(tokensFile);
  const layoutCandidates = [
    path.join(ROOT, "app", "layout.tsx"),
    path.join(ROOT, "src", "app", "layout.tsx"),
  ];
  let tokensImported = false;
  for (const lc of layoutCandidates){
    if (fs.existsSync(lc)) {
      const text = fs.readFileSync(lc, "utf8");
      if (text.includes('import "../styles/tokens/smh-champagne-tokens.css";')) {
        tokensImported = true;
        break;
      }
    }
  }

  return NextResponse.json({
    ok: true,
    appRoot: fs.existsSync(path.join(ROOT,"app")) ? "/app" : (fs.existsSync(path.join(ROOT,"src","app")) ? "/src/app" : "/app"),
    tokens: { tokensExists, tokensImported },
    assets: results,
    missing: results.filter(r => !r.exists).map(r => r.path),
  });
}
