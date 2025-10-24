import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'The Wand Painless Numbing' };

export default function Page(){
  return (
    <TreatmentLayout
      title="The Wand Painless Numbing"
      subtitle="Computer-controlled anaesthesia for a calmer experience."
    >
      <p className="smh-text-dim">Gentle delivery keeps you comfortable before, during, and after treatment.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
