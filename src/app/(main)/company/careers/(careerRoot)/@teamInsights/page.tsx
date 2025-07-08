import Image from 'next/image';
import { jayveeImg, airaProfile, jessicaImage } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/utils/cn';
import { H2 } from '@/components/ui/typography';

const [mem1, ...otherMembers] = [
  {
    title: 'The Best Team',
    description:
      'As Operations Manager at Techstacks PH, I ensure our workflows run smoothly and our teams stay aligned. I focus on creating efficient systems, solving day-to-day challenges, and fostering a collaborative environment—because I believe that success starts with strong teamwork.',
    member: 'Jayvee Ramos',
    position: 'Operations Manager',
    image: jayveeImg,
  },
  {
    title: 'Code with Purpose',
    description:
      'Creating clean, functional code that powers seamless digital experiences.',
    member: 'John Aira Feleo',
    position: 'Web Developer',
    image: airaProfile,
  },
  {
    title: 'Systems that Support People',
    description: ' Striving for excellence is our daily commitment.',
    member: 'Jessica Natividad',
    position: 'Admin/HR/Accounting',
    image: jessicaImage,
  },
] as const;

export default function TeamInsights() {
  return (
    <Section className="px-0 lg:px-4">
      <H2 className="[&&]:leading-tight lg:whitespace-pre-wrap  text-center">
        Discover Our Team Members&apos;{'\n'}
        <span className="text-primary-static">Insights</span>
      </H2>
      <div className="mt-10">
        <div className="grid overflow-hidden border lg:rounded-lg lg:grid-cols-3 md:shadow-xl [&&]:shadow-primary-static/10">
          <div className="flex flex-row">
            <div className="row-span-2 w-full md:w-1/2 lg:w-full bg-primary-static">
              <Image
                alt={mem1.member}
                className="object-cover w-full h-full"
                src={mem1.image}
              />
            </div>
            <div className="w-1/2 p-4 hidden md:flex md:flex-col gap-4 lg:hidden">
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

          <div className="row-span-2 p-4 block md:hidden lg:block lg:px-10 lg:py-12 lg:border-l">
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
