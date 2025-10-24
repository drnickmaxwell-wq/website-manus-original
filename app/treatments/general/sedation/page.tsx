import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Sedation Dentistry' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Sedation Dentistry"
      subtitle="Relaxed appointments with carefully monitored sedation options."
    >
      <p className="smh-text-dim">Tailored techniques keep you calm while we focus on gentle, precise care.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
