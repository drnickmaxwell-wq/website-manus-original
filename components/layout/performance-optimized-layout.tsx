import React from "react";
import Header from "./header";

type PerformanceOptimizedLayoutProps = {
  children: React.ReactNode;
};

const highlightMap: Record<"soft" | "standard" | "bold", number> = {
  soft: 0.35,
  standard: 0.48,
  bold: 0.62,
};

const PerformanceOptimizedLayout = ({ children }: PerformanceOptimizedLayoutProps) => {
  const highlightStrength = highlightMap.standard;

  return (
    <div className="relative z-0 flex min-h-screen flex-col">
      <div className="fixed inset-0 -z-10 smh-gradient-bg smh-wave-mask">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(120% 100% at 50% 0%, rgba(255, 255, 255, ${highlightStrength}), rgba(255, 255, 255, 0))`,
            mixBlendMode: "screen",
          }}
        />
        <div className="smh-film-grain absolute inset-0 pointer-events-none" />
        <div
          className="smh-particles-gold absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.18 }}
        />
        <div
          className="smh-particles-teal absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.16 }}
        />
        <div
          className="smh-particles-magenta absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.14 }}
        />
      </div>

      <Header />

      <div className="relative z-[10] flex-1">{children}</div>
    </div>
  );
};

export default PerformanceOptimizedLayout;
