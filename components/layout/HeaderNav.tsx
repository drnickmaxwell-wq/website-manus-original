"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav(){
  const pathname = usePathname();
  const isActive = (href:string) => (href === "/" ? pathname === "/" : pathname === href);

  const link = (href:string, label:string) => (
    <Link
      href={href}
      className={[
        "px-4 py-2 rounded-full transition",
        isActive(href) ? "bg-[color:var(--smh-surface-2)] text-[color:var(--smh-text)]" : "hover:bg-[color:var(--smh-surface)]"
      ].join(" ")}
      aria-current={isActive(href) ? "page" : undefined}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-[60] backdrop-blur-md/20 pointer-events-auto">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="smh-heading text-xl font-semibold">St Mary’s House Dental</Link>
        <nav className="flex items-center gap-2">
          {link("/", "Home")}
          {link("/treatments", "Treatments")}
          {link("/treatments/technology", "Technology")}
          {link("/contact", "Contact")}
        </nav>
      </div>
    </header>
  );
}
