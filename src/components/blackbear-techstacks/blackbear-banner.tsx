import Image from 'next/image';
import { cybersecurityBanner } from '@/assets/images';

export function BlackBearBanner() {
  return (
    <div className="px-10 flex justify-center items-center h-[4rem] md:h-auto w-full">
      <div className="absolute drop-shadow-3xl text-amber-500  font-bold text-[20px] md:text-[35px] xmd:text-[45px] lg:text-[60px] xl:text-[75px]  text-center px-5  tracking-tighter   ">
        LEARN CYBERSECURITY
      </div>
      <Image alt="bg" className="w-full h-full " src={cybersecurityBanner} />
    </div>
  );
}
