import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Sedation Dentistry' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Sedation Dentistry"
      subtitle="Relaxed dentistry with carefully monitored calming techniques."
    >
      <p className="smh-text-dim">We personalise sedation levels so anxious patients feel at ease throughout care.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
