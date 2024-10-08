import Image from 'next/image';
import { logos } from '@/constants/blackbear-constants/logo-link-type';
import { H2 } from '../ui/typography';
import { BlackBearBanner } from './blackbear-banner';

export function BlackBearHeader() {
  return (
    <div className="w-full">
      <div className=" flex flex-col md:flex-row md:justify-between">
        {logos.map((l) => (
          <a className="flex justify-center " href={l.link} key={l.name}>
            <Image
              alt={l.name}
              className="h-14 object-contain w-[40%] min-w-[150px] md:w-56 m-1"
              src={l.image}
            />
          </a>
        ))}
      </div>
      <div className="  py-5 md:py-10  ">
        <H2 className="text-center text-background dark:text-foreground">
          {' '}
          Do you want to secure a high-paying job?
        </H2>
      </div>
      <BlackBearBanner />
    </div>
  );
}
