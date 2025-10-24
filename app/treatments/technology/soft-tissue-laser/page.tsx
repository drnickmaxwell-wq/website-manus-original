import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Soft Tissue Laser' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Soft Tissue Laser"
      subtitle="Precise, low-discomfort sculpting for healthier gums."
    >
      <p className="smh-text-dim">Laser therapy reshapes tissues gently while promoting fast healing.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
