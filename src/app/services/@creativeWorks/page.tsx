import { BiSolidCircle } from 'react-icons/bi';
import { H2, Subheading } from '@/components/ui/typography';
import { WorksParallax } from '@/components/works-parallax';

export default function CreativeWorks() {
  return (
    <div className="flex justify-center w-full py-16 bg-background/25">
      <div className="w-full">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="text-lg text-yellow-500">
                <BiSolidCircle />
              </div>
              <Subheading className="text-center lg:text-left">
                Completed Projects
              </Subheading>
            </div>

            <H2 className="text-center lg:text-left">Our Creative Works</H2>
          </div>

          <WorksParallax />
        </div>
      </div>
    </div>
  );
}
