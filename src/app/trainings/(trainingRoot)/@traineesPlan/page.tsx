import { Section } from '@/components/default-elements';
import { TrainingsCarousel } from '@/components/trainings-carousel';
import { H2, Subheading } from '@/components/ui/typography';

export default function TraineesPlan() {
  return (
    <div className="flex justify-center w-full py-16 ">
      <Section>
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
          <div
            className="w-full lg:w-1/2 h-[50vh]"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <TrainingsCarousel />
          </div>
          <div
            className="flex flex-col w-full lg:w-1/2 gap-6"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <H2>
              Trainees can enjoy numerous benefits and perks that help support
              their learning and development
            </H2>
            <Subheading>
              From customized learning plans and project-based learning to
              access to industry experts and career growth opportunities, we
              give our trainees the tools and resources they need to succeed.
            </Subheading>
          </div>
        </div>
      </Section>
    </div>
  );
}
