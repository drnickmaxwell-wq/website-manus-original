import "./globals.css";
import "@/styles/tokens/smh-champagne-tokens.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@/components/layout/header";
import SiteFooter from "@/components/layout/SiteFooter";
import { Montserrat, Lora } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap", weight: ["400","600","700"], variable:"--font-montserrat" });
const lora = Lora({ subsets: ["latin"], display: "swap", weight: ["400","600","700"], variable:"--font-lora" });

export const metadata: Metadata = {
  title: "St Mary’s House Dental",
  description: "Champagne intelligence — calm, luxury dentistry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`}>
      <body className="min-h-screen text-[color:var(--smh-text)] bg-white">
        {/* Background shell sits behind everything */}
        <div className="fixed inset-0 -z-10 smh-gradient-bg smh-wave-mask">
          <div className="smh-film-grain absolute inset-0 pointer-events-none" />
          <div className="smh-particles-gold absolute inset-0 pointer-events-none mix-blend-soft-light" />
          <div className="smh-particles-teal absolute inset-0 pointer-events-none mix-blend-soft-light" />
          <div className="smh-particles-magenta absolute inset-0 pointer-events-none mix-blend-soft-light" />
        </div>

        {/* Header always clickable and above overlays */}
        <Header />

        <main className="relative z-[10]">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
