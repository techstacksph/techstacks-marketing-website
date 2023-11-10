import { Section } from '@/components/default-elements';
import { TrainingsCarousel } from '@/components/trainings-carousel';

export default function TraineesPlan() {
  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="flex flex-col items-center gap-8 xl:gap-14">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-center lg:text-3xl">
              Trainees can enjoy numerous benefits and perks that help support
              their learning and development
            </h2>
            <p className="text-base text-center text-muted lg:text-xl">
              From customized learning plans and project-based learning to
              access to industry experts and career growth opportunities, we
              give our trainees the tools and resources they need to succeed.
            </p>
          </div>
          <div className="h-[80vh]">
            <TrainingsCarousel />
          </div>
        </div>
      </Section>
    </div>
  );
}
