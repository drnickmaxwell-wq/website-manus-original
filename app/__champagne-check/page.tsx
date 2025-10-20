"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight asset-only probe for CI/smoke tests.
 */

type Probe = { path: string; ok: boolean; size: string | null; error?: string };

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

export default function Page() {
  const [probes, setProbes] = useState<Probe[] | null>(null);

  useEffect(() => {
    (async () => {
      const out: Probe[] = [];
      for (const p of ASSETS) {
        try {
          const r = await fetch(p, { method: "HEAD", cache: "no-store" });
          out.push({ path: p, ok: r.ok, size: r.headers.get("content-length") });
        } catch (e: any) {
          out.push({ path: p, ok: false, size: null, error: String(e) });
        }
      }
      setProbes(out);
    })();
  }, []);

  return (
    <main className="min-h-screen p-6 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-semibold smh-heading mb-6">Champagne Probe</h1>
      {!probes ? (
        <p>Loading…</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="py-2 px-2">Path</th>
              <th className="py-2 px-2">Exists</th>
              <th className="py-2 px-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {probes.map((p) => (
              <tr key={p.path} className="border-b border-white/5">
                <td className="py-1 px-2 font-mono">{p.path}</td>
                <td className="py-1 px-2">{p.ok ? "✓" : "✗"}</td>
                <td className="py-1 px-2">{p.size ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
