import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Surgically-Guided Implants' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Surgically-Guided Implants"
      subtitle="Computer-guided planning for accurate placement and comfort."
    >
      <p className="smh-text-dim">Guided surgery reduces chair time and improves outcomes.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
