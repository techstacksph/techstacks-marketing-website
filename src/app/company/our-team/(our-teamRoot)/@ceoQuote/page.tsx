import { sirThirdImg } from '@/assets/images';
import { Section } from '@/components/default-elements';
import { Subheading } from '@/components/ui/typography';
import Image from 'next/image';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

export default function CeoQuote() {
  return (
    <div className="w-full flex justify-center py-16 ">
      <Section>
        <div className="flex justify-center items-center w-full h-full overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between relative items-center w-full p-4">
            <div className="flex flex-col items-center gap-1 w-full p-10">
              <div
                className="text-3xl xl:text-5xl self-start"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <BiSolidQuoteAltLeft />
              </div>
              <Subheading className="text-center lg:text-3xl">
                Let&apos;s build something together.
              </Subheading>
              <Subheading className="text-center lg:text-3xl">
                Let&apos;s talk about your ideas and how Techstacks can help
                bring it to life.
              </Subheading>
              <Subheading className="font-bold italic text-center lg:text-md mt-8">
                fms third
              </Subheading>
              <div className="text-3xl xl:text-5xl self-end">
                <BiSolidQuoteAltRight />
              </div>
            </div>
            <div
              className="w-full max-w-xs pb-2 lg:pb-auto hidden"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="flex justify-center bg-primary-static">
                <Image alt="asd" src={sirThirdImg} />
              </div>
            </div>
            <div
              className="flex absolute w-full h-[calc(100%-32px)] border border-primary-static bg-transparent top-4 left-0 -z-10"
              data-aos="fade-up"
              data-aos-delay={100}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
