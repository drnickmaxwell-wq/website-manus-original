import React from "react";

const items = [
  { name: "Emma Roberts",    quote: "Absolutely brilliant service. The AI tools helped me understand exactly what to expect." },
  { name: "Michael Chen",    quote: "Professional, precise, and painless. Composite bonding exceeded expectations!" },
  { name: "Lucy Anderson",   quote: "I was nervous, but the team put me at ease — I can’t stop smiling." },
];

export default function TechTestimonials(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="smh-heading text-3xl md:text-4xl">Patient Stories</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i)=>(
            <figure key={i} className="rounded-2xl border smh-gold-border bg-[color-mix(in_oklab,white_75%,transparent)] p-6 text-left">
              <div className="text-sm opacity-90 leading-relaxed">“{t.quote}”</div>
              <figcaption className="mt-4 opacity-70 text-sm">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
