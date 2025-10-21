export interface TreatmentSchemaInput {
  name: string;
  description: string;
  url: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

export const treatmentSchemaJSONLD = ({
  name,
  description,
  url,
}: TreatmentSchemaInput) =>
  JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name,
      description,
      url,
      provider: {
        '@type': 'Dentist',
        name: "St Mary's House Dental",
        url: 'https://www.stmaryshousedental.co.uk/',
      },
    },
    null,
    2,
  );

export const faqSchemaJSONLD = (items: FaqSchemaItem[]) =>
  JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    null,
    2,
  );
