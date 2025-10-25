/* BEGIN GENERATED */
import TreatmentLayout from "@/components/treatments/TreatmentLayout";
import ViewerShell from "@/components/treatments/ViewerShell";
import FinanceBanner from "@/components/treatments/FinanceBanner";
import FaqAccordion from "@/components/treatments/FaqAccordion";
import { normalizeFaqs } from "@/components/utils/faq-normalize";
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from "@/lib/seo/schema";

export const metadata = {
  title: "Composite Bonding | St Mary’s House Dental Care",
  description: "Premium Composite Bonding in Shoreham-by-Sea sculpting tooth-coloured resin to refine chips, gaps and contours with artistic detail."
};

const faqs = [
  { question: "Does it hurt?", answer: "Most patients report minimal discomfort. We use gentle, modern techniques." },
  { question: "How long does it take?", answer: "Typical appointments take around 45–90 minutes; we’ll tailor to your case." },
  { question: "Is finance available?", answer: "Yes—0% and flexible plans are available, subject to status." },
  { question: "Is it right for me?", answer: "We’ll assess your goals and health to advise the safest, most aesthetic plan." },
  { question: "Aftercare?", answer: "We provide a personalised plan to keep your results looking their best." }
];

export default function Page(){
  const url = typeof window === "undefined" ? "" : window.location.href;
  const faqsNorm = normalizeFaqs(faqs);

  return (
    <TreatmentLayout
      eyebrow="St Mary’s House Dental"
      title="Composite Bonding"
      subtitle="Advanced care with precision, comfort and a natural aesthetic.">
      {/* JSON-LD */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: treatmentSchemaJSONLD({
          name: "Composite Bonding",
          description: "Premium Composite Bonding in Shoreham-by-Sea sculpting tooth-coloured resin to refine chips, gaps and contours with artistic detail.",
          url: url
        })}} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJSONLD(faqsNorm.map(f => ({ q: f.question, a: f.answer }))) }} />

      {/* Intro copy */}
      <section className="prose prose-invert max-w-3xl my-10 smh-text">
        <p>Composite bonding allows us to smooth chips, close small gaps and refresh tooth edges using sculpted layers of high-gloss resin.</p>
        <p className="smh-text-dim mt-3">We plan the enhancements digitally, use refined shades and polish each surface meticulously so the additions blend seamlessly with your smile.</p>
      </section>

      {/* 3D viewer slot */}
      <ViewerShell title="Explore in 3D">
        {/* Mount your R3F canvas here later */}
      </ViewerShell>

      {/* Finance */}
      <FinanceBanner />

      {/* FAQ */}
      <FaqAccordion items={faqsNorm} />
    </TreatmentLayout>
  );
}
/* END GENERATED */
