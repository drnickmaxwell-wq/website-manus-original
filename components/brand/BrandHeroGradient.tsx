import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  backgroundImageSrc?: string;
  particles?: Array<"gold"|"teal"|"magenta">;
  filmGrain?: boolean;
  as?: React.ElementType;
};

export default function BrandHeroGradient({
  className = "",
  children,
  backgroundImageSrc,
  particles = ["gold","teal","magenta"],
  filmGrain = true,
  as: Tag = "section",
}: Props) {
  const Component = Tag as React.ElementType;

  return React.createElement(
    Component,
    {
      className: ["relative overflow-hidden smh-gradient-bg smh-wave-mask", className].join(" "),
      "aria-label": "Champagne gradient hero",
    },
    backgroundImageSrc
      ? React.createElement("div", {
          "aria-hidden": "true",
          className: "absolute inset-0 -z-10 pointer-events-none",
          style: {
            backgroundImage: `url("${backgroundImageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
          },
        })
      : null,
    particles.includes("gold")
      ? React.createElement("div", {
          "aria-hidden": "true",
          className: "smh-particles-gold absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light",
        })
      : null,
    particles.includes("teal")
      ? React.createElement("div", {
          "aria-hidden": "true",
          className: "smh-particles-teal absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light",
        })
      : null,
    particles.includes("magenta")
      ? React.createElement("div", {
          "aria-hidden": "true",
          className: "smh-particles-magenta absolute inset-0 -z-10 pointer-events-none mix-blend-soft-light",
        })
      : null,
    filmGrain
      ? React.createElement("div", {
          "aria-hidden": "true",
          className: "smh-film-grain absolute inset-0 -z-10 pointer-events-none",
        })
      : null,
    React.createElement(
      "div",
      { className: "relative z-[10] isolate pointer-events-auto" },
      children,
    ),
  );
}
