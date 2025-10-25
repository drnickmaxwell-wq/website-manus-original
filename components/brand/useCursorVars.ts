"use client";
import { useCallback } from "react";
import type { MouseEvent } from "react";

export default function useCursorVars() {
  return useCallback((e: MouseEvent<HTMLElement>) => {
    const t = e.currentTarget as HTMLElement;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);
}
