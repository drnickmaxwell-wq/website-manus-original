import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'All-on-4/6 Same Day' };

export default function Page(){
  return (
    <TreatmentLayout
      title="All-on-4/6 Same Day"
      subtitle="A fixed smile in a day with careful digital planning."
    >
      <p className="smh-text-dim">Staged workflow for immediate function and natural aesthetics.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
