'use client';
import React from 'react';

export default function ViewerShell({ title = 'Explore in 3D' }:{ title?: string }){
  return (
    <section id="viewer" className="relative my-10 rounded-2xl smh-glass overflow-hidden">
      <header className="p-6 border-b border-white/10">
        <h2 className="smh-heading text-xl md:text-2xl">{title}</h2>
        <p className="smh-text-dim text-sm mt-1">Rotate · Zoom · Explore — best on modern devices.</p>
      </header>
      <div className="aspect-video grid place-items-center">
        <p className="opacity-70">3D viewer placeholder — we’ll mount an R3F Canvas later.</p>
      </div>
    </section>
  );
}
