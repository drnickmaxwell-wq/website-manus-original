"use client";
import React, { ReactNode } from "react";
import clsx from "clsx";

/**
 * TreatmentLayout
 * - Reusable hero with Champagne gradient, wave mask, film-grain + particles
 * - Slots:
 *    title: h1
 *    subtitle: supporting line
 *    children: page body
 * - Relies on public/textures/*, public/overlays/*, public/waves/smh-wave-mask.svg
 */
type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function TreatmentLayout({ title, subtitle, eyebrow, children }: Props) {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden smh-gold-border rounded-2xl my-10 md:my-16">
        <div
          className={clsx("smh-gradient-bg smh-wave-mask rounded-2xl")}
          style={{ position: "relative", isolation: "isolate", minHeight: "42vh" }}
          aria-hidden="true"
        />
        {/* film grain + particles + glow */}
        <div className="absolute inset-0 smh-film-grain rounded-2xl pointer-events-none" />
        <div className="absolute inset-0 smh-particles-gold rounded-2xl pointer-events-none" />
        <div className="absolute inset-0 smh-particles-teal rounded-2xl pointer-events-none" />
        <div className="absolute inset-0 smh-particles-magenta rounded-2xl pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            backgroundImage: 'url("/overlays/glow-dust.webp")',
            backgroundSize: "cover",
            mixBlendMode: "screen",
            opacity: 0.28
          }}
          aria-hidden="true"
        />
        <header className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:px-10">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.45em] text-[color:var(--smh-text-muted)]">{eyebrow}</p>
          )}
          <h1 className="smh-heading text-3xl md:text-5xl font-semibold">{title}</h1>
          {subtitle && <p className="smh-text-dim mt-4 max-w-3xl">{subtitle}</p>}
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="smh-btn">Book Consultation</a>
            <a href="#viewer" className="smh-btn" style={{ filter: "saturate(0.9) brightness(0.98)" }}>
              Open 3D Viewer
            </a>
          </div>
        </header>
      </section>

      {/* BODY */}
      <main className="max-w-6xl mx-auto px-4 md:px-6">{children}</main>
    </main>
  );
}

