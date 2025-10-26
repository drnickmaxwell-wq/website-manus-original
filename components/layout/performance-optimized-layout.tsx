import type { ReactNode } from "react";
import Header from "@/components/layout/header";
import SiteFooter from "@/components/layout/SiteFooter";

interface PerformanceOptimizedLayoutProps {
  children: ReactNode;
}

export default function PerformanceOptimizedLayout({ children }: PerformanceOptimizedLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col text-[color:var(--smh-text)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "var(--smh-gradient)" }} />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(circle at 80% 10%, rgba(64,196,180,0.18), transparent 55%)",
            mixBlendMode: "screen",
            opacity: 0.85,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/waves/smh-wave-mask.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div className="absolute inset-0 smh-film-grain" />
        <div className="absolute inset-0 smh-particles-gold" style={{ opacity: 0.18 }} />
        <div className="absolute inset-0 smh-particles-teal" style={{ opacity: 0.14 }} />
        <div className="absolute inset-0 smh-particles-magenta" style={{ opacity: 0.12 }} />
      </div>
      <Header />
      <main className="relative z-[10] flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
