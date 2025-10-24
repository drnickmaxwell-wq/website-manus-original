import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Root Canal Treatment' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Root Canal Treatment"
      subtitle="Microscopic precision to save teeth comfortably and predictably."
    >
      <p className="smh-text-dim">Digital imaging guides every step so we can protect your natural tooth.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
