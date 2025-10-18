import React from "react";

/** Curved wave divider band between sections */
export default function BrandDivider({ className = "" }: { className?: string }) {
  return <div aria-hidden className={["smh-wave-divider", className].join(" ")} />;
}

