import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: 'Teeth Whitening — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'Will my teeth feel sensitive after whitening?',
    answer:
      'Some patients notice temporary sensitivity for a day or two, and we tailor gels and desensitising products to keep you comfortable.',
  },
  {
    question: 'Do you offer both in-clinic and at-home whitening?',
    answer:
      'Yes, we provide chairside whitening for faster results along with custom-fitted trays for top-ups at home.',
  },
  {
    question: 'How soon will I see a difference?',
    answer:
      'Most people see a noticeable lift after a single appointment, with full results achieved over the first week.',
  },
  {
    question: 'How do I keep my smile bright after treatment?',
    answer:
      'We recommend avoiding strong staining foods for 48 hours and using your home kit for occasional boosts.',
  },
  {
    question: 'Is professional whitening safe for my enamel?',
    answer:
      'Our whitening systems are clinically regulated and overseen by a dentist to protect enamel and gums throughout treatment.',
  },
];

const description =
  'Professional teeth whitening brightens your smile gently with dentist-managed gels and custom trays for lasting radiance.';
const url = 'https://www.stmaryshousedental.co.uk/treatments/cosmetic/teeth-whitening';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: 'Teeth Whitening',
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
        title="Teeth Whitening"
        subtitle="Gentle, clinically controlled whitening for a brighter smile."
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
