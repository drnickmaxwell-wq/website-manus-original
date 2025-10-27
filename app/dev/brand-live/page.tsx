'use client';

import { useEffect, useState } from "react";

type VarToken = {
  name: string;
  label: string;
};

const TOKENS: VarToken[] = [
  { name: "--smh-primary-magenta", label: "Primary Magenta" },
  { name: "--smh-primary-teal", label: "Primary Teal" },
  { name: "--smh-accent-gold", label: "Accent Gold" },
  { name: "--smh-gradient", label: "Gradient" },
  { name: "--smh-text", label: "Text" },
  { name: "--smh-text-muted", label: "Text Muted" },
  { name: "--smh-bg", label: "Background" }
];

export default function BrandLiveProbePage() {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const nextValues: Record<string, string> = {};

    for (const token of TOKENS) {
      nextValues[token.name] = rootStyles
        .getPropertyValue(token.name)
        .trim();
    }

    setValues(nextValues);
  }, []);

  return (
    <main
      style={{
        display: "grid",
        gap: "1.5rem",
        padding: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
      }}
    >
      {TOKENS.map((token) => {
        const value = values[token.name] ?? "";

        return (
          <section
            key={token.name}
            style={{
              borderRadius: "1rem",
              padding: "1rem",
              background: "color-mix(in srgb, var(--smh-bg) 92%, var(--smh-text) 8%)",
              boxShadow:
                "0 8px 24px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.04)"
            }}
          >
            <header style={{ marginBottom: "0.75rem" }}>
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  margin: 0,
                  color: "var(--smh-text)"
                }}
              >
                {token.label}
              </h2>
              <p
                style={{
                  margin: "0.25rem 0 0",
                  fontSize: "0.85rem",
                  color: "var(--smh-text-muted)"
                }}
              >
                {token.name}
              </p>
            </header>
            <div
              style={{
                borderRadius: "0.75rem",
                height: "160px",
                width: "100%",
                background: `var(${token.name})`,
                border: "1px solid rgba(15, 23, 42, 0.08)"
              }}
            />
            <code
              style={{
                display: "block",
                marginTop: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--smh-text)",
                wordBreak: "break-all"
              }}
            >
              {value || "(pending client hydration)"}
            </code>
          </section>
        );
      })}
    </main>
  );
}
