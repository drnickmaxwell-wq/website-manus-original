import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: 'Sedation — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'Is dental sedation safe?',
    answer:
      'Sedation is carefully planned around your medical history and monitored throughout to keep you relaxed and safe.',
  },
  {
    question: 'Will I be awake during sedation?',
    answer:
      'You remain conscious but deeply relaxed, and most patients remember little of the appointment.',
  },
  {
    question: 'How long does recovery take?',
    answer:
      'You will rest in the clinic until you feel steady and should arrange an escort home while the sedative wears off.',
  },
  {
    question: 'Can I eat before my sedation visit?',
    answer:
      'We will provide clear instructions, usually advising light food only and no alcohol before your appointment.',
  },
  {
    question: 'Is sedation dentistry expensive?',
    answer:
      'We offer transparent pricing and finance options to make longer or more complex appointments comfortable and manageable.',
  },
];

const description =
  'Sedation dentistry creates a calmer experience for nervous patients, combining tailored medication with attentive monitoring.';
const url = 'https://www.stmaryshousedental.co.uk/treatments/general/sedation';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: 'Sedation',
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
        title="Sedation"
        subtitle="A calmer experience for anxious patients."
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
