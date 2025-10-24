import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Crowns and Bridges' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Crowns and Bridges"
      subtitle="Digitally crafted restorations that blend strength with beauty."
    >
      <p className="smh-text-dim">High-definition scans guide resilient ceramics for seamless results.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
