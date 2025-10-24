import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Printed Veneers' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Printed Veneers"
      subtitle="Advanced care with precision, comfort and a natural aesthetic."
    >
      <p className="smh-text-dim">We preview every contour digitally and mill or print with precision.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
