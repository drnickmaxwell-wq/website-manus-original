"use client";

import { useEffect, useState } from "react";

/**
 * Champagne Audit
 *
 * - Reads brand tokens via getComputedStyle(:root)
 * - Probes presence/size of brand assets in /public
 * - Provides a Light/Dark toggle to visually sanity-check tokens
 * - Links out to the lightweight __champagne-check probe
 */

type Probe = { path: string; ok: boolean; size: string | null; error?: string };

const ASSETS: string[] = [
  // film grain
  "/textures/film-grain-desktop.webp",
  "/textures/film-grain-mobile.webp",
  "/textures/film-grain-dark.webp",
  "/textures/film-grain-mobile-dark.webp",
  // particles (desktop + mobile)
  "/textures/particles-gold.webp",
  "/textures/particles-gold-mobile.webp",
  "/textures/particles-teal.webp",
  "/textures/particles-teal-mobile.webp",
  "/textures/particles-magenta.webp",
  "/textures/particles-magenta-mobile.webp",
  // overlays
  "/overlays/glow-dust.webp",
  "/overlays/glow-dust-mobile.webp",
  "/overlays/glow-dust-dark.webp",
  "/overlays/glow-dust-mobile-dark.webp",
  // hero gradient fallbacks
  "/gradients/hero-gradient-fallback.webp",
  "/gradients/hero-gradient-fallback-dark.webp",
  // wave mask
  "/waves/smh-wave-mask.svg",
];

function TokenTable({ tokens }: { tokens: string[] }) {
  const [rows, setRows] = useState<{ name: string; value: string }[]>([]);
  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    setRows(tokens.map((t) => ({ name: t, value: s.getPropertyValue(t).trim() })));
  }, [tokens]);
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b border-white/10">
          <th className="py-2 px-2">Token</th>
          <th className="py-2 px-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} className="border-b border-white/5">
            <td className="py-2 px-2 font-mono">{r.name}</td>
            <td className="py-2 px-2">{r.value || "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Page() {
  const [probes, setProbes] = useState<Probe[] | null>(null);
  const [dark, setDark] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // asset probes
  useEffect(() => {
    (async () => {
      const results: Probe[] = [];
      for (const path of ASSETS) {
        try {
          const r = await fetch(path, { method: "HEAD", cache: "no-store" });
          results.push({ path, ok: r.ok, size: r.headers.get("content-length") });
        } catch (e: any) {
          results.push({ path, ok: false, size: null, error: String(e) });
        }
      }
      setProbes(results);
    })().catch((e) => setErr(String(e)));
  }, []);

  // visual dark/light
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const TOKENS = [
    "--smh-primary-magenta",
    "--smh-primary-teal",
    "--smh-accent-gold",
    "--smh-champagne",
    "--smh-sand",
    "--smh-bg",
    "--smh-text",
    "--smh-text-muted",
    "--film-grain-opacity",
    "--particles-opacity",
  ];

  return (
    <main className="min-h-screen p-6 sm:p-10 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold smh-heading">Champagne Audit</h1>
        <div className="flex items-center gap-3">
          <a className="smh-btn" href="/__champagne-check" title="Open lightweight probe">
            Open Probe
          </a>
          <button className="smh-btn" onClick={() => setDark((d) => !d)}>
            Toggle ({dark ? "Dark" : "Light"})
          </button>
        </div>
      </header>

      {/* Visual chip for gradient + film grain + particles + wave */}
      <section className="rounded-2xl overflow-hidden smh-gold-border">
        <div className="relative min-h-[40vh] sm:min-h-[55vh] smh-gradient-bg">
          <div className="absolute inset-0 smh-film-grain" aria-hidden />
          <div className="absolute inset-0 smh-particles-gold pointer-events-none" aria-hidden />
          <div className="absolute inset-0 smh-particles-teal pointer-events-none" aria-hidden />
          <div className="absolute inset-0 smh-particles-magenta pointer-events-none" aria-hidden />
          <div className="absolute inset-x-0 -bottom-1 smh-wave-mask h-[12vw]" aria-hidden />
        </div>
        <p className="smh-text-dim px-6 py-4">
          Expect a magenta↔turquoise gradient with film grain, gold/teal/magenta particles,
          and a curved wave divider. Toggle Dark Mode to verify token updates.
        </p>
      </section>

      {/* Token values */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl smh-glass">
          <h3 className="smh-heading text-xl mb-4">Design Tokens (computed)</h3>
          <TokenTable tokens={TOKENS} />
        </div>
        <div className="p-6 rounded-xl smh-glass">
          <h3 className="smh-heading text-xl mb-4">Spot Checks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Primary gradient looks correct in light and dark.</li>
            <li>Particles are tasteful (low opacity), not noisy.</li>
            <li>Wave edges are smooth; no jaggies or aliasing.</li>
            <li>Text contrast is readable; aim for WCAG AA.</li>
          </ul>
        </div>
      </section>

      {/* Asset probe results */}
      <section className="p-6 rounded-xl smh-glass overflow-auto">
        <h2 className="smh-heading text-xl mb-2">Assets</h2>
        {err && <p className="text-red-500">Error: {err}</p>}
        {!probes && !err && <p>Loading…</p>}
        {probes && (
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
      </section>

      {/* Micro-interaction demo */}
      <section className="p-6 rounded-xl smh-glass">
        <h3 className="smh-heading text-xl mb-4">CTA Button Micro-Interaction</h3>
        <a className="smh-btn inline-flex" href="/contact">Book your consultation</a>
      </section>
    </main>
  );
}
