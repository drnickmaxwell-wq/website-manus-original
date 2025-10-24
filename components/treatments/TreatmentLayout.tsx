"use client";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};
export default function TreatmentLayout({ title, subtitle, eyebrow, children }: Props) {
  return (
    <main className="relative overflow-hidden">
      <section className="relative my-10 overflow-hidden rounded-2xl smh-gold-border md:my-16">
        <div className="smh-hero-gradient smh-wave-mask min-h-[42vh] rounded-2xl md:min-h-[52vh]" aria-hidden />
        <div className="absolute inset-0 rounded-2xl smh-film-grain opacity-[var(--film-grain-opacity)] mix-blend-overlay pointer-events-none" aria-hidden />
        <div className="absolute inset-0 rounded-2xl smh-particles-gold opacity-[var(--particles-opacity)] mix-blend-screen pointer-events-none" aria-hidden />
        <div className="absolute inset-0 rounded-2xl smh-particles-teal opacity-[var(--particles-opacity)] mix-blend-screen pointer-events-none" aria-hidden />
        <div className="absolute inset-0 rounded-2xl smh-particles-magenta opacity-[var(--particles-opacity)] mix-blend-screen pointer-events-none" aria-hidden />
        <div className="absolute inset-0 rounded-2xl smh-glow-dust opacity-[calc(var(--particles-opacity)*0.28)] mix-blend-screen pointer-events-none" aria-hidden />
        <header className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-16">
          {eyebrow && <p className="text-xs uppercase tracking-[0.45em] text-[color:var(--smh-text-muted)]">{eyebrow}</p>}
          <h1 className="smh-heading text-3xl font-semibold md:text-5xl">{title}</h1>
          {subtitle && <p className="smh-text-dim mt-4 max-w-3xl">{subtitle}</p>}
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="smh-btn">Book consultation</a>
            <a href="#viewer" className="smh-btn" style={{ filter: "saturate(0.9) brightness(0.98)" }}>Open 3D viewer</a>
          </div>
        </header>
      </section>
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </main>
  );
}
