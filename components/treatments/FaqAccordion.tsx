'use client';

import { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="my-12 md:my-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="smh-heading text-2xl md:text-3xl">Frequently asked questions</h2>
        <div className="mt-6 divide-y divide-[color-mix(in_oklab,var(--smh-text)_14%,transparent)] rounded-3xl border border-[color-mix(in_oklab,var(--smh-text)_12%,transparent)] bg-[color-mix(in_oklab,var(--smh-bg)_94%,transparent)]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                className="group block w-full px-6 py-5 text-left transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--smh-bg)_88%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--smh-primary-teal)] focus-visible:ring-offset-2"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="smh-heading text-base font-semibold md:text-lg">{item.question}</span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.4em] text-[color-mix(in_oklab,var(--smh-text-muted)_70%,transparent)]">
                    {isOpen ? 'Close' : 'Open'}
                  </span>
                </div>
                <div
                  className={`smh-text-dim mt-3 text-sm leading-relaxed transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
