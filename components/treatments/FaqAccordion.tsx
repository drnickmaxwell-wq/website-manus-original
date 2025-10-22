"use client";
import React, { useState } from "react";

export interface FaqItem { question: string; answer: string; }
interface FaqAccordionProps { items: FaqItem[]; }

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="my-12 md:my-16">
      <h2 className="smh-heading text-2xl md:text-3xl">Frequently asked questions</h2>
      <ul className="mt-6 divide-y divide-white/10">
        {items.map((it, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={it.question}>
              <button
                type="button"
                className="w-full text-left py-4 focus:outline-none group"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{it.question}</span>
              </button>
              <div className={isOpen ? "max-h-[32rem] pb-4 smh-text-dim" : "max-h-0 overflow-hidden smh-text-dim"}>
                <p>{it.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

