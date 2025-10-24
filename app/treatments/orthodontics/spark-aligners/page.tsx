import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Spark Aligners' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Spark Aligners"
      subtitle="Nearly invisible aligners custom-made for clarity and comfort."
    >
      <p className="smh-text-dim">Track progress digitally and swap trays with guidance at each review.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
