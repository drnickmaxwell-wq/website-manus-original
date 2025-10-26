"use client";
import { useEffect, useState } from "react";
import { ensureChampagneCSSVars, champagneReady } from "@/lib/visual/champagneOverlays";

type AssetDefinition = { label: string; path: string };

type AuditRow = { path: string; source: "file" | "fallback" };

const ASSETS: AssetDefinition[] = [
  { label: "Film grain (desktop)", path: "/textures/film-grain-desktop.webp" },
  { label: "Film grain (mobile)", path: "/textures/film-grain-mobile.webp" },
  { label: "Film grain DARK (desktop)", path: "/textures/film-grain-dark.webp" },
  { label: "Film grain DARK (mobile)", path: "/textures/film-grain-mobile-dark.webp" },

  { label: "Particles GOLD (desktop)", path: "/textures/particles-gold.webp" },
  { label: "Particles GOLD (mobile)", path: "/textures/particles-gold-mobile.webp" },
  { label: "Particles GOLD DARK (desktop)", path: "/textures/particles-gold-dark.webp" },
  { label: "Particles GOLD DARK (mobile)", path: "/textures/particles-gold-mobile-dark.webp" },

  { label: "Particles TEAL (desktop)", path: "/textures/particles-teal.webp" },
  { label: "Particles TEAL (mobile)", path: "/textures/particles-teal-mobile.webp" },
  { label: "Particles TEAL DARK (desktop)", path: "/textures/particles-teal-dark.webp" },
  { label: "Particles TEAL DARK (mobile)", path: "/textures/particles-teal-mobile-dark.webp" },

  { label: "Particles MAGENTA (desktop)", path: "/textures/particles-magenta.webp" },
  { label: "Particles MAGENTA (mobile)", path: "/textures/particles-magenta-mobile.webp" },
  { label: "Particles MAGENTA DARK (desktop)", path: "/textures/particles-magenta-dark.webp" },
  { label: "Particles MAGENTA DARK (mobile)", path: "/textures/particles-magenta-mobile-dark.webp" },

  { label: "Glow dust (desktop)", path: "/overlays/glow-dust.webp" },
  { label: "Glow dust (mobile)", path: "/overlays/glow-dust-mobile.webp" },
  { label: "Glow dust DARK (desktop)", path: "/overlays/glow-dust-dark.webp" },
  { label: "Glow dust DARK (mobile)", path: "/overlays/glow-dust-mobile-dark.webp" },

  { label: "Wave Mask SVG", path: "/waves/smh-wave-mask.svg" },
];

export default function Page() {
  const [rows, setRows] = useState<Array<{ label: string; source: AuditRow["source"] }>>([]);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      await ensureChampagneCSSVars();
      champagneReady();

      try {
        const res = await fetch("/api/champagne-audit", { cache: "no-store" });
        if (!res.ok) throw new Error(`Audit failed: ${res.status}`);
        const data: { assets?: AuditRow[] } = await res.json();
        const map = new Map((data.assets ?? []).map((asset) => [asset.path, asset.source]));
        const mapped = ASSETS.map((asset) => ({
          label: asset.label,
          source: map.get(asset.path) ?? "fallback",
        }));
        if (!cancelled) setRows(mapped);
      } catch {
        if (!cancelled) {
          setRows(ASSETS.map((asset) => ({ label: asset.label, source: "fallback" as const })));
        }
      }
    }

    hydrate();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="smh-heading text-2xl md:text-3xl">Champagne Visual Diagnostics</h1>
      <p className="smh-text-dim mt-2">This page shows whether each overlay is using a real file or a generated fallback.</p>
      <table className="w-full mt-6 text-sm">
        <thead><tr><th className="text-left py-2">Asset</th><th className="text-left py-2">Source</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t border-white/10">
              <td className="py-2">{r.label}</td>
              <td className="py-2">
                {r.source === "file" ? (
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    File / default
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                    Canvas fallback (runtime)
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 p-4 rounded-lg border smh-gold-border">
        <div className="text-sm opacity-80">Computed gradient:</div>
        <div className="mt-2 h-10 rounded smh-gradient-bg" />
      </div>

      <p className="mt-3 text-xs text-white/60">
        Missing variants will display the Canvas fallback until real uploads are available.
      </p>

      <section className="mt-10">
        <h2 className="smh-heading text-xl">Visual Proof</h2>
        <div className="relative mt-4 overflow-hidden rounded-2xl" style={{ minHeight: "36vh" }}>
          <div className="smh-hero-gradient smh-wave-mask h-full" aria-hidden />
          <div className="smh-film-grain pointer-events-none absolute inset-0 mix-blend-overlay" aria-hidden />
          <div className="smh-particles-gold pointer-events-none absolute inset-0 mix-blend-screen" aria-hidden />
          <div className="smh-particles-teal pointer-events-none absolute inset-0 mix-blend-screen" aria-hidden />
          <div className="smh-particles-magenta pointer-events-none absolute inset-0 mix-blend-screen" aria-hidden />
          <div className="smh-glow-dust pointer-events-none absolute inset-0 mix-blend-screen opacity-40" aria-hidden />
          <div className="relative z-10 p-6">
            <p className="smh-text-dim">If you see soft texture + subtle sparkle, fallbacks are working.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
