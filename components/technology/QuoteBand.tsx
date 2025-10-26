import React from "react";

export default function QuoteBand(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 smh-gradient-bg smh-wave-mask opacity-90" aria-hidden />
      <div className="container relative mx-auto px-6 max-w-5xl py-16 text-center">
        <p className="smh-heading text-2xl md:text-3xl italic opacity-[.92]">“Artistry in every millimetre.”</p>
        <p className="mt-2 opacity-80">— Dr Nick Maxwell</p>
      </div>
    </section>
  );
}
