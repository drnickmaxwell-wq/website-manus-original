import React from "react";

type Intensity = "soft" | "standard" | "bold";
type GoldDensity = "off" | "low" | "med" | "high";

type Props = {
  className?: string;
  children?: React.ReactNode;
  backgroundImageSrc?: string;
  particles?: Array<"gold" | "teal" | "magenta">;
  filmGrain?: boolean;
  as?: React.ElementType;
  intensity?: Intensity;
  waveOpacity?: number;
  goldDensity?: GoldDensity;
  goldRimEnabled?: boolean;
};

const intensityHighlight: Record<Intensity, number> = {
  soft: 0.32,
  standard: 0.48,
  bold: 0.64,
};

const goldDensityOpacity: Record<GoldDensity, number> = {
  off: 0,
  low: 0.1,
  med: 0.18,
  high: 0.26,
};

const clamp = (value: number) => Math.max(0, Math.min(1, value));

export default function BrandHeroGradient({
  className = "",
  children,
  backgroundImageSrc,
  particles = ["gold", "teal", "magenta"],
  filmGrain = true,
  as: Tag = "section",
  intensity = "standard",
  waveOpacity = 0.18,
  goldDensity = "med",
  goldRimEnabled = false,
}: Props) {
  const Component = Tag as React.ComponentType<React.PropsWithChildren<{ className?: string }>>;
  const highlightOpacity = intensityHighlight[intensity];
  const waveOverlayOpacity = clamp(waveOpacity);
  const showGoldParticles = goldDensity !== "off" && particles.includes("gold");
  const goldOverlayOpacity = goldDensityOpacity[goldDensity];

  return (
    <Component className={["relative overflow-hidden smh-gradient-bg smh-wave-mask", className].join(" ")}> 
      {backgroundImageSrc ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("${backgroundImageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            zIndex: -30,
          }}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(120% 110% at 50% 0%, rgba(255, 255, 255, ${highlightOpacity}), rgba(255, 255, 255, 0))`,
          mixBlendMode: "screen",
          zIndex: -24,
        }}
      />
      {waveOverlayOpacity > 0 ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: "url('/waves/smh-wave-mask.svg')",
            maskImage: "url('/waves/smh-wave-mask.svg')",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            background: "radial-gradient(120% 120% at 50% 10%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
            mixBlendMode: "screen",
            opacity: waveOverlayOpacity,
            zIndex: -22,
          }}
        />
      ) : null}
      {goldRimEnabled ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            border: "1px solid color-mix(in oklab, var(--smh-accent-gold) 45%, transparent)",
            mixBlendMode: "screen",
            opacity: 0.9,
            zIndex: -16,
          }}
        />
      ) : null}
      {showGoldParticles ? (
        <div
          aria-hidden="true"
          className="smh-particles-gold absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ opacity: goldOverlayOpacity, zIndex: -20 }}
        />
      ) : null}
      {particles.includes("teal") ? (
        <div
          aria-hidden="true"
          className="smh-particles-teal absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.16, zIndex: -19 }}
        />
      ) : null}
      {particles.includes("magenta") ? (
        <div
          aria-hidden="true"
          className="smh-particles-magenta absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.14, zIndex: -18 }}
        />
      ) : null}
      {filmGrain ? (
        <div
          aria-hidden="true"
          className="smh-film-grain absolute inset-0 pointer-events-none"
          style={{ zIndex: -17 }}
        />
      ) : null}
      <div className="relative z-[10] isolate pointer-events-auto">{children}</div>
    </Component>
  );
}
