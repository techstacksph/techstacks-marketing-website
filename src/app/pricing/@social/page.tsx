import { Section } from '@/components/default-elements';
import { H2 } from '@/components/ui/typography';
import { Typewriter } from '@/components/typewriter';
import SocialProof from '@/components/social-proof';

export default function PricingSocialProof() {
  return (
    <Section>
      <div className="flex flex-col gap-20 justify-center ">
        <H2
          className="text-center whitespace-pre-wrap font-extrabold lg:text-left"
          data-aos="fade-up"
        >
          Trusted by:{' '}
          <Typewriter
            component="span"
            options={{
              wrapperClassName: 'text-primary-static',
              strings: [
                'Jobbrew',
                'Winmart',
                'MNM',
                'PRIMELIGHT',
                'Nextpay',
                'De Diabetes',
                'unpuzzle',
                'AGASSIZ All Storage',
                'Portfolio Insider',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </H2>
        <SocialProof />
      </div>
    </Section>
  );
}
