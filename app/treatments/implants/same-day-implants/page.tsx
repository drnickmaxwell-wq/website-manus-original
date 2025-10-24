import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Same-Day Implants' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Same-Day Implants"
      subtitle="Streamlined placement with digital planning and onsite lab support."
    >
      <p className="smh-text-dim">Immediate loading protocols deliver a functional smile without delay.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
