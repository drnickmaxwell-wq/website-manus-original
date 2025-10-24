import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "3D Dentistry" };

export default function Page() {
  return (
    <TreatmentLayout
      title="3D Dentistry"
      subtitle="Digitally-planned care, precision printing and seamless same-day restorations."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-10">
        <div className="rounded-2xl border border-white/10 p-4">
          <GroupSubnav group="3d-dentistry" />
        </div>
        <section className="rounded-2xl smh-glass p-6">
          {/* TODO: Replace with 3D dentistry overview copy and highlights. */}
          <p className="smh-text-dim text-sm">
            We’re preparing in-depth details on digital planning, scanning and chairside fabrication.
          </p>
        </section>
      </div>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
