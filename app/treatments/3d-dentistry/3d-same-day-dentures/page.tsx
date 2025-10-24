import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: '3D Same-Day Dentures' };

export default function Page(){
  return (
    <TreatmentLayout
      title="3D Same-Day Dentures"
      subtitle="Digital fit design in the morning, a confident smile by evening."
    >
      <p className="smh-text-dim">We map your bite, design the fit virtually, and produce on-site.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
