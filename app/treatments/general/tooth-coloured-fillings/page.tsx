import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Tooth-Coloured Fillings' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Tooth-Coloured Fillings"
      subtitle="Natural-looking repairs blended seamlessly with your enamel."
    >
      <p className="smh-text-dim">Durable composites restore structure while preserving healthy tooth tissue.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
