import Link from "next/link";
import React from "react";
import BrandHeroGradient from "@/components/brand/BrandHeroGradient";

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <BrandHeroGradient
          intensity="standard"
          waveOpacity={0.2}
          goldDensity="med"
          goldRimEnabled
          className="py-24 md:py-32"
        >
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-white md:gap-8">
            <span
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 backdrop-blur"
              style={{ borderColor: "color-mix(in oklab, var(--smh-accent-gold) 60%, transparent)" }}
            >
              Champagne intelligence dentistry
            </span>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Luxury Dentistry, Quietly Confident.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
              Calm precision powered by artistry, AI and 3-D technology. A Champagne wave with soft grain, luminous particles and
              gilded accents ushers patients into a serene experience.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--smh-gradient)",
                  color: "var(--smh-bg)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.24)",
                }}
              >
                Book consultation
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white/85 transition-transform hover:-translate-y-0.5"
                style={{
                  border: "1px solid color-mix(in oklab, var(--smh-accent-gold) 65%, transparent)",
                  background: "color-mix(in oklab, #0D0E10 55%, transparent)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Explore treatments
              </Link>
            </div>
          </div>
        </BrandHeroGradient>
      </section>

      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-semibold text-[color:var(--smh-text)] md:text-5xl">
          Luxury Dentistry, Quietly Confident.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[color:var(--smh-text-muted)]">
          Calm precision with a Champagne finish — magenta to turquoise gradient, gold accents, Montserrat + Lora.
        </p>
      </section>
    </>
  );
}
