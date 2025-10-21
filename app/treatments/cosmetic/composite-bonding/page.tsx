import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: 'Composite Bonding — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'Does composite bonding hurt?',
    answer:
      'Composite bonding is generally painless because it works on the outer enamel layers, though you may feel slight sensitivity for a day or two.',
  },
  {
    question: 'How long will composite bonding last?',
    answer:
      'With good brushing habits and regular check-ups, composite bonding can last five years or more before needing a refresh.',
  },
  {
    question: 'Will the bonded areas stain?',
    answer:
      'The resin is stain-resistant, but it helps to limit tea, coffee, and tobacco while keeping up with hygiene visits to maintain brightness.',
  },
  {
    question: 'Can composite bonding be done in one visit?',
    answer:
      'Most cases are completed in a single appointment, making it ideal for quick edge repairs or refinements before a special event.',
  },
  {
    question: 'Is finance available for composite bonding?',
    answer:
      'Yes, we can talk through interest-free and low-interest finance options to spread the cost of treatment.',
  },
];

const description =
  'Composite bonding reshapes chips and edges in a single visit with an enamel-like finish for natural-looking results.';
const url = 'https://www.stmaryshousedental.co.uk/treatments/cosmetic/composite-bonding';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: 'Composite Bonding',
            description,
            url,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: faqSchemaJSONLD(faqs),
        }}
      />
      <TreatmentLayout
        title="Composite Bonding"
        subtitle="Same-day edge refinement with enamel-like finish."
      >
        {/* Two intro cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 my-10">
          <article className="rounded-2xl smh-glass p-6 md:p-8">
            <h2 className="smh-heading text-xl md:text-2xl">What is it?</h2>
            <p className="smh-text-dim mt-3">Replace with real copy later…</p>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Key benefit 1</li>
              <li>Key benefit 2</li>
              <li>Key benefit 3</li>
            </ul>
          </article>
          <article className="rounded-2xl smh-glass p-6 md:p-8">
            <h2 className="smh-heading text-xl md:text-2xl">How it works</h2>
            <p className="smh-text-dim mt-3">Replace with real copy later…</p>
          </article>
        </div>

        {/* Viewer placeholder (we’ll mount the real R3F viewer later) */}
        <ViewerShell title="Interactive 3D Viewer">
          {/* mount real component later */}
        </ViewerShell>

        <FinanceBanner />

        <FaqAccordion items={faqs} />

        <section className="my-12 text-center">
          <a href="/contact" className="smh-btn">
            Book your consultation
          </a>
        </section>
      </TreatmentLayout>
    </>
  );
}
