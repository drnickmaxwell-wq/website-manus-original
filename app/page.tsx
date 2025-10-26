import React from "react";
import WaveHero from "@/components/brand/WaveHero";

export default function Page(){
  return (
    <>
      <WaveHero
        eyebrow="AI-Powered 3-D Dentistry"
        title="Luxury Dentistry, Quietly Confident."
        subtitle="Calm precision powered by AI and artistry. Champagne gradient with wave underplate, soft grain and subtle sparkle."
        primaryHref="/contact" primaryLabel="Book Consultation"
        secondaryHref="/treatments" secondaryLabel="Explore treatments"
        showParticles showGrain
      />
      <section className="container mx-auto px-4 py-24">
        <h1 className="smh-heading text-5xl md:text-6xl mb-4">Luxury Dentistry, Quietly Confident.</h1>
        <p className="max-w-2xl smh-text-dim text-lg">
          Calm precision with a Champagne finish — magenta to turquoise gradient, gold accents, Montserrat + Lora.
        </p>
      </section>
    </>
  );
}
