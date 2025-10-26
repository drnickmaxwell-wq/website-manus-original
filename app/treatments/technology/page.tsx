"use client";
import React from "react";
import WaveHero from "@/components/brand/WaveHero";
import IridescentHeading from "@/components/brand/IridescentHeading";
import TechWorkflow from "@/components/technology/TechWorkflow";
import TechEquipment from "@/components/technology/TechEquipment";
import QuoteBand from "@/components/technology/QuoteBand";
import TechTestimonials from "@/components/technology/TechTestimonials";
import TechFinalCTA from "@/components/technology/TechFinalCTA";
export default function Page(){
  return(
    <main>
      <WaveHero className="py-20 md:py-28" particles={["gold","teal"]} filmGrain>
        <div className="container mx-auto px-6 max-w-6xl">
          <IridescentHeading className="text-4xl md:text-6xl mb-4">Technology in Harmony</IridescentHeading>
          <p className="smh-text-dim max-w-xl">Where precision meets artistry</p>
          <div className="mt-8 flex gap-4">
            <a href="#workflow" className="cta-champagne">Explore Our Digital Workflow</a>
          </div>
        </div>
      </WaveHero>
      <TechWorkflow/>
      <TechEquipment/>
      <QuoteBand/>
      <TechTestimonials/>
      <TechFinalCTA/>
    </main>
  );
}
