import React from "react";

type Props = {
  className?: string;
  gold?: boolean;
  teal?: boolean;
  magenta?: boolean;
};

export default function BrandParticles({
  className = "",
  gold = true,
  teal = true,
  magenta = true,
}: Props) {
  return (
    <div className={["pointer-events-none absolute inset-0", className].join(" ")}>
      {gold && <div aria-hidden className="absolute inset-0 smh-particles-gold" />}
      {teal && <div aria-hidden className="absolute inset-0 smh-particles-teal" />}
      {magenta && <div aria-hidden className="absolute inset-0 smh-particles-magenta" />}
    </div>
  );
}

