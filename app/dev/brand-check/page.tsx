"use client";

import React from "react";

const TOKENS = [
  { name: "Primary Magenta", varName: "--smh-primary-magenta" },
  { name: "Primary Teal", varName: "--smh-primary-teal" },
  { name: "Accent Gold", varName: "--smh-accent-gold" },
  { name: "Background", varName: "--smh-bg" },
  { name: "Text", varName: "--smh-text" },
  { name: "Text Muted", varName: "--smh-text-dim" },
];

function useTokenValue(varName: string) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const update = () => {
      const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      setValue(computed);
    };

    update();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
    } else if (typeof media.addListener === "function") {
      media.addListener(update);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", update);
      } else if (typeof media.removeListener === "function") {
        media.removeListener(update);
      }
    };
  }, [varName]);

  return value;
}

function Swatch({ name, varName }: { name: string; varName: string }) {
  const value = useTokenValue(varName);

  return (
    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white/60 p-4 text-sm shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="h-16 w-16 rounded-lg shadow-inner"
          style={{ background: `var(${varName})` }}
        />
        <div>
          <div className="font-medium text-[color:var(--smh-text)]">{name}</div>
          <div className="text-xs text-[color:var(--smh-text-dim)]">{varName}</div>
        </div>
      </div>
      <div className="text-xs font-mono uppercase tracking-wide text-[color:var(--smh-text-dim)]">{value || "—"}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen space-y-8 bg-[color:var(--smh-bg)] px-6 py-12 text-[color:var(--smh-text)]">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-[color:var(--smh-text-dim)]">Development</p>
        <h1 className="text-3xl font-semibold">Champagne Brand Check</h1>
        <p className="max-w-2xl text-sm text-[color:var(--smh-text-dim)]">
          Live CSS variables pulled from <code className="rounded bg-black/10 px-1 py-0.5 text-xs">styles/tokens/smh-champagne-tokens.css</code>.
          Toggle your OS appearance to confirm dark overrides.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {TOKENS.map((token) => (
          <Swatch key={token.varName} name={token.name} varName={token.varName} />
        ))}
      </section>

      <section className="rounded-2xl border border-black/5 bg-white/60 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
        <div
          className="h-32 w-full rounded-xl shadow-lg"
          style={{ background: "var(--smh-gradient)" }}
        />
        <p className="mt-4 text-sm text-[color:var(--smh-text-dim)]">
          Gradient should render a 135° sweep from magenta (#D94BC6) to teal (#00C2C7) with the subtle gold lift at the rim.
        </p>
      </section>
    </main>
  );
}
