import React from "react";
import WaveHero from "@/components/brand/WaveHero";
import IridescentHeading from "@/components/brand/IridescentHeading";
import { ServicesSection } from "@/components/features/services-section";
import { AboutSection } from "@/components/features/about-section";
import { TestimonialsSection } from "@/components/features/testimonials-section";
import { CTASection } from "@/components/features/cta-section";

export default function Page() {
  return (
    <main>
      <WaveHero className="py-20 md:py-28" particles={["gold", "teal"]} filmGrain>
        <div className="container mx-auto px-6 max-w-6xl">
          <IridescentHeading className="text-4xl md:text-6xl mb-4">
            Luxury Dentistry, Redefined by Technology
          </IridescentHeading>
          <p className="smh-text-dim max-w-xl">
            Calm precision, powered by AI and artistry.
          </p>
        </div>
      </WaveHero>
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
