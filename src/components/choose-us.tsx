import { BiSolidCircle } from 'react-icons/bi';
import { Separator } from './ui/separator';
import { Section } from './default-elements';
import { H2, H4, Subheading } from './ui/typography';
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
        'We commit to help your business stand out and gain the digital-competitive advantage through user-friendly, fast, secure, high converting, engaging websites.',
    },
    {
      icon: SvgSpaceShip,
      title: 'Dedicated team',
      description:
        'An agile web dev team equipped with knowledge of modern web technologies, best practices, experience and skills to build a website that delivers results.',
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
              Why Choose us
            </Subheading>
          </div>
          <div className="text-center">
            <H2 className="text-center" data-aos="fade-up" data-aos-delay={200}>
              We make beautiful, high converting, engaging, secure websites.
            </H2>
          </div>

          <div className="flex flex-col items-center lg:gap-4 md:flex-row md:justify-evenly pt-8 md:pt-16">
            {CARD_DATA.map(({ icon: Icon, ...data }, index) => (
              <GlowCard
                className="w-full h-full md:h-[500px] xl:h-[550px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={data.title}
              >
                <GlowCardContent className="w-full h-full p-8 md:p-4 lg:p-8 xl:p-10">
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="w-44 h-44 xl:w-52 xl:h-52 self-center">
                      <Icon />
                    </div>
                    <H4 asChild>
                      <h3>{data.title}</h3>
                    </H4>
                    <Separator className="h-1 bg-primary-static" />
                    <Subheading>{data.description}</Subheading>
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
