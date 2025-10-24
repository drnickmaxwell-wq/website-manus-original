"use client";

/**
 * Champagne overlay/texture runtime generator.
 * - Paints film-grain + particle fields to canvas.
 * - Exports WebP data URLs and caches in localStorage.
 * - Exposes helpers to set CSS vars as fallbacks.
 */

type Variant = "light" | "dark";
type Kind = "grain" | "gold" | "teal" | "magenta";

const VERSION = "v2025.10.22"; // bump to regenerate
const MIN_ASSET_SIZE = 1024; // mirror server-side probe threshold

async function assetHasRealFile(pathname: string) {
  try {
    const res = await fetch(pathname, { method: "HEAD", cache: "no-store" });
    if (!res.ok) return false;
    const len = res.headers.get("content-length");
    if (!len) return false;
    const size = Number.parseInt(len, 10);
    return !Number.isNaN(size) && size >= MIN_ASSET_SIZE;
  } catch {
    return false;
  }
}

function key(kind: Kind, variant: Variant, mobile: boolean) {
  return `SMH_CHAMPAGNE_${VERSION}_${kind}_${variant}_${mobile ? "m" : "d"}`;
}

function makeCanvas(w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: false })!;
  // crisp export
  const smoothingCtx = ctx as CanvasRenderingContext2D & {
    imageSmoothingEnabled?: boolean;
  };
  smoothingCtx.imageSmoothingEnabled = true;
  return { c, ctx };
}

function rand(seed: number) {
  // xorshift-ish deterministic RNG
  let x = seed || 1234567;
  return () => (x ^= x << 13, x ^= x >> 17, x ^= x << 5, (x >>> 0) / 0xffffffff);
}

function paintGrain(ctx: CanvasRenderingContext2D, w: number, h: number, variant: Variant) {
  // soft grain: sparse noise + subtle vignetting
  const r = rand(variant === "dark" ? 901 : 701);
  const imgData = ctx.createImageData(w, h);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const n = (r() * 255) | 0;
    // low-contrast jitter
    const v = variant === "dark" ? 10 + (n % 8) : 6 + (n % 6);
    imgData.data[i] = v; imgData.data[i + 1] = v; imgData.data[i + 2] = v; imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);

  // soft vignette towards edges
  const grd = ctx.createRadialGradient(w/2, h/2, Math.min(w,h)*0.15, w/2, h/2, Math.max(w,h)*0.6);
  grd.addColorStop(0, "rgba(0,0,0,0)");
  grd.addColorStop(1, "rgba(0,0,0,0.05)");
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,w,h);
}

function particleColor(kind: Kind, variant: Variant) {
  const alpha = variant === "dark" ? 0.16 : 0.18;
  switch (kind) {
    case "gold": return `rgba(212,175,55,${alpha})`;
    case "teal": return `rgba(64,196,180,${alpha})`;
    case "magenta": return `rgba(194,24,91,${alpha})`;
    default: return `rgba(255,255,255,${alpha})`;
  }
}

function paintParticles(ctx: CanvasRenderingContext2D, w: number, h: number, kind: Kind, variant: Variant) {
  const dots = Math.round((w * h) / 38000); // density scales with area
  const r = rand(kind.length * 100 + (variant === "dark" ? 37 : 11));
  ctx.fillStyle = particleColor(kind, variant);
  for (let i = 0; i < dots; i++) {
    const x = r() * w;
    const y = r() * h;
    const s = 0.6 + r() * 1.8; // size
    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
    // tiny glow
    ctx.fillStyle = particleColor(kind, variant);
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.arc(x, y, s * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

async function toWebPURL(canvas: HTMLCanvasElement, quality = 0.8): Promise<string> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve("");
        return;
      }
      // Convert to data URL so we can store in localStorage if needed
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.readAsDataURL(blob);
    }, "image/webp", quality);
  });
}

