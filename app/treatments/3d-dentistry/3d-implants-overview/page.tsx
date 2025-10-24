import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Implants Overview' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Implants Overview"
      subtitle="See how digital planning elevates every stage of implant care."
    >
      <p className="smh-text-dim">From scans to final smile, technology keeps treatment predictable and personal.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
