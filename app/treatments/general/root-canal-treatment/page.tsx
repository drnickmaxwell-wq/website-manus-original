/* BEGIN GENERATED */
import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import ViewerShell from "@/components/treatments/ViewerShell";
import FinanceBanner from "@/components/treatments/FinanceBanner";
import FaqAccordion, { FaqItem } from "@/components/treatments/FaqAccordion";
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from "@/lib/seo/schema";

export const metadata = {
  title: "Root Canal Treatment | St Mary’s House Dental Care",
  description: "Premium Root Canal Treatment in Shoreham-by-Sea relieving pain with microscopic precision and calming aftercare."
};

const FAQ: FaqItem[] = [
  { question: "Does it hurt?", answer: "Most patients report minimal discomfort. We use gentle, modern techniques." },
  { question: "How long does it take?", answer: "Typical appointments take around 60–90 minutes; we’ll tailor to your case." },
  { question: "Is finance available?", answer: "Yes—0% and flexible plans are available, subject to status." },
  { question: "Is it right for me?", answer: "We’ll assess your goals and health to advise the safest, most aesthetic plan." },
  { question: "Aftercare?", answer: "We provide a personalised plan to keep your results looking their best." }
];

export default function Page(){
  const url = typeof window === "undefined" ? "" : window.location.href;

  return (
    <TreatmentLayout
      eyebrow="St Mary’s House Dental"
      title="Root Canal Treatment"
      subtitle="Advanced care with precision, comfort and a natural aesthetic.">
      {/* JSON-LD */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: treatmentSchemaJSONLD({
          name: "Root Canal Treatment",
          description: "Premium Root Canal Treatment in Shoreham-by-Sea relieving pain with microscopic precision and calming aftercare.",
          url: url
        })}} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJSONLD(FAQ.map(f => ({ q: f.question, a: f.answer }))) }} />

      {/* Intro copy */}
      <section className="prose prose-invert max-w-3xl my-10 smh-text">
        <p>Root canal treatment clears infection from inside the tooth while protecting your natural structure from further damage.</p>
        <p className="smh-text-dim mt-3">We work with enhanced magnification, gentle techniques and high-quality fillings or crowns to restore comfort and keep your tooth functional for years.</p>
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
