import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Fixed Braces' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Fixed Braces"
      subtitle="Precise tooth movement with discreet, custom-fitted appliances."
    >
      <p className="smh-text-dim">Contemporary brackets and wires guide confident, well-aligned smiles.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
