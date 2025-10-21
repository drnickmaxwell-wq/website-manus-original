import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';
import FinanceBanner from '@/components/treatments/FinanceBanner';
import FaqAccordion, { FaqItem } from '@/components/treatments/FaqAccordion';
import { treatmentSchemaJSONLD, faqSchemaJSONLD } from '@/lib/seo/schema';

export const metadata = { title: 'Veneers — St Mary’s House Dental' };

export default function Page() {
  const faqs: FaqItem[] = [
    { q: 'Are veneers painful?', a: 'Treatment is typically comfortable with local anaesthetic when needed.' },
    { q: 'How long do veneers last?', a: '10–15 years on average with excellent oral hygiene and reviews.' },
    { q: 'Can I whiten veneers?', a: 'Porcelain does not whiten; we whiten natural teeth first, then match.' },
    { q: 'What do they cost?', a: 'Pricing depends on case complexity; finance options available.' },
  ];

  const description =
    'Hand-finished ceramic veneers designed with 3D planning for a natural, luminous smile. Minimal preparation, maximum elegance.';

  const url = 'https://smhdental.co.uk/treatments/veneers';

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: treatmentSchemaJSONLD({ name: 'Veneers', description, url }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJSONLD(faqs) }}
      />

      <TreatmentLayout
        title="Veneers"
        subtitle="Hand-crafted ceramic veneers planned in 3D for balance, symmetry and light."
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 my-10">
          <article className="rounded-2xl smh-glass p-6 md:p-8">
            <h2 className="smh-heading text-xl md:text-2xl">What are veneers?</h2>
            <p className="smh-text-dim mt-3">
              Veneers are thin ceramic facings that refine colour, shape and alignment.
              We design every case digitally, preserving as much natural tooth as possible.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>3D smile design with preview</li>
              <li>Minimal preparation approach</li>
              <li>Premium ceramics with lifelike translucency</li>
            </ul>
          </article>

          <article className="rounded-2xl smh-glass p-6 md:p-8">
            <h2 className="smh-heading text-xl md:text-2xl">Aftercare & longevity</h2>
            <p className="smh-text-dim mt-3">
              With proper care and regular reviews, veneers typically last 10–15 years.
              We’ll provide a custom aftercare plan and nightguard where appropriate.
            </p>
          </article>
        </div>

        <ViewerShell title="3D Smile Simulation">
          {/* When ready, mount the real 3D viewer here */}
        </ViewerShell>

        <FinanceBanner />

        <FaqAccordion items={faqs} />

        <section className="my-12 text-center">
          <a href="/contact" className="smh-btn">Start Your Smile Plan</a>
        </section>
      </TreatmentLayout>
    </>
  );
}
