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
    <Component className={["relative overflow-hidden", className].join(" ")}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-40 smh-wave-mask pointer-events-none"
        style={{ background: "var(--smh-gradient)" }}
      />
      {backgroundImageSrc ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-35 smh-wave-mask pointer-events-none"
          style={{
            backgroundImage: `url("${backgroundImageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "soft-light",
            opacity: 0.85,
          }}
        />
      ) : null}
      {waveOverlayOpacity > 0 ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-30 smh-wave-mask pointer-events-none"
          style={{
            background: `radial-gradient(120% 110% at 50% 0%, color-mix(in srgb, var(--smh-bg) ${highlightOpacity * 100}%, transparent), transparent)`,
            mixBlendMode: "screen",
            opacity: waveOverlayOpacity,
          }}
        />
      ) : null}
      {goldRimEnabled ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-16 pointer-events-none"
          style={{
            border: "1px solid color-mix(in oklab, var(--smh-accent-gold) 45%, transparent)",
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        />
      ) : null}
      {showGoldParticles ? (
        <div
          aria-hidden="true"
          className="smh-particles-gold absolute inset-0 -z-20 pointer-events-none mix-blend-soft-light"
          style={{ opacity: goldOverlayOpacity }}
        />
      ) : null}
      {particles.includes("teal") ? (
        <div
          aria-hidden="true"
          className="smh-particles-teal absolute inset-0 -z-19 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.16 }}
        />
      ) : null}
      {particles.includes("magenta") ? (
        <div
          aria-hidden="true"
          className="smh-particles-magenta absolute inset-0 -z-18 pointer-events-none mix-blend-soft-light"
          style={{ opacity: 0.14 }}
        />
      ) : null}
      {filmGrain ? (
        <div
          aria-hidden="true"
          className="smh-film-grain absolute inset-0 -z-17 pointer-events-none"
        />
      ) : null}
      <div className="relative z-[10] isolate pointer-events-auto">{children}</div>
    </Component>
  );
}
