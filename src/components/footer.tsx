import Link from 'next/link';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { socialMedia } from '@/constants/social-media';
import { companyLink, pagesLink } from '@/constants/nav-links';
import { NavRoutes } from '@/constants/nav-routes';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Section } from './default-elements';
import BrandLogo from './brand-logo';
import { Subheading } from './ui/typography';
import { TechstacksLogo } from './icons/techstacks-logo';

export default function Footer() {
  return (
    <footer className="w-full pt-[72px] pb-10 overflow-clip">
      <div className="relative flex flex-col-reverse lg:flex-col ">
        <div className="inset-y-0 top-0 right-12 lg:right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full hidden md:inline md:absolute xl:px-0">
          <div className="flex items-center justify-center w-full h-[500px]">
            <TechstacksLogo className=" object-cover w-full max-w-screen-lg rounded stroke-primary-static h-full -rotate-12 text-primary-static/5 " />
          </div>
        </div>
        <Section>
          <div className="relative flex flex-col gap-10 items-center md:items-start w-full">
            <div className="flex flex-col w-full gap-4 mb-12">
              <h2 className="text-2xl font-semibold text-center lg:text-3xl xl:text-5xl">
                <span className="block mb-0">
                  Ready to upgrade your digital presence?
                </span>
                <span className="text-primary-static block">
                  From websites to web applications, we build solutions that
                  scale. 🚀
                </span>
              </h2>
              <Subheading className="text-center">
                Grow Your Web Presence with Our Website Upgrade Solutions
              </Subheading>
            </div>
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
                    Extensive experience in web design and web application
                    development, producing high-quality work.
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
                <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:gap-2">
                  {companyLink.map((company) => (
                    <li
                      className="flex flex-col font-semibold text-primary-static"
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
                        <li>
                          <Link
                            className="text-sm text-muted-foreground-static"
                            href={NavRoutes.PrivacyPolicy}
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ))}

                  <ul className="grid gap-2 md:block md:gap-0">
                    {pagesLink.map((page) => (
                      <li
                        className="flex flex-col justify-center font-semibold text-primary-static"
                        key={page.title}
                      >
                        <Link href={page.href as string}>{page.title}</Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="col-span-2 md:col-span-1">
                    <li className="flex flex-col gap-4">
                      <h3 className="text-lg font-medium text-primary-static">
                        Get in touch with us
                      </h3>
                      <div className="flex items-center gap-4">
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
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-primary-static">
                          <MdEmail />
                        </div>
                        <div>
                          <h4 className="text-sm">Email:</h4>
                          <Link
                            className="text-sm underline"
                            href="mailto:info@techstacksph.com"
                          >
                            info@techstacksph.com
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-primary-static">
                          <BsFillTelephoneFill />
                        </div>
                        <div>
                          <h4 className="text-sm">Phone:</h4>
                          <Link
                            className="text-sm underline"
                            href="tel:+443314514"
                          >
                            (44) 331-4514
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <Separator />
              <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:flex-row">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} Techstacks
                    |{' '}
                  </p>
                  <p>All Rights Reserved.</p>
                </div>
                <div>
                  {/* <Link className="underline text-neutral-600" href="#">
                    Terms and Conditions
                  </Link>{' '} */}
                  |{' '}
                  <Link
                    className="underline text-neutral-600"
                    href={NavRoutes.PrivacyPolicy}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </footer>
  );
}
