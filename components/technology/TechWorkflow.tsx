import React from "react";

type Step = { icon?: React.ReactNode; title: string; body: string; };

const steps: Step[] = [
  { title: "Scan",  body: "3D intraoral scanning captures every detail with micron precision — no impressions." },
  { title: "Design", body: "AI-assisted planning combines perfect form, function, and aesthetics tailored to you." },
  { title: "Make",  body: "In-house milling & fabrication deliver same-day results with unrivalled accuracy." }
];

export default function TechWorkflow(){
  return (
    <section id="workflow" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="smh-heading text-3xl md:text-4xl">Our Digital Workflow</h2>
        <p className="smh-text-dim mt-2">Three steps to perfection</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i)=>(
            <article key={i} className="rounded-2xl border smh-gold-border bg-[color-mix(in_oklab,white_75%,transparent)] shadow-[0_10px_30px_-12px_rgba(0,0,0,.15)] p-6 text-left">
              <div className="text-lg font-semibold mb-2">{s.title}</div>
              <p className="opacity-80 leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
