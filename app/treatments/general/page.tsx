import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "General Dentistry" };

export default function Page() {
  return (
    <TreatmentLayout
      title="General Dentistry"
      subtitle="Preventive care, restorative treatments and everyday comfort."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-10">
        <div className="rounded-2xl border border-white/10 p-4">
          <GroupSubnav group="general" />
        </div>
        <section className="rounded-2xl smh-glass p-6">
          {/* TODO: Replace with welcoming general dentistry overview copy. */}
          <p className="smh-text-dim text-sm">
            Guidance on check-ups, hygiene, fillings and long-term oral health will appear here soon.
          </p>
        </section>
      </div>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
