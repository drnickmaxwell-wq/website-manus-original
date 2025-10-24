import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "Technology" };

export default function Page() {
  return (
    <TreatmentLayout
      title="Technology"
      subtitle="Comfort-first innovation from digital scanning to gentle lasers."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-10">
        <div className="rounded-2xl border border-white/10 p-4">
          <GroupSubnav group="technology" />
        </div>
        <section className="rounded-2xl smh-glass p-6">
          {/* TODO: Replace with technology showcase copy and equipment highlights. */}
          <p className="smh-text-dim text-sm">
            Details on scanners, lasers and comfort tech will be showcased here shortly.
          </p>
        </section>
      </div>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
