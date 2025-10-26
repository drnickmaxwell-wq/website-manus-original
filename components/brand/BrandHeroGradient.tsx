import React from "react";

type Intensity = "soft" | "standard" | "bold";
type GoldDensity = "light" | "med" | "heavy";

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

const intensityLayers: Record<Intensity, string> = {
  soft: "linear-gradient(135deg, rgba(13,14,16,0.15) 0%, rgba(255,255,255,0.18) 100%)",
  standard: "linear-gradient(135deg, rgba(13,14,16,0.22) 0%, rgba(255,255,255,0.2) 100%)",
  bold: "linear-gradient(135deg, rgba(13,14,16,0.28) 0%, rgba(255,255,255,0.25) 100%)",
};

const goldOpacityMap: Record<GoldDensity, number> = {
  light: 0.14,
  med: 0.22,
  heavy: 0.3,
};

export default function BrandHeroGradient({
  className = "",
  children,
  backgroundImageSrc,
  particles = ["gold", "teal", "magenta"],
  filmGrain = true,
  as: Tag = "section",
  intensity = "standard",
  waveOpacity = 0.16,
  goldDensity = "light",
  goldRimEnabled = false,
}: Props) {
  const Component = Tag as React.ComponentType<React.PropsWithChildren<{ className?: string }>>;
  const clampedWaveOpacity = Math.min(Math.max(waveOpacity, 0), 1);
  const goldOpacity = goldOpacityMap[goldDensity] ?? goldOpacityMap.med;
  const backdropLayer = intensityLayers[intensity] ?? intensityLayers.standard;

  return (
    <Component className={["relative isolate overflow-hidden", className].join(" ")}> 
      <div className="absolute inset-0 -z-40" style={{ backgroundImage: "var(--smh-gradient)" }} />
      <div
        className="absolute inset-0 -z-30 mix-blend-screen"
        style={{ backgroundImage: backdropLayer }}
        aria-hidden="true"
      />
      {goldRimEnabled ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-32"
          style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.55) 0%, transparent 100%)" }}
          aria-hidden="true"
        />
      ) : null}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/waves/smh-wave-mask.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: clampedWaveOpacity,
        }}
        aria-hidden="true"
      />
      {backgroundImageSrc ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: `url("${backgroundImageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.55,
          }}
        />
      ) : null}
      {particles.includes("gold") ? (
        <div
          aria-hidden="true"
          className="smh-particles-gold absolute inset-0 -z-10 pointer-events-none mix-blend-screen"
          style={{ opacity: goldOpacity }}
        />
      ) : null}
      {particles.includes("teal") ? (
        <div
          aria-hidden="true"
          className="smh-particles-teal absolute inset-0 -z-10 pointer-events-none mix-blend-screen"
          style={{ opacity: 0.18 }}
        />
      ) : null}
      {particles.includes("magenta") ? (
        <div
          aria-hidden="true"
          className="smh-particles-magenta absolute inset-0 -z-10 pointer-events-none mix-blend-screen"
          style={{ opacity: 0.16 }}
        />
      ) : null}
      {filmGrain ? (
        <div aria-hidden="true" className="smh-film-grain absolute inset-0 -z-10 pointer-events-none" />
      ) : null}
      <div className="relative z-[10] isolate pointer-events-auto">{children}</div>
    </Component>
  );
}
