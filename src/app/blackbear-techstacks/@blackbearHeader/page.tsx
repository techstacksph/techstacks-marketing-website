import { BlackBearHeader as Header } from '@/components/blackbear-techstacks/blackbear-header';
import { Section } from '@/components/default-elements';

export default function BlackBearHeader() {
  return (
    <div className="bg-gradient-to-bl from-stone-800 from-40% via-amber-600 via-100% to-orange-500 to-40% flex justify-center p-3 md:p-5  w-full ">
      <Section>
        <div className="flex-col w-full max-w-screen-xl">
          <Header />
        </div>
      </Section>
    </div>
  );
}
