import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Same-Day Implants' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Same-Day Implants"
      subtitle="Immediate smiles supported by meticulous digital planning."
    >
      <p className="smh-text-dim">We combine guided surgery and provisional restorations in a single visit.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
