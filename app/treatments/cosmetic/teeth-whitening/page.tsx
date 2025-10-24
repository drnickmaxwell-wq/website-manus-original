import TreatmentLayout from '@/components/treatments/TreatmentLayout';
import ViewerShell from '@/components/treatments/ViewerShell';

export const metadata = { title: 'Teeth Whitening' };

export default function Page(){
  return (
    <TreatmentLayout
      title="Teeth Whitening"
      subtitle="Gentle brightening tailored to your enamel and shade goals."
    >
      <p className="smh-text-dim">Clinically-approved gels, shade tracking, and sensitivity care.</p>
      <ViewerShell />
    </TreatmentLayout>
  );
}
