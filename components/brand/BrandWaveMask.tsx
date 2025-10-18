import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function BrandWaveMask({ className = "", children }: Props) {
  return (
    <div className={["relative smh-wave-mask", className].join(" ")}>
      {children}
    </div>
  );
}

