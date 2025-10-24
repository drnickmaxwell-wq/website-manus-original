'use client';
import React, { ReactNode } from 'react';
import '@/styles/champagne/overlays.css';
import clsx from 'clsx';

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function TreatmentLayout({ title, subtitle, eyebrow = "St Mary's House Dental", children }: Props) {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--smh-bg)]">
        {/* base gradient shaped by wave mask */}
        <div className={clsx('smh-gradient-bg smh-wave-mask min-h-[42vh] md:min-h-[52vh] rounded-3xl')} />
        {/* overlays */}
        <div className="absolute inset-0 smh-film-grain rounded-3xl" />
        <div className="absolute inset-0 smh-particles-magenta rounded-3xl" />
        <div className="absolute inset-0 smh-particles-teal rounded-3xl" />
        <div className="absolute inset-0 smh-particles-gold rounded-3xl" />
        <div className="absolute inset-0 smh-glow rounded-3xl" />

        {/* hero copy / ctas */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 md:py-12">
          <p className="text-center uppercase tracking-[0.45em] text-[color:var(--smh-text)/.65]">{eyebrow}</p>
          <h1 className="smh-heading text-3xl md:text-5xl font-semibold text-center mt-2">{title}</h1>
          {subtitle && <p className="smh-text-dim text-center max-w-3xl mx-auto mt-2">{subtitle}</p>}
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="smh-btn">Book consultation</a>
            <a href="#viewer" className="smh-btn smh-btn-ghost">Open 3D viewer</a>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10">{children}</div>
    </main>
  );
}
