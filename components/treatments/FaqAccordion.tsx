'use client';
import React, { useState } from 'react';

export type FaqItem = { q: string; a: string };
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="my-12 rounded-2xl smh-glass p-6 md:p-8">
      <h3 className="smh-heading text-xl md:text-2xl mb-4">Frequently Asked Questions</h3>
      <ul className="divide-y divide-white/10">
        {items.map((it, i) => (
          <li key={i}>
            <button
              className="w-full text-left py-4 focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium">{it.q}</span>
            </button>
            <div className={(open === i ? 'max-h-96' : 'max-h-0') + ' overflow-hidden transition-all'}>
              <p className="smh-text-dim pb-4">{it.a}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
