import BrandHeroGradient from "@/components/brand/BrandHeroGradient";
import TechCard from "@/components/brand/TechCard";
import WaveDivider from "@/components/brand/WaveDivider";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "Technology" };

const workflowSteps = [
  {
    title: "Scan",
    description:
      "We capture ultra-precise digital impressions in minutes so there is no need for messy trays or repeat visits.",
    icon: "🛰️",
  },
  {
    title: "Design",
    description:
      "Our clinicians design your bespoke treatment plan chairside, blending aesthetics and function in real time.",
    icon: "🧠",
  },
  {
    title: "Make",
    description:
      "In-house milling and 3D printing allow us to craft restorations with champagne-level finish while you relax.",
    icon: "🛠️",
  },
] as const;

const equipmentGallery = [
  {
    title: "iTero Element 5D Scanner",
    subtitle: "High-definition imaging for orthodontics and restorative dentistry in a single visit.",
    img: "/tech/itero-element-5d.webp",
  },
  {
    title: "CEREC Primescan",
    subtitle: "Same-day crowns and onlays crafted with micron-level accuracy.",
    img: "/tech/cerec-primescan.webp",
  },
  {
    title: "Planmeca ProMax 3D",
    subtitle: "Comprehensive 3D diagnostics for implants, airway health and surgical planning.",
    img: "/tech/planmeca-promax-3d.webp",
  },
] as const;

export default function Page() {
  return (
    <main className="relative text-[color:var(--smh-text)]">
      <BrandHeroGradient
        className="py-20 md:py-28"
        backgroundImageSrc="/waves/hero-waves-alone.webp"
        particles={["gold", "teal"]}
        filmGrain
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(240px,1fr)] lg:items-start">
            <div>
              <p className="smh-text uppercase tracking-[0.4em] text-xs text-white/70">
                Champagne Digital Dentistry
              </p>
              <h1 className="smh-heading mt-3 text-4xl font-semibold md:text-5xl">
                Technology for a Softer, Smarter Smile Journey
              </h1>
              <p className="smh-text mt-4 max-w-2xl text-base md:text-lg">
                Every appointment is guided by a fully digital workflow that blends artful
                craftsmanship with the precision of leading-edge scanners, printers and lasers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="smh-btn">
                  Book consultation
                </a>
                <a href="#workflow" className="smh-btn smh-btn-ghost">
                  Explore workflow
                </a>
              </div>
              <div className="mt-10 lg:hidden">
                <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-xl shadow-lg ring-1 ring-white/30">
                  <GroupSubnav group="technology" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-xl shadow-lg ring-1 ring-white/30">
                <GroupSubnav group="technology" />
              </div>
            </div>
          </div>
        </div>
      </BrandHeroGradient>

      <section id="workflow" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="smh-heading text-3xl font-semibold md:text-4xl">Our Digital Workflow</h2>
          <p className="smh-text mt-4 text-base text-white/80">
            We choreograph every step with technology so you spend less time in the chair and more time enjoying your results.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col justify-between rounded-2xl bg-white/65 p-6 shadow-lg ring-1 ring-white/40 backdrop-blur-xl"
            >
              <div>
                <span className="text-3xl" aria-hidden>
                  {step.icon}
                </span>
                <h3 className="smh-heading mt-4 text-2xl font-semibold">{step.title}</h3>
                <p className="smh-text mt-3 text-sm text-white/85">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WaveDivider />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="smh-heading text-3xl font-semibold md:text-4xl">Our Equipment Gallery</h2>
          <p className="smh-text mt-4 text-base text-white/80">
            Explore the innovations that power same-day dentistry, crystal-clear diagnostics and seamless comfort.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {equipmentGallery.map((item) => (
            <TechCard key={item.title} title={item.title} subtitle={item.subtitle} img={item.img} />
          ))}
        </div>
      </section>

      <BrandHeroGradient
        className="mt-10 py-20 md:mt-16 md:py-28"
        backgroundImageSrc="/waves/hero-waves-alone.webp"
        particles={["gold", "teal"]}
        filmGrain
      >
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="smh-heading text-3xl font-semibold md:text-4xl">
            Ready to Experience Champagne Technology?
          </h2>
          <p className="smh-text mt-4 text-base md:text-lg">
            Schedule a visit to see our scanners, lasers and digital planning tools in action —
            and leave with a smile that feels as good as it looks.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="/contact" className="smh-btn">
              Reserve your visit
            </a>
            <a href="/virtual-consult" className="smh-btn smh-btn-ghost">
              Start a virtual consult
            </a>
          </div>
        </div>
      </BrandHeroGradient>

      <div id="viewer" className="sr-only" aria-hidden />
    </main>
  );
}
