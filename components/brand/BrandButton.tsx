import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  href?: undefined;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
};

type Props = (ButtonProps | AnchorProps) & {
  className?: string;
};

export default function BrandButton({ as = "button", href, className = "", children, ...rest }: Props) {
  const classes = ["smh-btn", className].filter(Boolean).join(" ");

  if (as === "a" && href) {
    const { href: _ignoredHref, ...anchorRest } = (rest as AnchorProps) ?? {};
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}

