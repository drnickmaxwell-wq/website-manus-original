import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Emergency Dentistry' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Emergency Dentistry"
      subtitle="Rapid relief with same-day diagnostics and care."
    >
      <p className="smh-text-dim">Urgent assessments, digital imaging, and calming support when you need it most.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
