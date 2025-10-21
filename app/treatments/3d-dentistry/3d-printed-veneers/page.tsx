import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: '3D Printed Veneers — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'Do 3D printed veneers require tooth preparation?',
    answer:
      'Digital planning lets us keep preparation minimal, reserving reshaping only for areas needed to fit the veneer precisely.',
  },
  {
    question: 'Can I see a mock-up before committing?',
    answer:
      'Yes, we share digital previews and 3D printed prototypes so you can review shape, shade, and smile line before final fitting.',
  },
  {
    question: 'How long do 3D printed veneers last?',
    answer:
      'With good care they can last many years, and the digital files make future repairs or replacements straightforward.',
  },
  {
    question: 'What does aftercare involve?',
    answer:
      'Brush and floss as normal, avoid biting hard objects, and attend review appointments so we can check the margins remain perfect.',
  },
  {
    question: 'Are there patient reviews I can read?',
    answer:
      'We are collecting testimonials now and will happily share examples from patients who have completed their veneer smile plans.',
  },
];

const description =
  '3D printed veneers are digitally designed for precise fit, allowing accurate mock-ups and efficient final placement.';
const url = 'https://www.stmaryshousedental.co.uk/treatments/3d-dentistry/3d-printed-veneers';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: '3D Printed Veneers',
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
        title="3D Printed Veneers"
        subtitle="Digitally planned veneers for precision shape and shade."
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
