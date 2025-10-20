"use client";

import { useEffect, useState } from "react";

type Mode = "auto" | "light" | "dark";

function applyTheme(mode: Mode) {
  const root = document.documentElement;
  // Persist
  try {
    localStorage.setItem("smh-theme", mode);
  } catch {}
  // Attribute
  root.dataset.theme = mode;
  // For "auto", reflect current media query in a data-attr so CSS can branch if needed
  if (mode === "auto") {
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    root.dataset.autoDark = m.matches ? "true" : "false";
  } else {
    delete root.dataset.autoDark;
  }
}

function resolveInitial(): Mode {
  try {
    const saved = localStorage.getItem("smh-theme") as Mode | null;
    if (saved === "light" || saved === "dark" || saved === "auto") return saved;
  } catch {}
  return "auto"; // default
}

export default function ThemeChip() {
  const [mode, setMode] = useState<Mode>("auto");

  useEffect(() => {
    const initial = resolveInitial();
    setMode(initial);
    // Apply immediately (SSR hydration safe)
    if (typeof document !== "undefined") {
      applyTheme(initial);
    }
    // If auto: track system changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (mode === "auto") applyTheme("auto");
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function cycle() {
    const next: Mode = mode === "auto" ? "light" : mode === "light" ? "dark" : "auto";
    setMode(next);
    applyTheme(next);
  }

  const label = mode === "auto" ? "Auto" : mode === "light" ? "Light" : "Dark";

  return (
    <button
      onClick={cycle}
      aria-label={`Toggle theme (current: ${label})`}
      className="smh-btn px-4 py-2 text-sm"
      style={{ lineHeight: 1 }}
    >
      {label}
    </button>
  );
}
