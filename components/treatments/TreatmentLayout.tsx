"use client";
import React, { ReactNode } from "react";
import HeroFX from "@/components/champagne/HeroFX";

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};
export default function TreatmentLayout({ title, subtitle, eyebrow, children }: Props) {
  return (
    <main className="relative overflow-hidden">
      <div className="my-10 md:my-16">
        <HeroFX title={title} subtitle={subtitle} eyebrow={eyebrow} theme="magenta-gold">
          <div className="mt-8 flex justify-center gap-3">
            <a href="/contact" className="smh-btn">
              Book consultation
            </a>
            <a href="#viewer" className="smh-btn-secondary">
              Open 3D viewer
            </a>
          </div>
        </HeroFX>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </main>
  );
}
