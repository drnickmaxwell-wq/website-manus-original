import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Crowns and Bridges' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Crowns and Bridges"
      subtitle="Digital design and handcrafted finishes for lasting restorations."
    >
      <p className="smh-text-dim">We blend strength and artistry to restore function and aesthetics together.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
