import { BlackBearBanner } from '@/components/blackbear-techstacks/blackbear-banner';
import { EventDetails } from '@/components/blackbear-techstacks/event-details';
import { H2 } from '@/components/ui/typography';

export default function GrowYourCareer() {
  return (
    <div className="flex-col">
      <div className=" flex justify-center w-full  bg-gradient-to-tl from-black from-10% via-amber-600 via-100% to-orange-500 to-40% py-5 md:py-10">
        <div className=" max-w-screen-xl">
          <H2 className="text-center font-bold text-2xl xmd:text-3xl md:text-4xl lg:text-5xl text-foreground drop-shadow-3xl">
            Grow Your Career
            <br />
            Learn Cybersecurity Today!
          </H2>
        </div>
      </div>
      <div className="w-full bg-gradient-to-tl from-black from-40% via-amber-600 via-100% to-orange-500 to-40% flex justify-center">
        <div className=" w-full md:max-w-screen-2xl px-5 ">
          <EventDetails />
        </div>
      </div>
      <div className="bg-black flex justify-center p-5 py-10">
        <div className="max-w-screen-xl flex-col w-full ">
          <H2 className=" font-bold pb-5 text-foreground text-xl md:text-4xl text-center">
            Transform your career and salary!
          </H2>
          <BlackBearBanner />
        </div>
      </div>
    </div>
  );
}
