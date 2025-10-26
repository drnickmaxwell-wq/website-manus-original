import React from "react";
import type { JSX as ReactJSX } from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  /** Optional background image under the mask (safe to omit) */
  backgroundImageSrc?: string;
  /** Toggle subtle particle overlays */
  particles?: Array<"gold"|"teal"|"magenta">;
  /** Film grain layer on/off */
  filmGrain?: boolean;
  as?: keyof ReactJSX.IntrinsicElements;
};

export default function BrandHeroGradient({
  className = "",
  children,
  backgroundImageSrc,
  particles = ["gold","teal"],
  filmGrain = true,
  as: Tag = "section",
}: Props) {
  const AnyTag: any = Tag;

  return (
    <AnyTag
      className={[
        "relative overflow-hidden smh-gradient-bg smh-wave-mask",
        className,
      ].join(" ")}
      aria-label="Champagne gradient hero"
    >
      {/* Optional masked background image */}
      {backgroundImageSrc ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: `url("${backgroundImageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
          }}
        />
      ) : null}

      {/* Particle overlays (subtle) */}
      {particles?.includes("gold") && (
        <div
          aria-hidden="true"
          className="smh-particles-gold absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light"
        />
      )}
      {particles?.includes("teal") && (
        <div
          aria-hidden="true"
          className="smh-particles-teal absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light"
        />
      )}
      {particles?.includes("magenta") && (
        <div
          aria-hidden="true"
          className="smh-particles-magenta absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light"
        />
      )}

      {/* Film grain overlay */}
      {filmGrain && (
        <div aria-hidden="true" className="smh-film-grain absolute inset-0 -z-10 pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-[10] isolate pointer-events-auto">{children}</div>
    </AnyTag>
  );
}

