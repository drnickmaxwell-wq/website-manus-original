import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Spark Aligners' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Spark Aligners"
      subtitle="Clear aligner therapy engineered for comfort and speed."
    >
      <p className="smh-text-dim">We map tooth movement digitally to deliver virtually invisible corrections.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
