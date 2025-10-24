import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Printed Restorations' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Printed Restorations"
      subtitle="Digitally fabricated implant crowns for seamless integration."
    >
      <p className="smh-text-dim">In-house milling and printing provide precise fits and refined finishes.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
