import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

type Row = { path: string; ok: boolean; size: number | null; error?: string };

const P = (...p: string[]) => path.join(process.cwd(), "public", ...p);

const ASSETS: string[] = [
  "/textures/film-grain-desktop.webp",
  "/textures/film-grain-mobile.webp",
  "/textures/film-grain-dark.webp",
  "/textures/film-grain-mobile-dark.webp",
  "/textures/particles-gold.webp",
  "/textures/particles-gold-mobile.webp",
  "/textures/particles-teal.webp",
  "/textures/particles-teal-mobile.webp",
  "/textures/particles-magenta.webp",
  "/textures/particles-magenta-mobile.webp",
  "/overlays/glow-dust.webp",
  "/overlays/glow-dust-mobile.webp",
  "/overlays/glow-dust-dark.webp",
  "/overlays/glow-dust-mobile-dark.webp",
  "/gradients/hero-gradient-fallback.webp",
  "/gradients/hero-gradient-fallback-dark.webp",
  "/waves/smh-wave-mask.svg",
];

export async function GET() {
  const tokensFile = path.join(process.cwd(), "styles", "tokens", "smh-champagne-tokens.css");
  const layoutFile = path.join(process.cwd(), "app", "layout.tsx");

  // tokens existence
  let tokensExists = false;
  try {
    await fs.access(tokensFile);
    tokensExists = true;
  } catch {}

  // tokens import usage in layout.tsx
  let tokensImported = false;
  try {
    const layout = await fs.readFile(layoutFile, "utf8");
    tokensImported = layout.includes("smh-champagne-tokens.css");
  } catch {}

  // asset checks
  const results: Row[] = [];
  const missing: string[] = [];
  for (const pubPath of ASSETS) {
    const full = P(...pubPath.replace(/^\//, "").split("/"));
    try {
      const stat = await fs.stat(full);
      results.push({ path: pubPath, ok: true, size: stat.size });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      results.push({ path: pubPath, ok: false, size: null, error: message });
      missing.push(pubPath);
    }
  }

  const ok = tokensExists && tokensImported && results.every(r => r.ok);
  return NextResponse.json({ ok, appRoot: process.cwd(), tokens: { tokensExists, tokensImported }, assets: results, missing });
}
