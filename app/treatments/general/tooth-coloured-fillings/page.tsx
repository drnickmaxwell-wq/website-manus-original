import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Tooth-Coloured Fillings' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Tooth-Coloured Fillings"
      subtitle="Seamless repairs matched to your natural shade and shape."
    >
      <p className="smh-text-dim">We sculpt composite restorations that blend invisibly with your smile.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
