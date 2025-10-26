import React from "react";
// @ts-expect-error - default exports are shimmed from named exports during migration
import HeroSectionDefault, { HeroSection as HeroSectionNamed } from "@/components/features/hero-section";
// @ts-expect-error - default exports are shimmed from named exports during migration
import ServicesSectionDefault, { ServicesSection as ServicesSectionNamed } from "@/components/features/services-section";
// @ts-expect-error - default exports are shimmed from named exports during migration
import AboutSectionDefault, { AboutSection as AboutSectionNamed } from "@/components/features/about-section";
// @ts-expect-error - default exports are shimmed from named exports during migration
import TestimonialsSectionDefault, { TestimonialsSection as TestimonialsSectionNamed } from "@/components/features/testimonials-section";
// @ts-expect-error - default exports are shimmed from named exports during migration
import CTASectionDefault, { CTASection as CTASectionNamed } from "@/components/features/cta-section";

const HeroSection = (HeroSectionDefault ?? HeroSectionNamed) as typeof HeroSectionNamed;
const ServicesSection = (ServicesSectionDefault ?? ServicesSectionNamed) as typeof ServicesSectionNamed;
const AboutSection = (AboutSectionDefault ?? AboutSectionNamed) as typeof AboutSectionNamed;
const TestimonialsSection = (TestimonialsSectionDefault ?? TestimonialsSectionNamed) as typeof TestimonialsSectionNamed;
const CTASection = (CTASectionDefault ?? CTASectionNamed) as typeof CTASectionNamed;

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
