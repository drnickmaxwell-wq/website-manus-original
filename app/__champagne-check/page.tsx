// app/__champagne-check/page.tsx
"use client";

import { useEffect, useState } from "react";

type Probe = { path: string; ok: boolean | null; size?: string; error?: string };

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
  "/overlays/glow-dust-dark.webp",
  "/overlays/glow-dust-mobile.webp",
  "/gradients/hero-gradient-fallback.webp",
  "/gradients/hero-gradient-fallback-dark.webp",
  "/waves/smh-wave-mask.svg",
];

export default function Page() {
  const [probes, setProbes] = useState<Probe[]>(ASSETS.map((p) => ({ path: p, ok: null })));
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    (async () => {
      const results: Probe[] = [];
      for (const path of ASSETS) {
        try {
          const r = await fetch(path, { method: "HEAD", cache: "no-store" });
          const ok = r.ok;
          const size = r.headers.get("content-length") || undefined;
          results.push({ path, ok, size });
        } catch (e: any) {
          results.push({ path, ok: false, error: String(e) });
        }
      }
      setProbes(results);
    })();
  }, []);

  return (
    <main className="min-h-screen p-6 sm:p-10 space-y-10">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold smh-heading">Champagne Diagnostics</h1>
        <button onClick={() => setDark((d) => !d)} className="smh-btn">
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* Visual proof block */}
      <section className="rounded-2xl overflow-hidden smh-gold-border">
        <div className="relative min-h-[40vh] sm:min-h-[55vh] smh-gradient-bg smh-wave-mask">
          <div className="absolute inset-0 smh-film-grain" aria-hidden />
          <div className="absolute inset-0 smh-particles-gold" aria-hidden />
          <div className="relative z-10 p-8 sm:p-12 max-w-3xl">
            <h2 className="smh-heading text-3xl sm:text-4xl mb-4">
              Gradient + Wave + Grain + Gold Particles
            </h2>
            <p className="smh-text-dim">
              You should see a magenta→turquoise gradient with a curved wave edge, a faint film grain,
              and subtle gold shimmer. Toggle Dark Mode above to verify the dark grain swap.
            </p>
          </div>
        </div>
      </section>

      {/* Token readout */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl smh-glass">
          <h3 className="smh-heading text-xl mb-4">Design Tokens (computed)</h3>
          <TokenTable tokens={[
            "--smh-primary-magenta",
            "--smh-primary-teal",
            "--smh-accent-gold",
            "--smh-bg",
            "--smh-text",
            "--film-grain-opacity",
            "--particles-opacity",
          ]}/>
        </div>

        {/* Asset probe table */}
        <div className="p-6 rounded-xl smh-glass overflow-hidden">
          <h3 className="smh-heading text-xl mb-4">Asset Presence Check</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="py-2">Path</th>
                <th className="py-2">OK</th>
                <th className="py-2">Size</th>
              </tr>
            </thead>
            <tbody>
              {probes.map((p) => (
                <tr key={p.path} className="border-b border-white/5">
                  <td className="py-1 font-mono">{p.path}</td>
                  <td className="py-1">{p.ok === null ? "…" : p.ok ? "✅" : "❌"}</td>
                  <td className="py-1">{p.size ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA test */}
      <section className="p-6 rounded-xl smh-glass">
        <h3 className="smh-heading text-xl mb-4">CTA Button Micro-Interaction</h3>
        <a className="smh-btn inline-flex" href="/contact">Book your consultation</a>
      </section>
    </main>
  );
}

function TokenTable({ tokens }: { tokens: string[] }) {
  const [rows, setRows] = useState<{ name: string; value: string }[]>([]);
  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    setRows(tokens.map((t) => ({ name: t, value: s.getPropertyValue(t).trim() })));
  }, []);
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b border-white/10">
          <th className="py-2">Token</th>
          <th className="py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} className="border-b border-white/5">
            <td className="py-1 font-mono">{r.name}</td>
            <td className="py-1 font-mono">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
