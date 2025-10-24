/* BEGIN GENERATED */
import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import ViewerShell from "@/components/treatments/ViewerShell";
import FinanceBanner from "@/components/treatments/FinanceBanner";
import FaqAccordion, { FaqItem } from "@/components/treatments/FaqAccordion";
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from "@/lib/seo/schema";

export const metadata = {
  title: "3D Implants Overview | St Mary’s House Dental Care",
  description: "Premium 3D implant planning in Shoreham-by-Sea, highlighting guided placement and restorations for confident, lasting smiles."
};

const FAQ: FaqItem[] = [
  { question: "Does it hurt?", answer: "Most patients report minimal discomfort. We use gentle, modern techniques." },
  { question: "How long does it take?", answer: "Typical appointments take a few visits; we’ll tailor to your case." },
  { question: "Is finance available?", answer: "Yes—0% and flexible plans are available, subject to status." },
  { question: "Is it right for me?", answer: "We’ll assess your goals and health to advise the safest, most aesthetic plan." },
  { question: "Aftercare?", answer: "We provide a personalised plan to keep your results looking their best." }
];

export default function Page(){
  const url = typeof window === "undefined" ? "" : window.location.href;

  return (
    <TreatmentLayout
      eyebrow="St Mary’s House Dental"
      title="3D Implants Overview"
      subtitle="Advanced care with precision, comfort and a natural aesthetic.">
      {/* JSON-LD */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: treatmentSchemaJSONLD({
          name: "3D Implants Overview",
          description: "Premium 3D implant planning in Shoreham-by-Sea, highlighting guided placement and restorations for confident, lasting smiles.",
          url: url
        })}} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJSONLD(FAQ.map(f => ({ q: f.question, a: f.answer }))) }} />

      {/* Intro copy */}
      <section className="prose prose-invert max-w-3xl my-10 smh-text">
        <p>Our 3D implants overview brings together digital scanning, surgical guides and custom restorations so you can visualise every stage of treatment with confidence.</p>
        <p className="smh-text-dim mt-3">We plan with detailed imaging, simulate placement and produce restorations using advanced materials for predictable function and beautifully natural results.</p>
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
