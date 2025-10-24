import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'The Wand Painless Numbing' };

export default function Page(){
  return (
    <TreatmentLayout
      title="The Wand Painless Numbing"
      subtitle="Computer-assisted anaesthesia for a gentler numbing experience."
    >
      <p className="smh-text-dim">Controlled delivery calms sensitivity and keeps treatment comfortable.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
