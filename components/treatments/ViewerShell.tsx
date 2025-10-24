"use client";
import React, { ReactNode } from "react";
type Props = { title?: string; children?: ReactNode; };
export default function ViewerShell({ title="Interactive 3D Viewer", children }: Props) {
  return (
    <section id="viewer" className="my-10 md:my-16 rounded-2xl smh-glass">
      <header className="flex flex-col gap-2 p-4 md:p-6 border-b border-[color:color-mix(in_oklab,var(--smh-text) 12%,transparent)]">
        <h2 className="smh-heading text-xl md:text-2xl">{title}</h2>
        <span className="text-xs uppercase tracking-[0.35em] smh-text-dim">Rotate · Zoom · Explore</span>
      </header>
      <div className="relative aspect-video rounded-xl overflow-hidden m-4 md:m-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.06),transparent_60%)]" />
        {children ?? <p className="absolute inset-0 grid place-items-center opacity-80">3D viewer coming soon</p>}
      </div>
      <p className="px-4 pb-6 smh-text-dim text-sm">Optimised for modern devices.</p>
    </section>
  );
}
