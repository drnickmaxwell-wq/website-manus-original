"use client";
import { useEffect, useState } from "react";
import { ensureChampagneCSSVars, champagneReady } from "@/lib/visual/champagneOverlays";

type Row = { label: string; cssVar?: string; path?: string };

const ASSETS: Row[] = [
  { label: "Film grain (desktop)", cssVar: "--smh-film-grain-desktop-url", path: "/textures/film-grain-desktop.webp" },
  { label: "Film grain (mobile)",  cssVar: "--smh-film-grain-mobile-url",  path: "/textures/film-grain-mobile.webp" },
  { label: "Film grain DARK (desktop)", cssVar: "--smh-film-grain-dark-desktop-url", path: "/textures/film-grain-dark.webp" },
  { label: "Film grain DARK (mobile)",  cssVar: "--smh-film-grain-dark-mobile-url",  path: "/textures/film-grain-mobile-dark.webp" },

  { label: "Particles GOLD (desktop)",   cssVar: "--smh-particles-gold-desktop-url",   path: "/textures/particles-gold.webp" },
  { label: "Particles GOLD (mobile)",    cssVar: "--smh-particles-gold-mobile-url",    path: "/textures/particles-gold-mobile.webp" },
  { label: "Particles GOLD DARK (desktop)", cssVar: "--smh-particles-gold-dark-desktop-url", path: "/textures/particles-gold.webp" },
  { label: "Particles GOLD DARK (mobile)",  cssVar: "--smh-particles-gold-dark-mobile-url",  path: "/textures/particles-gold-mobile.webp" },

  { label: "Particles TEAL (desktop)",   cssVar: "--smh-particles-teal-desktop-url",   path: "/textures/particles-teal.webp" },
  { label: "Particles TEAL (mobile)",    cssVar: "--smh-particles-teal-mobile-url",    path: "/textures/particles-teal-mobile.webp" },
  { label: "Particles TEAL DARK (desktop)", cssVar: "--smh-particles-teal-dark-desktop-url", path: "/textures/particles-teal.webp" },
  { label: "Particles TEAL DARK (mobile)",  cssVar: "--smh-particles-teal-dark-mobile-url",  path: "/textures/particles-teal-mobile.webp" },

  { label: "Particles MAGENTA (desktop)",   cssVar: "--smh-particles-magenta-desktop-url",   path: "/textures/particles-magenta.webp" },
  { label: "Particles MAGENTA (mobile)",    cssVar: "--smh-particles-magenta-mobile-url",    path: "/textures/particles-magenta-mobile.webp" },
  { label: "Particles MAGENTA DARK (desktop)", cssVar: "--smh-particles-magenta-dark-desktop-url", path: "/textures/particles-magenta.webp" },
  { label: "Particles MAGENTA DARK (mobile)",  cssVar: "--smh-particles-magenta-dark-mobile-url",  path: "/textures/particles-magenta-mobile.webp" },

  { label: "Wave Mask SVG", path: "/waves/smh-wave-mask.svg" },
];

export default function Page(){
  const [rows, setRows] = useState<{label:string; source:"file"|"generated"|"missing"}[]>([]);

  useEffect(() => {
    // generate fallbacks immediately (no-op if present)
    ensureChampagneCSSVars().then(() => {
      champagneReady();
      const next = ASSETS.map((a) => {
        if (a.cssVar) {
          const v = getComputedStyle(document.documentElement).getPropertyValue(a.cssVar).trim();
          if (v && v.startsWith("url(\"data:image/webp")) return { label: a.label, source: "generated" as const };
        }
        // naive file probe: we can't read file sizes at runtime, so mark as file if no generated var present
        return { label: a.label, source: a.cssVar ? "file" : "file" };
      });
      setRows(next);
    });
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
                {r.source === "generated" ? "Generated fallback (Canvas)" : "File / default"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="mt-10">
        <h2 className="smh-heading text-xl">Visual Proof</h2>
        <div className="relative overflow-hidden rounded-2xl mt-4" style={{minHeight:"36vh"}}>
          <div className="smh-film-grain absolute inset-0" aria-hidden />
          <div className="smh-particles-gold absolute inset-0" aria-hidden />
          <div className="smh-particles-teal absolute inset-0" aria-hidden />
          <div className="smh-particles-magenta absolute inset-0" aria-hidden />
          <div className="relative z-10 p-6">
            <p className="smh-text-dim">If you see soft texture + subtle sparkle, fallbacks are working.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
