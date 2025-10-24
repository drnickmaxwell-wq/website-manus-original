import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "Cosmetic Dentistry" };

export default function Page() {
  return (
    <TreatmentLayout
      title="Cosmetic Dentistry"
      subtitle="Luxe enhancements for symmetry, luminosity and confidence."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-10">
        <div className="rounded-2xl border border-white/10 p-4">
          <GroupSubnav group="cosmetic" />
        </div>
        <section className="rounded-2xl smh-glass p-6">
          {/* TODO: Replace with rich cosmetic dentistry overview copy. */}
          <p className="smh-text-dim text-sm">
            Discover veneers, bonding, whitening and more—full editorial copy is coming shortly.
          </p>
        </section>
      </div>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
