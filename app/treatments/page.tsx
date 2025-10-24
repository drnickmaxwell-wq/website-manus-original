import TreatmentLayout from "@/components/treatments/TreatmentLayout";

export const metadata = { title: "Treatments" };

export default function Page() {
  return (
    <TreatmentLayout
      title="Treatments"
      subtitle="Explore every service available at St Mary’s House."
    >
      {/* TODO: Replace with curated treatment overview content and navigation. */}
      <section className="my-10 rounded-2xl border border-white/10 p-6 text-sm smh-text-dim">
        <p>Detailed treatment descriptions, pricing guidance and navigation will live here.</p>
      </section>
      <div id="viewer" className="sr-only" aria-hidden />
    </TreatmentLayout>
  );
}
