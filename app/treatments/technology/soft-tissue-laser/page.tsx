import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Soft Tissue Laser' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Soft Tissue Laser"
      subtitle="Gentle laser therapy for precise, comfortable soft-tissue care."
    >
      <p className="smh-text-dim">Laser energy shapes gums, reduces bacteria and speeds recovery with minimal trauma.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
