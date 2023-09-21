import Image from 'next/image';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { socialMedia } from '@/constants/social-media';
import {
  aboutLink,
  servicesLink,
  portfolioLink,
} from '@/constants/footer-link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-[72px] pb-10 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-14 md:flex-row gap-12 lg:flex-row justify-between">
            <div className="flex flex-col items-center gap-6 md:items-start">
              <Image
                alt="Techstacks Logo"
                className="w-auto h-9"
                height={27}
                src="/images/techstacks-logo.svg"
                width={117}
              />
              <p className="text-center text-muted md:text-left">
                Ready to upgrade your website? <br className="md:text-left" />
                give us a try.🤝
              </p>
              <ul className="flex justify-center gap-4">
                {socialMedia.map(({ Icon, title, url }) => (
                  <li key={title}>
                    <Button
                      asChild
                      className="flex justify-center w-6 h-6 p-0 align-center"
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
              <li className="flex justify-center flex-col text-primary font-semibold">
                <Link href="#">About</Link>
                {aboutLink.map((about) => (
                  <div key={about.title}>
                    <Link className="text-sm text-secondary" href={about.url}>
                      {about.title}
                    </Link>
                  </div>
                ))}
              </li>
              <li className="flex justify-center flex-col text-primary font-semibold">
                <Link href="#">Services</Link>
                {servicesLink.map((services) => (
                  <div key={services.title}>
                    <Link
                      className="text-sm text-secondary"
                      href={services.url}
                    >
                      {services.title}
                    </Link>
                  </div>
                ))}
              </li>
              <li className="flex justify-center flex-col text-primary font-semibold">
                <Link href="#">Porfolio</Link>
                {portfolioLink.map((portfolio) => (
                  <div key={portfolio.title}>
                    <Link
                      className="text-sm text-secondary"
                      href={portfolio.url}
                    >
                      {portfolio.title}
                    </Link>
                  </div>
                ))}
              </li>
            </ul>
            <div className="flex flex-col gap-8 md:hidden">
              <h3 className="font-medium text-lg">Contact us</h3>
              <div className="flex gap-6 items-center">
                <div className="text-3xl">
                  <MdEmail />
                </div>
                <div>
                  <div>Email:</div>
                  <div>contact@techstacks.com</div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
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
          <div className="flex flex-col items-center gap-2 md:flex-row justify-center">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <p>Copyright &copy; {new Date().getFullYear()} Techstacks | </p>
              <p>All Rights Reserved.</p>
            </div>
            <div>
              <Link className="text-neutral-600 underline" href="#">
                Terms and Conditions
              </Link>{' '}
              |{' '}
              <Link className="text-neutral-600 underline" href="#">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
