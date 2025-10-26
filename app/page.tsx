import React from "react";
import Link from "next/link";
import BrandHeroGradient from "@/components/brand/BrandHeroGradient";

export default function Page(){
  return (
    <>
      <section className="relative overflow-hidden">
        <BrandHeroGradient className="py-24 md:py-32 text-white">
          <div className="container mx-auto px-6">
            <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm/6 backdrop-blur-md"
              style={{ borderColor: "color-mix(in oklab, var(--smh-accent-gold) 60%, transparent)" }}
            >
              AI-Powered 3-D Dentistry
            </span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
              Luxury Dentistry, Quietly Confident.
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">
              Calm precision powered by AI and artistry. Champagne gradient with wave underplate, soft grain and subtle sparkle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
                style={{
                  background: "linear-gradient(135deg,var(--smh-accent-gold), color-mix(in oklab, var(--smh-accent-gold) 72%, transparent))",
                  color: "#1b1b1b",
                  boxShadow: "0 8px 24px rgba(0,0,0,.18)",
                }}
              >
                Book Consultation
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border"
                style={{
                  borderColor: "color-mix(in oklab, var(--smh-accent-gold) 60%, transparent)",
                  background: "color-mix(in oklab, #000 12%, transparent)",
                  backdropFilter: "blur(6px)",
                }}
              >
                Explore treatments
              </Link>
            </div>
          </div>
        </BrandHeroGradient>
      </section>
      <section className="container mx-auto px-4 py-24">
        <h1 className="smh-heading text-5xl md:text-6xl mb-4">Luxury Dentistry, Quietly Confident.</h1>
        <p className="max-w-2xl smh-text-dim text-lg">
          Calm precision with a Champagne finish — magenta to turquoise gradient, gold accents, Montserrat + Lora.
        </p>
      </section>
    </>
  );
}
