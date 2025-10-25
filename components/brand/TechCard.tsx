"use client";

import React from "react";

type Props = { title: string; subtitle: string; img: string };

export default function TechCard({ title, subtitle, img }: Props) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <article className="rounded-2xl bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-white/40 overflow-hidden">
      <div className="aspect-[16/9] bg-[image:var(--smh-gradient)] relative flex items-center justify-center text-4xl">
        {hasError ? (
          <span role="img" aria-label="Placeholder camera">
            📷
          </span>
        ) : (
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-overlay"
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold smh-heading">{title}</h3>
        <p className="text-sm smh-text-dim">{subtitle}</p>
      </div>
    </article>
  );
}
