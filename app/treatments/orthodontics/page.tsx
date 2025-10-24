import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import GroupSubnav from "@/components/treatments/GroupSubnav";

export const metadata = { title: "Orthodontics" };

export default function Page() {
  return (
    <TreatmentLayout
      title="Orthodontics"
      subtitle="Aligners and braces tailored to discreetly perfect every smile."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-10">
        <div className="rounded-2xl border border-white/10 p-4">
          <GroupSubnav group="orthodontics" />
        </div>
        <section className="rounded-2xl smh-glass p-6">
          {/* TODO: Replace with orthodontic overview copy and treatment pathways. */}
          <p className="smh-text-dim text-sm">
            Insight on Spark aligners, fixed appliances and retention protocols will follow soon.
          </p>
        </section>
      </div>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
