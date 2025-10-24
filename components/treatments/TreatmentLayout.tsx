'use client';
import React, { ReactNode } from 'react';
import HeroWaves from '@/components/hero/HeroWaves';
import '@/styles/champagne/overlays.css';

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function TreatmentLayout({ title, subtitle, eyebrow = "St Mary's House Dental", children }: Props) {
  return (
    <main className="relative">
      {/* Hero with HeroWaves component */}
      <HeroWaves
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        ctaPrimary={{ text: 'Book consultation', href: '/contact' }}
        ctaSecondary={{ text: 'Open 3D viewer', href: '#viewer' }}
      />

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10">{children}</div>
    </main>
  );
}

