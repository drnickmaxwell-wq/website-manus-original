import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Scanning and Printing' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Scanning and Printing"
      subtitle="From scan to smile—see how our digital lab streamlines care."
    >
      <p className="smh-text-dim">High-resolution imaging and additive manufacturing create precise treatment models.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
