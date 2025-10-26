import React from "react";
import { HeroSection } from "@/components/features/hero-section";
import { ServicesSection } from "@/components/features/services-section";
import { AboutSection } from "@/components/features/about-section";
import { TestimonialsSection } from "@/components/features/testimonials-section";
import { CTASection } from "@/components/features/cta-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
