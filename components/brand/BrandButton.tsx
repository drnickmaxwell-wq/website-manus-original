import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | "a";
  href?: string;
};

export default function BrandButton({ as = "button", href, className = "", children, ...rest }: Props) {
  if (as === "a" && href) {
    return (
      <a href={href} className={["smh-btn", className].join(" ")} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={["smh-btn", className].join(" ")} {...rest}>
      {children}
    </button>
  );
}

