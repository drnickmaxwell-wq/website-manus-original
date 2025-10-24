import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Scanning and Printing' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Scanning and Printing"
      subtitle="High-resolution scans and on-site printing for rapid prototypes."
    >
      <p className="smh-text-dim">Digital models let us plan precisely and deliver tailored appliances quickly.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
