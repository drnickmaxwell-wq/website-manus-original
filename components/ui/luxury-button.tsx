import * as React from "react";

type Variant = "primary" | "outline" | "solid" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  glow?: boolean;
  shimmer?: boolean;
  /**
   * LuxuryButton renders a native <button>; composition via `asChild` is not supported.
   * This prop is intentionally typed as never to surface a TypeScript error if passed.
   */
  asChild?: never;
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      glow = false,
      shimmer = false,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-2xl transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
    const variants: Record<Variant, string> = {
      primary:
        // Champagne-friendly: glass + gold keyline
        "smh-glass smh-gold-border px-6 py-3",
      outline:
        "bg-transparent border smh-gold-border px-6 py-3",
      solid:
        "bg-white/10 text-white px-6 py-3",
      ghost:
        "bg-transparent px-6 py-3",
    };
    const sizes: Record<Size, string> = {
      sm: "h-9 text-sm",
      md: "h-11 text-base",
      lg: "h-12 text-lg",
      xl: "h-14 text-xl",
    };

    const cls = [
      base,
      variants[variant],
      sizes[size],
      glow ? "glow-soft" : "",
      shimmer ? "shimmer" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={cls}
        disabled={disabled}
        type={type ?? "button"}
        {...props}
      />
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";
export { LuxuryButton };
export default LuxuryButton;
