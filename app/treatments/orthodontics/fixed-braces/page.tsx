import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Fixed Braces' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Fixed Braces"
      subtitle="Precise control for reliable alignment and bite correction."
    >
      <p className="smh-text-dim">We plan tooth movement digitally for efficient adjustments at every visit.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
