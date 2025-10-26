"use client";

import React from "react";
import { ArrowRight, Sparkles, Award, Users, Clock } from "lucide-react";
import WaveHero from "@/components/brand/WaveHero";
import IridescentHeading from "@/components/brand/IridescentHeading";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { LuxuryCard, LuxuryCardContent } from "@/components/ui/luxury-card";
import { ServicesSection } from "@/components/features/services-section";
import { AboutSection } from "@/components/features/about-section";
import { TestimonialsSection } from "@/components/features/testimonials-section";
import WaveDivider from "@/components/brand/WaveDivider";
import { CTASection } from "@/components/features/cta-section";
import useCursorVars from "@/components/brand/useCursorVars";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const heroStats = [
  { icon: Users, value: "2,500+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Sparkles, value: "98%", label: "Satisfaction Rate" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
];

export default function Page() {
  const onMove = useCursorVars();

  return (
    <main>
      <WaveHero className="py-20 md:py-28" particles={["gold", "teal"]} filmGrain>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col items-center text-center text-balance gap-8">
            <div className="inline-flex items-center gap-2 rounded-full px-6 py-2 smh-glass smh-gold-border">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-text font-medium">AI-Powered 3D Dentistry</span>
            </div>
            <IridescentHeading className="text-4xl md:text-6xl mb-2">
              Luxury Dentistry, Redefined by Technology
            </IridescentHeading>
            <p className="smh-text-dim max-w-2xl">
              Calm precision, powered by AI and artistry. From digital twin smile simulations to
              same-day veneers, experience coastal tranquility paired with cutting-edge care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LuxuryButton
                variant="primary"
                size="lg"
                glow
                shimmer
                className="group cta-champagne"
                onMouseMove={onMove}
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </LuxuryButton>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
              {heroStats.map(({ icon: Icon, value, label }) => (
                <LuxuryCard key={label} variant="glass" hover glow className="text-center smh-gold-border">
                  <LuxuryCardContent className="py-6 smh-glass">
                    <div className="flex justify-center mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full smh-gradient-bg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-brand-text mb-1">{value}</div>
                    <div className="text-sm text-brand-muted">{label}</div>
                  </LuxuryCardContent>
                </LuxuryCard>
              ))}
            </div>
          </div>
        </div>
      </WaveHero>

      <LayoutWrapper>
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <WaveDivider />
        <CTASection />
      </LayoutWrapper>
    </main>
  );
}
