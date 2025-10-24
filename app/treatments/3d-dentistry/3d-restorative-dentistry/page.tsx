import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Restorative Dentistry' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Restorative Dentistry"
      subtitle="Digital workflows for precise, minimally invasive restorations."
    >
      <p className="smh-text-dim">We capture, plan, and deliver treatment with accuracy from start to finish.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
