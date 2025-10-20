"use client";

import { useEffect, useState } from "react";

type Probe = { path: string; exists: boolean; size?: string };

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
  "/waves/smh-wave-mask.svg"
];

export default function Page() {
  const [theme, setTheme] = useState<"light"|"dark">("light");
  const [probes, setProbes] = useState<Probe[]>([]);

  // apply persisted theme or respect OS on first load
  useEffect(() => {
    const saved = localStorage.getItem("smh-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
      setTheme(saved);
    } else {
      // if no data-theme set by us, leave CSS media query to pick initial appearance
      const prefersDark =
        typeof window !== "undefined" && typeof window.matchMedia === "function"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
          : false;
      const initial = prefersDark ? "dark" : "light";
      document.documentElement.dataset.theme = initial;
      setTheme(initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("smh-theme", next);
    setTheme(next);
  };

  useEffect(() => {
    (async () => {
      const results: Probe[] = [];
      for (const path of ASSETS) {
        try {
          const r = await fetch(path, { method: "HEAD", cache: "no-store" });
          const ok = r.ok;
          const size = r.headers.get("content-length") ?? undefined;
          results.push({ path, exists: ok, size });
        } catch {
          results.push({ path, exists: false });
        }
      }
      setProbes(results);
    })();
  }, []);

  return (
    <main className="min-h-screen p-6 sm:p-10 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold smh-heading">Champagne Audit</h1>
        <div className="flex gap-3">
          <a className="smh-btn" href="/__champagne-check">Open Probe</a>
          <button className="smh-btn" onClick={toggleTheme}>
            Toggle ({theme === "dark" ? "Dark" : "Light"})
          </button>
        </div>
      </header>

      {/* Gradient proof card */}
      <section className="rounded-2xl overflow-hidden smh-gold-border">
        <div className="relative min-h-[40vh] sm:min-h-[55vh] smh-gradient-bg">
          <div className="absolute inset-0 smh-film-grain" aria-hidden />
          <div className="absolute inset-0 smh-particles-gold" aria-hidden />
          <div className="absolute inset-0 smh-particles-teal" aria-hidden />
          <div className="absolute inset-0 smh-particles-magenta" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-[12vw] smh-wave-mask smh-gradient-bg" aria-hidden />
        </div>
        <p className="smh-text-dim p-3">
          Expect a magenta→turquoise gradient with film grain, gold/teal/magenta particles, and a curved wave divider.
          Toggle Dark Mode to verify token updates.
        </p>
      </section>

      {/* Tokens */}
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

        <div className="p-6 rounded-xl smh-glass">
          <h3 className="smh-heading text-xl mb-4">Spot Checks</h3>
          <ul className="list-disc pl-5 smh-text-dim space-y-2">
            <li>Primary gradient shifts with theme: <strong>{theme}</strong>.</li>
            <li>Particles and grain are subtle (low opacity), not noisy.</li>
            <li>Wave divider renders without jaggies.</li>
          </ul>
        </div>
      </section>

      {/* Assets */}
      <section className="p-6 rounded-xl smh-glass overflow-auto">
        <h3 className="smh-heading text-xl mb-2">Assets</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="py-2">Path</th>
              <th className="py-2">Exists</th>
              <th className="py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {probes.map(p => (
              <tr key={p.path} className="border-b border-white/5">
                <td className="py-1 font-mono">{p.path}</td>
                <td className="py-1">{p.exists ? "✓" : "✗ (upload to /public…)"}</td>
                <td className="py-1">{p.size ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CTA micro-interaction (brand check) */}
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
    setRows(tokens.map(t => ({ name: t, value: s.getPropertyValue(t).trim() })));
  }, [tokens]);
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b border-white/10">
          <th className="py-2">Token</th>
          <th className="py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.name} className="border-b border-white/5">
            <td className="py-1 font-mono">{r.name}</td>
            <td className="py-1">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
