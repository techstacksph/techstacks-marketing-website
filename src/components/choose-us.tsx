import { BiSolidCircle } from 'react-icons/bi';
import { Separator } from './ui/separator';
import { Section } from './default-elements';
import { H2, H3, Subheading } from './ui/typography';
import { GlowCard, GlowCardContent } from './glow-card';
import { SvgGearContained } from './icons/svg-gear-contained';
import { SvgSpaceShip } from './icons/svg-spaceship';
import { SvgSupport } from './icons/svg-support';

export default function WhyChooseUs() {
  const CARD_DATA = [
    {
      icon: SvgGearContained,
      title: 'Iterative web development',
      description:
        'We are agile. We deliver fast. You never have to wait for too long to start seeing the awesomeness of your website.',
    },
    {
      icon: SvgSupport,
      title: 'Support',
      description:
        'We commit to help your business gain the digital-competitive advantage through fast and secure websites.',
    },
    {
      icon: SvgSpaceShip,
      title: 'Dedicated team',
      description:
        'An agile web dev team equipped with knowledge of modern web technologies to build your idea',
    },
  ];

  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div>
          <div
            className="flex gap-2 items-center justify-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <BiSolidCircle className="text-lg text-yellow-500" />
            <Subheading className="text-center lg:text-left">
              Why Choose Us
            </Subheading>
          </div>
          <div className="text-center mb-12">
            <H2 className="text-center" data-aos="fade-up" data-aos-delay={200}>
              We make beautiful, high converting, fast, and secure websites.
            </H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4 xl:gap-8 items-center">
            {CARD_DATA.map(({ icon: Icon, ...data }, index) => (
              <GlowCard
                className="w-full h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={data.title}
              >
                <GlowCardContent className="w-full h-full p-8 md:p-4 lg:p-8 xl:p-10">
                  <div className="flex flex-col h-full justify-between gap-4 lg:gap-6">
                    <div className="w-44 h-44 xl:w-52 xl:h-52 self-center">
                      <Icon />
                    </div>
                    <H3 className="text-xl">{data.title}</H3>
                    <Subheading>{data.description}</Subheading>
                    <Separator className="h-1 bg-primary-static" />
                  </div>
                </GlowCardContent>
              </GlowCard>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
