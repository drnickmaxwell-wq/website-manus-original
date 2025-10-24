import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "Dental Implants" };

export default function Page() {
  return (
    <TreatmentLayout
      title="Dental Implants"
      subtitle="3D-planned implant dentistry for single teeth to full-arch transformations."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-10">
        <div className="rounded-2xl border border-white/10 p-4">
          <GroupSubnav group="implants" />
        </div>
        <section className="rounded-2xl smh-glass p-6">
          {/* TODO: Replace with implant overview, success metrics and patient journey copy. */}
          <p className="smh-text-dim text-sm">
            Coming soon: detailed guidance on consultations, same-day options and long-term maintenance.
          </p>
        </section>
      </div>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
