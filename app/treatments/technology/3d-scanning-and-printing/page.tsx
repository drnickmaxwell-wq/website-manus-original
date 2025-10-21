import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = {
  title: '3D Scanning & Printing — St Mary\'s House Dental',
};

const faqs: FaqItem[] = [
  {
    question: 'How accurate is digital scanning compared with impressions?',
    answer:
      'Intraoral scanners capture fine detail without trays or putty, improving fit for aligners, crowns, and retainers.',
  },
  {
    question: 'What is the turnaround time for 3D printed appliances?',
    answer:
      'Many splints and models are produced in-house within days, shortening treatment timelines.',
  },
  {
    question: 'What materials do you print with?',
    answer:
      'We use dental-grade resins approved for intraoral use, selected to match each appliance or mock-up.',
  },
  {
    question: 'Are there limitations to 3D printing in dentistry?',
    answer:
      'Some complex metal components are still manufactured externally, but printing covers most diagnostic and appliance needs.',
  },
  {
    question: 'Can I see my treatment plan digitally?',
    answer:
      'Yes, we share on-screen simulations so you can preview outcomes and understand each stage of your treatment.',
  },
];

const description =
  '3D scanning and printing streamline dentistry with fast, precise digital models and in-house fabrication for custom appliances.';
const url = 'https://www.stmaryshousedental.co.uk/treatments/technology/3d-scanning-and-printing';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: treatmentSchemaJSONLD({
            name: '3D Scanning & Printing',
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
        title="3D Scanning & Printing"
        subtitle="Fast, precise digital dentistry with in-house fabrication."
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
