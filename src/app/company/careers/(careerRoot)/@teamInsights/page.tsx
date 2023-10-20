import Image from 'next/image';
import { ourTeam } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/utils/cn';

const [mem1, ...otherMembers] = [
  {
    title: 'The Best Team',
    description:
      'Our exceptional professionals are at the core of our success, and together, we create extraordinary results. Discover opportunities to be part of a team that values excellence, collaboration, and innovation.',
    member: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    image: ourTeam,
  },
  {
    title: 'Teamwork = Success',
    description:
      "Our collaborative spirit is the cornerstone of our achievements, and it's what sets us apart.",
    member: 'Francis Bernardino',
    position: 'Frontend Developer',
    image: ourTeam,
  },
  {
    title: 'Strive for Excellence',
    description: ' Striving for excellence is our daily commitment.',
    member: 'Ara Belle Agarem',
    position: 'Marketing & Seo Specialist',
    image: ourTeam,
  },
] as const;

export default function TeamInsights() {
  return (
    <Section className="px-0 lg:px-4">
      <h2 className="text-2xl font-bold [&&]:leading-tight lg:whitespace-pre-wrap lg:text-5xl text-center">
        Discover Our Team Members&apos;{'\n'}
        <span className="text-primary-static">Insights</span>
      </h2>

      <div className="mt-10">
        <div className="grid overflow-hidden lg:border lg:rounded-lg lg:grid-cols-3 md:shadow-xl [&&]:shadow-primary-static">
          <div className="row-span-2">
            <Image
              alt={mem1.member}
              className="object-cover w-full h-full"
              src={mem1.image}
            />
          </div>
          <div className="row-span-2 p-4 lg:px-10 lg:py-12 lg:border-l">
            <div className="flex flex-col justify-center h-full gap-4 lg:gap-6">
              <h3 className="text-xl font-medium lg:text-3xl">
                &quot;{mem1.title}&quot;
              </h3>
              <p className="text-lg italic lg:text-2xl text-muted">
                {mem1.description}
              </p>
              <div>
                <div className="text-base font-medium lg:text-xl">
                  {mem1.member}
                </div>
                <div className="text-sm lg:text-base text-primary-static">
                  {mem1.position}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:border-l">
            {otherMembers.map((mem, index) => (
              <div
                className={cn(
                  'p-4 lg:px-10 lg:py-12 border-t',
                  !index && 'lg:border-none',
                )}
                key={mem.member}
              >
                <div className="flex flex-col gap-4 lg:gap-6">
                  <h3 className="text-xl font-medium lg:text-2xl">
                    &quot;{mem.title}&quot;
                  </h3>
                  <p className="text-lg italic lg:text-2xl text-muted">
                    {mem.description}
                  </p>
                  <div className="flex gap-4">
                    <Avatar className="w-auto h-14 aspect-square">
                      <AvatarImage asChild src={mem.image.src}>
                        <Image alt={mem.member} src={mem.image} />
                      </AvatarImage>
                      <AvatarFallback>{mem.member}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-evenly">
                      <div className="text-base font-medium lg:text-xl">
                        {mem.member}
                      </div>
                      <div className="text-sm lg:text-base text-primary-static">
                        {mem.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
