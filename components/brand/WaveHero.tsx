import React from "react";

type Props = { className?: string; children?: React.ReactNode; particles?: Array<"gold" | "teal" | "magenta">; filmGrain?: boolean; };

export default function WaveHero({ className = "", children, particles = ["gold", "teal"], filmGrain = true }: Props) {
  return (
    <section className={["relative overflow-hidden smh-gradient-bg", className].join(" ").trim()} aria-label="Champagne hero">
      {/* Underlay gradient */}
      <div className="smh-hero-underlay" style={{ background: "var(--smh-gradient)" }} />
      {/* Wave layers (masked divs) */}
      <div aria-hidden className="smh-wave-layer smh-wave-back" style={{ background: "var(--smh-gradient)" }} />
      <div aria-hidden className="smh-wave-layer smh-wave-mid" style={{ background: "var(--smh-gradient)" }} />
      <div aria-hidden className="smh-wave-layer smh-wave-front" style={{ background: "var(--smh-gradient)" }} />
      {/* Optional brand overlays */}
      {filmGrain && <div aria-hidden className="smh-film-grain absolute inset-0 pointer-events-none" />}
      {particles.includes("gold") && <div aria-hidden className="smh-particles-gold absolute inset-0 pointer-events-none mix-blend-soft-light" />}
      {particles.includes("teal") && <div aria-hidden className="smh-particles-teal absolute inset-0 pointer-events-none mix-blend-soft-light" />}
      {particles.includes("magenta") && <div aria-hidden className="smh-particles-magenta absolute inset-0 pointer-events-none mix-blend-soft-light" />}
      {/* Content */}
      <div className="smh-hero-content">{children}</div>
    </section>
  );
}
