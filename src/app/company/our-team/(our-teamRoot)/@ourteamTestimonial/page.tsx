import { type SetRequired } from 'type-fest';
import { Section } from '@/components/default-elements';
import { TeamGalleryCard } from '@/components/team-gallery-card';
import { H1 } from '@/components/ui/typography';
import { type MemberData, TEAM } from '@/constants/team';
import { isOdd } from '@/utils/is-odd';
import { Typewriter } from '@/components/typewriter';

export default function OurTeamGallery() {
  const withGallery = TEAM.filter(
    (member): member is SetRequired<MemberData, 'teamGallery'> =>
      Boolean(member.teamGallery),
  );

  return (
    <div className="w-full flex justify-center py-16">
      <Section>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="sticky top-24">
            <div className="space-y-4">
              <H1 asChild>
                <h2>
                  Unveiling{' '}
                  <span className="text-primary-static">Employee Insights</span>
                </h2>
              </H1>

              <Typewriter
                component="p"
                options={{
                  wrapperClassName:
                    'text-base leading-loose text-muted-foreground lg:text-2xl',
                  strings: [
                    'Employee Takes on Techstacks',
                    'What Our Team Thinks of Techstacks',
                    'Perspectives on Tech Choices',
                    'Our Workforce Weighs in on Stacks',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-16 py-16">
            {withGallery.map(
              ({ id, name, profile, position, teamGallery }, idx) => (
                <div
                  className={isOdd(idx) ? 'ml-16' : 'mr-16'}
                  data-aos={isOdd(idx) ? 'fade-left' : 'fade-right'}
                  key={id}
                >
                  <TeamGalleryCard
                    body={teamGallery.body}
                    index={isOdd(idx)}
                    name={name}
                    position={position}
                    src={profile}
                    title={teamGallery.title}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
