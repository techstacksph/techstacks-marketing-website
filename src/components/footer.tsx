import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { socialMedia } from '@/constants/social-media';
import {
  aboutLink,
  servicesLink,
  portfolioLink,
} from '@/constants/footer-link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const BrandLogo = dynamic(() => import('./brand-logo'));

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-[72px] pb-10 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-12 md:flex-row lg:flex-row">
            <div
              className="flex flex-col items-center gap-6 md:items-start"
              suppressHydrationWarning
            >
              <BrandLogo className="text-primary-static" />
              <p className="text-center text-muted md:text-left">
                Ready to upgrade your website? <br className="md:text-left" />
                give us a try.🤝
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
            <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:gap-24">
              <li className="flex flex-col justify-center font-semibold text-primary-static">
                <Link href="#">About</Link>
                {aboutLink.map((about) => (
                  <div key={about.title}>
                    <Link
                      className="text-sm text-muted-foreground-static"
                      href={about.url}
                    >
                      {about.title}
                    </Link>
                  </div>
                ))}
              </li>
              <li className="flex flex-col justify-center font-semibold text-primary-static">
                <Link href="#">Services</Link>
                {servicesLink.map((services) => (
                  <div key={services.title}>
                    <Link
                      className="text-sm text-muted-foreground-static"
                      href={services.url}
                    >
                      {services.title}
                    </Link>
                  </div>
                ))}
              </li>
              <li className="flex flex-col justify-center font-semibold text-primary-static">
                <Link href="#">Portfolio</Link>
                {portfolioLink.map((portfolio) => (
                  <div key={portfolio.title}>
                    <Link
                      className="text-sm text-muted-foreground-static"
                      href={portfolio.url}
                    >
                      {portfolio.title}
                    </Link>
                  </div>
                ))}
              </li>
            </ul>
            <div className="flex flex-col gap-8 md:hidden">
              <h3 className="text-lg font-medium">Contact us</h3>
              <div className="flex items-center gap-6">
                <div className="text-3xl">
                  <MdEmail />
                </div>
                <div>
                  <div>Email:</div>
                  <div>contact@techstacks.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-3xl">
                  <BsFillTelephoneFill />
                </div>
                <div>
                  <div>Phone:</div>
                  <div>(XXX) XXX - XXXX</div>
                </div>
              </div>
            </div>
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
      </div>
    </footer>
  );
}
