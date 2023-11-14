import Link from 'next/link';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { socialMedia } from '@/constants/social-media';
import { portfolioLink, companyLink, pagesLink } from '@/constants/nav-links';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Section } from './default-elements';
import BrandLogo from './brand-logo';
import { H2, Subheading } from './ui/typography';
import { BgLogo } from './icons/bg-logo';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-8 md:gap-10 justify-center pt-[72px] pb-10  bg-primary-static/10">
      <div className="w-full flex justify-center px-4 ">
        <div className="w-full flex items-center flex-col md:flex-row  gap-8 max-w-screen-2xl">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <H2 className="text-center md:text-left">
              Ready to upgrade your website? <br />
              <span className="text-primary-static">give us a try. 🤝</span>
            </H2>
            <Subheading className="text-center md:text-left">
              Cultivate Your Online Presence with Our Website Upgrade Solutions
            </Subheading>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <BgLogo className="object-cover  w-full  rounded   sm:h-72 md:h-72 lg:h-96" />
          </div>
        </div>
      </div>
      <Section>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-3">
            <div
              className="flex flex-col items-center gap-6 lg:items-start"
              suppressHydrationWarning
            >
              <Link className="cursor-pointer" href={NavRoutes.Home}>
                <BrandLogo className="text-primary-static" />
              </Link>

              <p className="text-center text-muted lg:text-left">
                High level experience in web design and development knowledge,
                producing quality work.
              </p>
              <ul className="flex justify-center gap-4">
                {socialMedia.map(({ Icon, title, url }) => (
                  <li key={title}>
                    <Button
                      asChild
                      className="flex justify-center w-6 h-6 p-0 align-center bg-primary-static text-primary-foreground-static hover:bg-primary-static/60"
                    >
                      <a href={url} rel="noreferrer" target="_blank">
                        <Icon />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid grid-cols-[6rem_1fr] gap-5 md:grid-cols-[6rem_1fr_1fr_1fr] lg:gap-2">
              {companyLink.map((company) => (
                <li
                  className="flex  flex-col text-primary-static font-semibold"
                  key={company.title}
                >
                  <h3>{company.title}</h3>
                  <ul>
                    {company.link.map((link) => (
                      <li key={link.label}>
                        <Link
                          className="text-sm text-muted-foreground-static"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {portfolioLink.map((portfolio) => (
                <li
                  className="flex flex-col text-primary-static font-semibold"
                  key={portfolio.title}
                >
                  <h3>{portfolio.title}</h3>
                  <ul>
                    {portfolio.link.map((port) => (
                      <li key={port.label}>
                        <Link
                          className="text-sm text-muted-foreground-static"
                          href={port.href}
                        >
                          {port.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <ul className="col-span-2 md:col-span-1 grid grid-cols-[6rem_1fr] gap-5 md:block md:gap-0">
                {pagesLink.map((page) => (
                  <li
                    className="flex justify-center flex-col text-primary-static font-semibold"
                    key={page.title}
                  >
                    <Link href={page.href}>{page.title}</Link>
                  </li>
                ))}
              </ul>

              <ul className="col-span-2 md:col-span-1">
                <li className="flex flex-col gap-4">
                  <h3 className="font-medium text-lg text-primary-static">
                    Get in touch with us
                  </h3>
                  <div className="flex gap-4 items-center">
                    <div className="text-2xl text-primary-static">
                      <IoPaperPlaneSharp />
                    </div>
                    <div>
                      <h4 className="text-sm">Address:</h4>
                      <p className="text-sm">
                        Cabanatuan city, Nueva ecija, PH 3100
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-2xl text-primary-static">
                      <MdEmail />
                    </div>
                    <div>
                      <h4 className="text-sm">Email:</h4>
                      <p className="text-sm">techstacks.2022@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-2xl text-primary-static">
                      <BsFillTelephoneFill />
                    </div>
                    <div>
                      <h4 className="text-sm">Phone:</h4>
                      <p className="text-sm">(44) 331-4514</p>
                    </div>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
          <Separator />
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <p>Copyright &copy; {new Date().getFullYear()} Techstacks | </p>
              <p>All Rights Reserved.</p>
            </div>
            <div>
              <Link className="underline text-neutral-600" href="#">
                Terms and Conditions
              </Link>{' '}
              |{' '}
              <Link className="underline text-neutral-600" href="#">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
