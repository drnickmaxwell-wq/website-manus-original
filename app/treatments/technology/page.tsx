"use client";
import React from "react";
import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import TechWorkflow from "@/components/technology/TechWorkflow";
import TechEquipment from "@/components/technology/TechEquipment";
import QuoteBand from "@/components/technology/QuoteBand";
import TechTestimonials from "@/components/technology/TechTestimonials";
import TechFinalCTA from "@/components/technology/TechFinalCTA";

export default function Page() {
  return (
    <TreatmentLayout title="Technology in Harmony" subtitle="Where precision meets artistry.">
      <div className="space-y-16">
        <section id="workflow" className="space-y-6">
          <p className="smh-text-dim text-lg">
            Explore how our digital workflow orchestrates patient comfort with uncompromising clinical precision.
          </p>
        </section>
        <TechWorkflow />
        <TechEquipment />
        <QuoteBand />
        <TechTestimonials />
        <TechFinalCTA />
      </div>
    </TreatmentLayout>
  );
}
