import Link from 'next/link';
import { Section } from '@/components/default-elements';
import { SvgNotFound } from '@/components/icons/svg-not-found';
import { H3, Subheading } from '@/components/ui/typography';
import { NavRoutes } from '@/constants/nav-routes';

export default function PageNotFound() {
  return (
    <Section className="md:py-40 py-10">
      <div className="flex flex-col justify-center items-center md:gap-10 gap-5">
        <SvgNotFound className="w-full" />
        <H3 className="text-center text-base md:text-4xl">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </H3>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Subheading>Please try to</Subheading>

          <Link
            className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-transparent border rounded md:w-52 h-14 border-primary-static group"
            href={NavRoutes.Home}
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-black">
              Return to homepage
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
