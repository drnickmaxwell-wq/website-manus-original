'use client';
import React from 'react';
import clsx from 'clsx';

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function TreatmentLayout({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-[var(--smh-bg)] text-[var(--smh-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden smh-gold-border rounded-2xl m-4 md:m-8">
        <div
          className={clsx(
            'smh-gradient-bg smh-wave-mask',
            'min-h-[42vh] md:min-h-[52vh] rounded-2xl'
          )}
          style={{
            position: 'relative',
            isolation: 'isolate'
          }}
        >
          {/* film grain + particles */}
          <div className="absolute inset-0 smh-film-grain rounded-2xl" />
          <div className="absolute inset-0 smh-particles-gold rounded-2xl" />
          <div className="absolute inset-0 smh-particles-teal rounded-2xl" />
          <div className="absolute inset-0 smh-particles-magenta rounded-2xl" />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'url("/overlays/glow-dust.webp")',
            backgroundSize: 'cover',
            mixBlendMode: 'screen',
            opacity: 0.28
          }} />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16">
            <h1 className="smh-heading text-3xl md:text-5xl font-semibold drop-shadow">
              {title}
            </h1>
            {subtitle && (
              <p className="smh-text-dim mt-4 max-w-2xl text-base md:text-lg">
                {subtitle}
              </p>
            )}
            <div className="mt-6 flex gap-3">
              <a href="/contact" className="smh-btn">Book Consultation</a>
              <a href="#viewer" className="smh-btn" style={{ filter: 'saturate(0.9) brightness(0.95)'}}>View Results</a>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-6xl mx-auto px-4 md:px-6">{children}</main>
    </div>
  );
}
