import React from "react";

type Item = { src?: string; name: string; sub: string; };

const items: Item[] = [
  { src: "/tech/itero-element-5d.webp",    name: "iTero Element 5D",  sub: "Ultra-fast 3D scanner" },
  { src: "/tech/cerec-primescan.webp",     name: "CEREC Primescan",   sub: "AI-powered scanner" },
  { src: "/tech/planmeca-promax-3d.webp",  name: "Planmeca ProMax 3D", sub: "3-in-1 imaging" },
];

export default function TechEquipment(){
  return (
    <section className="py-16 bg-[color-mix(in_oklab,var(--smh-bg)_92%,transparent)]">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="smh-heading text-3xl md:text-4xl">Our Equipment Gallery</h2>
        <p className="smh-text-dim mt-2">Precision technology at every step</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, i)=>(
            <article key={i} className="overflow-hidden rounded-2xl border smh-gold-border bg-[color-mix(in_oklab,white_70%,transparent)] shadow-[0_10px_30px_-12px_rgba(0,0,0,.15)]">
              <div className="aspect-[4/3] relative">
                {it.src
                  ? <img src={it.src} alt={it.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy"/>
                  : <div className="absolute inset-0 smh-gradient-bg opacity-80" />}
              </div>
              <div className="p-5 text-left">
                <div className="font-semibold">{it.name}</div>
                <div className="opacity-75 text-sm mt-1">{it.sub}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
