import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Emergency Dentistry' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Emergency Dentistry"
      subtitle="Immediate care to relieve pain and stabilise your smile."
    >
      <p className="smh-text-dim">Rapid diagnostics, gentle relief and priority follow-up when you need us most.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