async function generate(kind: Kind, variant: Variant, mobile: boolean) {
  const w = mobile ? 900 : 2048;
  const h = mobile ? 1400 : 1152;
  const { c, ctx } = makeCanvas(w, h);
  if (kind === "grain") {
    paintGrain(ctx, w, h, variant);
  } else {
    // clear (transparent) then sprinkle particles
    ctx.clearRect(0,0,w,h);
    paintParticles(ctx, w, h, kind, variant);
  }
  const dataURL = await toWebPURL(c, 0.82);
  return dataURL;
}

type AssetConfig = {
  kind: Kind;
  variant: Variant;
  mobile: boolean;
  cssVar: string;
  path: string;
};

const ASSET_CONFIG: AssetConfig[] = [
  { kind: "grain", variant: "light", mobile: false, cssVar: "--smh-film-grain-desktop-url", path: "/textures/film-grain-desktop.webp" },
  { kind: "grain", variant: "light", mobile: true, cssVar: "--smh-film-grain-mobile-url", path: "/textures/film-grain-mobile.webp" },
  { kind: "grain", variant: "dark", mobile: false, cssVar: "--smh-film-grain-dark-desktop-url", path: "/textures/film-grain-dark.webp" },
  { kind: "grain", variant: "dark", mobile: true, cssVar: "--smh-film-grain-dark-mobile-url", path: "/textures/film-grain-mobile-dark.webp" },

  { kind: "gold", variant: "light", mobile: false, cssVar: "--smh-particles-gold-desktop-url", path: "/textures/particles-gold.webp" },
  { kind: "gold", variant: "light", mobile: true, cssVar: "--smh-particles-gold-mobile-url", path: "/textures/particles-gold-mobile.webp" },
  { kind: "gold", variant: "dark", mobile: false, cssVar: "--smh-particles-gold-dark-desktop-url", path: "/textures/particles-gold-dark.webp" },
  { kind: "gold", variant: "dark", mobile: true, cssVar: "--smh-particles-gold-dark-mobile-url", path: "/textures/particles-gold-mobile-dark.webp" },

  { kind: "teal", variant: "light", mobile: false, cssVar: "--smh-particles-teal-desktop-url", path: "/textures/particles-teal.webp" },
  { kind: "teal", variant: "light", mobile: true, cssVar: "--smh-particles-teal-mobile-url", path: "/textures/particles-teal-mobile.webp" },
  { kind: "teal", variant: "dark", mobile: false, cssVar: "--smh-particles-teal-dark-desktop-url", path: "/textures/particles-teal-dark.webp" },
  { kind: "teal", variant: "dark", mobile: true, cssVar: "--smh-particles-teal-dark-mobile-url", path: "/textures/particles-teal-mobile-dark.webp" },

  { kind: "magenta", variant: "light", mobile: false, cssVar: "--smh-particles-magenta-desktop-url", path: "/textures/particles-magenta.webp" },
  { kind: "magenta", variant: "light", mobile: true, cssVar: "--smh-particles-magenta-mobile-url", path: "/textures/particles-magenta-mobile.webp" },
  { kind: "magenta", variant: "dark", mobile: false, cssVar: "--smh-particles-magenta-dark-desktop-url", path: "/textures/particles-magenta-dark.webp" },
  { kind: "magenta", variant: "dark", mobile: true, cssVar: "--smh-particles-magenta-dark-mobile-url", path: "/textures/particles-magenta-mobile-dark.webp" },
];

export async function ensureChampagneCSSVars() {
  if (typeof window === "undefined") return; // server safety
  const root = document.documentElement;
  for (const asset of ASSET_CONFIG) {
    const { kind, variant, mobile, cssVar, path } = asset;
    if (await assetHasRealFile(path)) {
      root.style.removeProperty(cssVar);
      continue;
    }
    const k = key(kind, variant, mobile);
    let url = localStorage.getItem(k);
    if (!url) {
      url = await generate(kind, variant, mobile);
      localStorage.setItem(k, url);
    }
    root.style.setProperty(cssVar, `url("${url}")`);
  }
}

export function champagneReady() {
  // No-op gate for diagnostics to call after setting vars
  return true;
}
