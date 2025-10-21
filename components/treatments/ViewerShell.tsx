'use client';
import React, { useState } from 'react';

type Props = {
  title?: string;
  children?: React.ReactNode; // future: inject real 3D viewer here
};

export default function ViewerShell({ title = 'Interactive 3D Viewer', children }: Props) {
  const [loading] = useState(false);
  const placeholder = (
    <p className="opacity-70">
      3D viewer placeholder — we’ll mount the real component here.
    </p>
  );

  return (
    <section
      id="viewer"
      className="relative p-6 md:p-8 rounded-2xl smh-glass my-8"
      aria-label={title}
    >
      <h2 className="smh-heading text-2xl md:text-3xl mb-4">{title}</h2>
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
        {/* Placeholder canvas area. Replace with R3F/WebGPU later */}
        <div className="absolute inset-0 grid place-items-center bg-[color-mix(in_oklab,var(--smh-bg)_85%,transparent)]">
          {loading ? <p className="opacity-80">Loading viewer…</p> : children ?? placeholder}
        </div>
      </div>
      <p className="smh-text-dim text-sm mt-3">
        Rotate • Zoom • Explore — best experienced on modern devices.
      </p>
    </section>
  );
}
