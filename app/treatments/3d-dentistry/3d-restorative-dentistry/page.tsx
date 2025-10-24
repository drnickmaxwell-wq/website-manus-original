/* BEGIN GENERATED */
import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import ViewerShell from "@/components/treatments/ViewerShell";
import FinanceBanner from "@/components/treatments/FinanceBanner";
import FaqAccordion, { FaqItem } from "@/components/treatments/FaqAccordion";
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from "@/lib/seo/schema";

export const metadata = {
  title: "3D Restorative Dentistry | St Mary’s House Dental Care",
  description: "Premium 3D Restorative Dentistry in Shoreham-by-Sea using digital planning and bespoke ceramics for durable, natural-looking repairs."
};

const FAQ: FaqItem[] = [
  { question: "Does it hurt?", answer: "Most patients report minimal discomfort. We use gentle, modern techniques." },
  { question: "How long does it take?", answer: "Typical appointments take around 45–90 minutes; we’ll tailor to your case." },
  { question: "Is finance available?", answer: "Yes—0% and flexible plans are available, subject to status." },
  { question: "Is it right for me?", answer: "We’ll assess your goals and health to advise the safest, most aesthetic plan." },
  { question: "Aftercare?", answer: "We provide a personalised plan to keep your results looking their best." }
];

export default function Page(){
  const url = typeof window === "undefined" ? "" : window.location.href;

  return (
    <TreatmentLayout
      eyebrow="St Mary’s House Dental"
      title="3D Restorative Dentistry"
      subtitle="Advanced care with precision, comfort and a natural aesthetic.">
      {/* JSON-LD */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: treatmentSchemaJSONLD({
          name: "3D Restorative Dentistry",
          description: "Premium 3D Restorative Dentistry in Shoreham-by-Sea using digital planning and bespoke ceramics for durable, natural-looking repairs.",
          url: url
        })}} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJSONLD(FAQ.map(f => ({ q: f.question, a: f.answer }))) }} />

      {/* Intro copy */}
      <section className="prose prose-invert max-w-3xl my-10 smh-text">
        <p>3D restorative dentistry lets us design crowns, inlays and bridges that match your natural teeth with remarkable accuracy while restoring strength and comfort.</p>
        <p className="smh-text-dim mt-3">Detailed scans inform digital design, premium ceramics are milled to fit precisely, and we refine the finish chairside for seamless, long-lasting results.</p>
      </section>

      {/* 3D viewer slot */}
      <ViewerShell title="Explore in 3D">
        {/* Mount your R3F canvas here later */}
      </ViewerShell>

      {/* Finance */}
      <FinanceBanner />

      {/* FAQ */}
      <FaqAccordion items={FAQ} />
    </TreatmentLayout>
  );
}
/* END GENERATED */
