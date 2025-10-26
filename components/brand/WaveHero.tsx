"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryHref?: string; primaryLabel?: string;
  secondaryHref?: string; secondaryLabel?: string;
  showParticles?: boolean; showGrain?: boolean;
};
export default function WaveHero({
  className = "",
  eyebrow,
  title,
  subtitle,
  primaryHref, primaryLabel,
  secondaryHref, secondaryLabel,
  showParticles = true, showGrain = true,
}: Props){
  const reduce = useReducedMotion();
  const float = reduce ? {} : { y:[0,-6,0], transition:{ duration:6, repeat:Infinity, ease:"easeInOut" as const } };

  return (
    <section className={["relative isolate overflow-hidden smh-gradient-bg smh-wave-mask", className].join(" ")} aria-label="Champagne wave hero">
      {/* Underplate gradient is in .smh-gradient-bg */}

      {/* Wave SVG underlay */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-85 bg-[url('/waves/smh-wave-mask.svg')] bg-cover bg-center" />

      {/* Particles & Grain */}
      {showParticles && (<>
        <div aria-hidden className="smh-particles-gold absolute inset-0 pointer-events-none mix-blend-soft-light" />
        <div aria-hidden className="smh-particles-teal absolute inset-0 pointer-events-none mix-blend-soft-light" />
        <div aria-hidden className="smh-particles-magenta absolute inset-0 pointer-events-none mix-blend-soft-light" />
      </>)}
      {showGrain && (<div aria-hidden className="smh-film-grain absolute inset-0 pointer-events-none" />)}

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:py-28 text-white">
        {eyebrow && (
          <motion.span animate={float} className="inline-flex items-center rounded-full border px-4 py-1 text-sm/6 backdrop-blur-md"
            style={{ borderColor: "color-mix(in oklab, var(--smh-accent-gold) 60%, transparent)" } as any}
          >
            {eyebrow}
          </motion.span>
        )}
        <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,.06)]">{title}</h1>
        {subtitle && (<p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">{subtitle}</p>)}
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel && (
              <a href={primaryHref} className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
                 style={{ background:"linear-gradient(135deg,var(--smh-accent-gold), color-mix(in oklab, var(--smh-accent-gold) 72%, transparent))", color:"#1b1b1b", boxShadow:"0 8px 24px rgba(0,0,0,.18)" }}>
                {primaryLabel}
              </a>
            )}
            {secondaryHref && secondaryLabel && (
              <a href={secondaryHref} className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border"
                 style={{ borderColor:"color-mix(in oklab, var(--smh-accent-gold) 60%, transparent)", background:"color-mix(in oklab, #000 12%, transparent)", backdropFilter:"blur(6px)" }}>
                {secondaryLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
