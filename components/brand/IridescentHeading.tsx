import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = { as?: HeadingTag; className?: string; children: React.ReactNode };

export default function IridescentHeading({ as = "h1", className = "", children }: Props) {
  const Tag = as;
  return <Tag className={["smh-iridescent smh-heading", className].join(" ").trim()}>{children}</Tag>;
}
