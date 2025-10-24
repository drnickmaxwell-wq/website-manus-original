import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Porcelain Veneers' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Porcelain Veneers"
      subtitle="Refined contours and lifelike translucency for a natural look."
    >
      <p className="smh-text-dim">Digital previews guide shape, shade and finish before we begin.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
