export function treatmentSchemaJSONLD(opts: {
  name: string;
  description: string;
  url: string;
  sameAs?: string[];
}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    sameAs: opts.sameAs ?? []
  };
  return JSON.stringify(json);
}

export function faqSchemaJSONLD(items: { q: string; a: string }[]) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a }
    }))
  };
  return JSON.stringify(json);
}
