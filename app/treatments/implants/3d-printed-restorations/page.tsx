import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Printed Restorations' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Printed Restorations"
      subtitle="Digitally crafted implant restorations with a seamless fit."
    >
      <p className="smh-text-dim">In-house printing speeds delivery while keeping aesthetics in our control.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
