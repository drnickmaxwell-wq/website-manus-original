import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Implants Overview' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Implants Overview"
      subtitle="An introduction to our fully digital implant experience."
    >
      <p className="smh-text-dim">We plan, guide and restore implants with precision-led technology at every step.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
