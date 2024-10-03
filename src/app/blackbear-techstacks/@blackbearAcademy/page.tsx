import { AcademyContent } from '@/components/blackbear-techstacks/academy-content';
import { AcademyFeatures } from '@/components/blackbear-techstacks/academy-fetures';
import { Section } from '@/components/default-elements';

export default function BlackBearAcademy() {
  return (
    <div className=" bg-gradient-to-l from-stone-900 from-15% via-amber-600 via-100% to-orange-500 to-40%  flex justify-center w-full">
      <Section>
        <div className="flex-col m-full  ">
          <div className="px-4 lg:px-20 ">
            <AcademyContent />
          </div>
          <AcademyFeatures />
        </div>
      </Section>
    </div>
  );
}
