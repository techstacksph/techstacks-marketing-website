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
    member: 'Laiza Polyana Amurao',
    position: 'Admin/HR/Accounting',
    image: jessicaImage,
  },
] as const;

export default function TeamInsights() {
  return (
    <Section className="px-0 py-16 lg:px-4 lg:py-24">
      <H2 className="px-4 text-center lg:px-0">Hear it from the team</H2>
      <div className="mt-10">
        <div className="grid overflow-hidden border lg:rounded-lg lg:grid-cols-3  ">
          <div className="flex flex-row">
            <div className="row-span-2 w-full md:w-1/2 lg:w-full bg-surface">
              <Image
                alt={mem1.member}
                className="object-cover w-full h-full"
                src={mem1.image}
              />
            </div>
            <div className="w-1/2 p-4 hidden md:flex md:flex-col gap-4 lg:hidden">
              <h3 className="font-display text-xl font-semibold">
                &quot;{mem1.title}&quot;
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {mem1.description}
              </p>
              <div>
                <div className="font-semibold">{mem1.member}</div>
                <div className="text-sm text-muted-foreground">
                  {mem1.position}
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2 p-4 block md:hidden lg:block lg:px-10 lg:py-12 lg:border-l">
            <div className="flex flex-col justify-center h-full gap-4 lg:gap-6">
              <h3 className="font-display text-xl font-semibold">
                &quot;{mem1.title}&quot;
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {mem1.description}
              </p>
              <div>
                <div className="font-semibold">{mem1.member}</div>
                <div className="text-sm text-muted-foreground">
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
                  <h3 className="font-display text-xl font-semibold">
                    &quot;{mem.title}&quot;
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
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
                      <div className="font-semibold">{mem.member}</div>
                      <div className="text-sm text-muted-foreground">
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
