import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: '3D Surgically-Guided Implants — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'What is the healing time for guided implants?',
    answer:
      'The guided approach helps us place implants precisely, often reducing swelling and allowing most patients to return to normal activities within a few days.',
  },
  {
    question: 'Will guided implant surgery hurt?',
    answer:
      'Treatment is completed under local anaesthetic with sedation available, and discomfort is typically mild compared with traditional surgery.',
  },
  {
    question: 'What are the success rates?',
    answer:
      'Digital planning and surgical guides improve accuracy, supporting high success rates when combined with good oral hygiene.',
  },
  {
    question: 'Can I have implants if I smoke?',
    answer:
      'Smoking can affect healing; we recommend reducing or quitting before treatment so your implants integrate predictably.',
  },
  {
    question: 'Will I have temporary teeth during healing?',
    answer:
      'In many cases we can fit a temporary restoration on the same day so you leave with a confident smile while the implant heals.',
  },
];

const description =
  '3D surgically-guided implants use digital scans and printed guides for precise placement, faster healing, and predictable outcomes.';
const url =
  'https://www.stmaryshousedental.co.uk/treatments/implants/3d-surgically-guided-implants';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: '3D Surgically-Guided Implants',
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
        title="3D Surgically-Guided Implants"
        subtitle="Accuracy and comfort with fully guided implant placement."
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
