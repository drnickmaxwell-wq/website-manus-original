import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Root Canal Treatment' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Root Canal Treatment"
      subtitle="Precision endodontics to relieve pain and protect your tooth."
    >
      <p className="smh-text-dim">Microscope-assisted workflows cleanse, shape and seal comfortably.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
