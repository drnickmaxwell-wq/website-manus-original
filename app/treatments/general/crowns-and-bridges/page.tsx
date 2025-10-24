/* BEGIN GENERATED */
import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import ViewerShell from "@/components/treatments/ViewerShell";
import FinanceBanner from "@/components/treatments/FinanceBanner";
import FaqAccordion, { FaqItem } from "@/components/treatments/FaqAccordion";
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from "@/lib/seo/schema";

export const metadata = {
  title: "Crowns & Bridges | St Mary’s House Dental Care",
  description: "Premium Crowns & Bridges in Shoreham-by-Sea using advanced ceramics and digital design to restore strength and harmony."
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
      title="Crowns & Bridges"
      subtitle="Advanced care with precision, comfort and a natural aesthetic.">
      {/* JSON-LD */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: treatmentSchemaJSONLD({
          name: "Crowns & Bridges",
          description: "Premium Crowns & Bridges in Shoreham-by-Sea using advanced ceramics and digital design to restore strength and harmony.",
          url: url
        })}} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJSONLD(FAQ.map(f => ({ q: f.question, a: f.answer }))) }} />

      {/* Intro copy */}
      <section className="prose prose-invert max-w-3xl my-10 smh-text">
        <p>Crowns and bridges rebuild damaged or missing teeth with lifelike ceramic restorations that integrate seamlessly with your smile.</p>
        <p className="smh-text-dim mt-3">We use 3D scans to design each piece, partner with master technicians and fine-tune fit chairside for comfort, durability and natural translucency.</p>
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
