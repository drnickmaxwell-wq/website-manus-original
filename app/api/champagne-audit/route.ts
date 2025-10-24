import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

type Row = {
  path: string;
  ok: boolean;
  size: number | null;
  source: "file" | "fallback";
  error?: string;
};

const MIN_ASSET_SIZE = 1024; // 1 KB sanity guard for real uploads

const P = (...p: string[]) => path.join(process.cwd(), "public", ...p);

const ASSETS: string[] = [
  "/textures/film-grain-desktop.webp",
  "/textures/film-grain-mobile.webp",
  "/textures/film-grain-dark.webp",
  "/textures/film-grain-mobile-dark.webp",
  "/textures/particles-gold.webp",
  "/textures/particles-gold-mobile.webp",
  "/textures/particles-gold-dark.webp",
  "/textures/particles-gold-mobile-dark.webp",
  "/textures/particles-teal.webp",
  "/textures/particles-teal-mobile.webp",
  "/textures/particles-teal-dark.webp",
  "/textures/particles-teal-mobile-dark.webp",
  "/textures/particles-magenta.webp",
  "/textures/particles-magenta-mobile.webp",
  "/textures/particles-magenta-dark.webp",
  "/textures/particles-magenta-mobile-dark.webp",
  "/overlays/glow-dust.webp",
  "/overlays/glow-dust-mobile.webp",
  "/overlays/glow-dust-dark.webp",
  "/overlays/glow-dust-mobile-dark.webp",
  "/gradients/hero-gradient-fallback.webp",
  "/gradients/hero-gradient-fallback-dark.webp",
  "/waves/smh-wave-mask.svg",
];

export async function GET(request: Request) {
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
    let statSize: number | null = null;
    let headSize: number | null = null;
    let headOk = false;
    let error: string | undefined;
    const requiresSizeThreshold = pubPath.endsWith(".webp");

    try {
      const stat = await fs.stat(full);
      statSize = stat.size;
    } catch (statError: unknown) {
      error = statError instanceof Error ? statError.message : String(statError);
    }

    try {
      const head = await fetch(new URL(pubPath, request.url), {
        method: "HEAD",
        cache: "no-store",
      });
      if (head.ok) {
        const len = head.headers.get("content-length");
        if (len) {
          const parsed = Number.parseInt(len, 10);
          if (!Number.isNaN(parsed)) {
            headSize = parsed;
          }
        }
        const effectiveSize = headSize ?? statSize;
        if (!requiresSizeThreshold) {
          headOk = true;
        } else if ((effectiveSize ?? 0) >= MIN_ASSET_SIZE) {
          headOk = true;
        }
      } else {
        error = `HEAD ${head.status}`;
      }
    } catch (headError: unknown) {
      if (!error) {
        error = headError instanceof Error ? headError.message : String(headError);
      }
    }

    const size = headSize ?? statSize;
    const statMeetsThreshold = requiresSizeThreshold
      ? statSize !== null && statSize >= MIN_ASSET_SIZE
      : statSize !== null && statSize > 0;
    const ok = headOk || statMeetsThreshold;
    const source: Row["source"] = ok ? "file" : "fallback";

    results.push({ path: pubPath, ok, size: size ?? null, source, error });
    if (!ok) {
      missing.push(pubPath);
    }
  }

  const ok = tokensExists && tokensImported && results.every((r) => r.ok);
  return NextResponse.json({
    ok,
    appRoot: process.cwd(),
    tokens: { tokensExists, tokensImported },
    assets: results,
    missing,
  });
}
