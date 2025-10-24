'use client';
import React from 'react';
import '@/styles/tokens/smh-champagne-tokens.css';
import '@/styles/champagne/overlays.css';
import clsx from 'clsx';

type HeroWavesProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
};

export default function HeroWaves({
  title,
  subtitle,
  eyebrow = "St Mary's House Dental",
  ctaPrimary = { text: 'Book consultation', href: '/contact' },
  ctaSecondary = { text: 'Open 3D viewer', href: '#viewer' },
}: HeroWavesProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--smh-bg)]">
      {/* Base wave background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/waves/waves-bg-2560.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Wave mask SVG overlay with blend mode */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/waves/smh-wave-mask.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay',
          opacity: 0.95,
        }}
      />

      {/* Gradient overlay using champagne tokens */}
      <div
        className="absolute inset-0 w-full h-full smh-gradient-bg"
        style={{
          mixBlendMode: 'screen',
          opacity: 0.85,
        }}
      />

      {/* Particle layers - teal */}
      <div
        className="absolute inset-0 smh-particles-teal pointer-events-none"
        style={{
          mixBlendMode: 'screen',
          opacity: 'var(--particles-opacity)',
        }}
      />

      {/* Particle layers - magenta */}
      <div
        className="absolute inset-0 smh-particles-magenta pointer-events-none"
        style={{
          mixBlendMode: 'screen',
          opacity: 'var(--particles-opacity)',
        }}
      />

      {/* Particle layers - gold */}
      <div
        className="absolute inset-0 smh-particles-gold pointer-events-none"
        style={{
          mixBlendMode: 'screen',
          opacity: 'var(--particles-opacity)',
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 smh-film-grain pointer-events-none"
        style={{
          mixBlendMode: 'screen',
          opacity: 'var(--film-grain-opacity)',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24 min-h-[42vh] md:min-h-[52vh] flex flex-col justify-center items-center">
        <p className="text-center uppercase tracking-[0.45em] text-[color:var(--smh-text)/.65] text-xs md:text-sm">
          {eyebrow}
        </p>
        <h1 className="smh-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-center mt-4 text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-center max-w-3xl mx-auto mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={ctaPrimary.href} className="smh-btn">
            {ctaPrimary.text}
          </a>
          <a
            href={ctaSecondary.href}
            className="smh-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            {ctaSecondary.text}
          </a>
        </div>
      </div>

      {/* Respect prefers-reduced-motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .smh-gradient-bg {
            animation: none;
          }
          [class*='smh-particles-'] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

