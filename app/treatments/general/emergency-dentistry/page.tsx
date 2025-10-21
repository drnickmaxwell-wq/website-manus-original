import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: 'Emergency Dentistry — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'What counts as a dental emergency?',
    answer:
      'Severe toothache, swelling, dental trauma, or a broken tooth that causes pain are all reasons to call us immediately.',
  },
  {
    question: 'How much does an emergency appointment cost?',
    answer:
      'We will explain fees when you call so there are no surprises, and any urgent treatment is agreed with you first.',
  },
  {
    question: 'Do you offer out-of-hours support?',
    answer:
      'Yes, we run an on-call service for registered patients and can advise new patients on the best next steps.',
  },
  {
    question: 'What should I do while waiting for my appointment?',
    answer:
      'Keep the area clean with gentle rinses, take suitable pain relief, and avoid chewing on the affected side.',
  },
  {
    question: 'Can you see new patients for emergencies?',
    answer:
      'We do our best to see new patients quickly and can register you for ongoing care once the emergency is resolved.',
  },
];

const description =
  'Our emergency dentistry team provides same-day care for toothache, swelling, or trauma, easing pain and protecting your smile.';
const url = 'https://www.stmaryshousedental.co.uk/treatments/general/emergency-dentistry';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: 'Emergency Dentistry',
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
        title="Emergency Dentistry"
        subtitle="Same-day relief for pain, swelling, or broken teeth."
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
