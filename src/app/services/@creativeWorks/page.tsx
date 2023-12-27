import { BiSolidCircle } from 'react-icons/bi';
import { H2, Subheading } from '@/components/ui/typography';
import { WorksParallax } from '@/components/works-parallax';

export default function CreativeWorks() {
  return (
    <div className="w-full bg-background">
      <div className="flex justify-center w-full py-16 bg-primary-static/10 rounded-tl-[150px] rounded-bl-[150px] md:rounded-tl-[250px] md:rounded-bl-[250px] lg:rounded-tl-[450px] lg:rounded-bl-[450px] 2xl:rounded-tl-[750px] 2xl:rounded-bl-[750px]">
        <div className="w-full">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="text-lg text-yellow-500">
                  <BiSolidCircle />
                </div>
                <Subheading
                  className="text-center lg:text-left"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Completed Projects
                </Subheading>
              </div>

              <H2
                className="text-center lg:text-left"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Our Creative Works
              </H2>
            </div>

            <WorksParallax />
          </div>
        </div>
      </div>
    </div>
  );
}
