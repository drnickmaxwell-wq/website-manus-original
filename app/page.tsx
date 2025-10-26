import Link from "next/link";
import React from "react";
import BrandHeroGradient from "@/components/brand/BrandHeroGradient";

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <BrandHeroGradient className="py-24 md:py-32">
          <div className="container mx-auto px-6 text-white">
            <span className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-sm/6 backdrop-blur">
              AI-Powered 3-D Dentistry
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Luxury Dentistry, Quietly Confident.
            </h1>
            <p className="mt-4 max-w-2xl text-base/7 opacity-90 md:text-lg/8">
              Calm precision powered by AI and artistry. Champagne gradient with wave underplate, soft grain and subtle sparkle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--smh-bg)] shadow-lg"
                style={{ background: "var(--smh-gradient)" }}
              >
                Book Consultation
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white/90"
                style={{
                  border: "1px solid color-mix(in oklab, var(--smh-accent-gold) 65%, transparent)",
                  background: "color-mix(in oklab, #000 20%, transparent)",
                  backdropFilter: "blur(8px)",
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
        <p className="mt-4 max-w-2xl text-lg text-[color:var(--smh-text-dim)]">
          Calm precision with a Champagne finish — magenta to turquoise gradient, gold accents, Montserrat + Lora.
        </p>
      </section>
    </>
  );
}
