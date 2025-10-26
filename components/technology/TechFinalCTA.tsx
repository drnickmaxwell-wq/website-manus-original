import React from "react";

export default function TechFinalCTA(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 smh-gradient-bg smh-wave-mask opacity-95" aria-hidden />
      <div className="container relative mx-auto px-6 max-w-6xl py-16 text-center">
        <h2 className="smh-heading text-2xl md:text-3xl">Experience Tomorrow’s Dentistry Today.</h2>
        <p className="smh-text-dim mt-2 max-w-2xl mx-auto">Discover how our precision technology creates exceptional outcomes with personalised comfort.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/contact" className="cta-champagne">Book Consultation</a>
          <a href="/patient-info" className="cta-champagne">Tour Our Clinic</a>
        </div>
      </div>
    </section>
  );
}
