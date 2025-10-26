import "./globals.css";
import "@/styles/tokens/smh-champagne-tokens.css";
import type { Metadata } from "next";
import React from "react";
import PerformanceOptimizedLayout from "@/components/layout/performance-optimized-layout";
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
        <main>
          <PerformanceOptimizedLayout>{children}</PerformanceOptimizedLayout>
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
