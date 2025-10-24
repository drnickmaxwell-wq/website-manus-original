import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Restorative Dentistry' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Restorative Dentistry"
      subtitle="Comprehensive digital workflows for restorative excellence."
    >
      <p className="smh-text-dim">Scanning, planning and fabrication unite for highly tailored smile transformations.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
