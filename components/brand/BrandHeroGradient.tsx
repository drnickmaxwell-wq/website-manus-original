import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  /** Optional: overlay film grain and particles */
  withFilmGrain?: boolean;
  withParticles?: boolean;
};

export default function BrandHeroGradient({
  className = "",
  children,
  withFilmGrain = true,
  withParticles = true,
}: Props) {
  return (
    <section
      className={[
        "relative overflow-hidden smh-gradient-bg smh-wave-mask",
        "min-h-[52vh] flex items-center",
        className,
      ].join(" ")}
      aria-label="Hero"
    >
      {/* Film grain & particles (optional) */}
      {withFilmGrain && (
        <div
          aria-hidden
          className="absolute inset-0 smh-film-grain pointer-events-none"
        />
      )}
      {withParticles && (
        <>
          <div aria-hidden className="absolute inset-0 smh-particles-gold" />
          <div aria-hidden className="absolute inset-0 smh-particles-teal" />
          <div aria-hidden className="absolute inset-0 smh-particles-magenta" />
        </>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 text-left">
        {children}
      </div>
    </section>
  );
}

