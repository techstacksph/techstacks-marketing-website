import Link from 'next/link';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { Section } from '@/components/default-elements';
import Hero from '@/components/hero';
import { H1, Subheading } from '@/components/ui/typography';
import { companyLink } from '@/constants/nav-links';
import { NavRoutes } from '@/constants/nav-routes';

export default function ApplyHeroSection() {
  const aboutUsLink = companyLink[0]?.link.find(
    (item) => item.label === 'About us',
  );

  return (
    <div className="flex justify-center w-full py-16">
      <Section>
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <BreadCrumbs data-aos="fade-up" data-aos-delay={100}>
              <BreadCrumbItem>{aboutUsLink?.label}</BreadCrumbItem>
            </BreadCrumbs>
            <H1
              className="text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Who we are
            </H1>
            <Subheading
              className="text-left"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {aboutUsLink?.description}
            </Subheading>
            <Link
              className="relative inline-flex items-center justify-start p-3 overflow-hidden font-medium transition-all border rounded w-44 h-14 border-muted-static group bg-primary-static"
              data-aos="fade-up"
              data-aos-delay={400}
              href={NavRoutes.Company.Apply}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent/75 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center transition-colors duration-300 ease-in-out text-foreground group-hover:text-accent-foreground">
                Let&apos;s work together
              </span>
            </Link>
          </div>
          <div className="aspect-square">
            <Hero />
          </div>
        </div>
      </Section>
    </div>
  );
}
