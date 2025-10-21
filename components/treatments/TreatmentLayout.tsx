import type { ReactNode } from 'react';

interface TreatmentLayoutProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: ReactNode;
}

export default function TreatmentLayout({
  title,
  subtitle,
  eyebrow = 'Treatments',
  children,
}: TreatmentLayoutProps) {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[color-mix(in_oklab,var(--smh-sand)_80%,white)]" />
      <div className="absolute inset-0 -z-20 smh-particles-gold" aria-hidden="true" />
      <div className="absolute inset-0 -z-30 smh-film-grain" aria-hidden="true" />
      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[color-mix(in_oklab,var(--smh-text-muted)_70%,transparent)]">
            {eyebrow}
          </p>
          <h1 className="smh-heading text-3xl font-semibold md:text-5xl">{title}</h1>
          <p className="smh-text-dim mx-auto mt-4 max-w-3xl text-base md:text-lg">{subtitle}</p>
        </header>
        <div className="mt-12 md:mt-16">{children}</div>
      </section>
    </main>
  );
}
