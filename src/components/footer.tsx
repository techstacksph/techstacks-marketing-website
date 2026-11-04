import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { companyLink, pagesLink } from '@/constants/nav-links';
import { NavRoutes } from '@/constants/nav-routes';
import { SOLUTIONS } from '@/constants/solutions';
import { EMAIL, socialMedia } from '@/constants/social-media';
import BrandLogo from './brand-logo';
import { CtaBand } from './cta-band';
import { Section } from './default-elements';

const PHONES = [
  { label: '(044) 331-4514', href: 'tel:+63443314514' },
  { label: '(044) 511-5859', href: 'tel:+63445115859' },
  { label: '0917-132-3561', href: 'tel:+639171323561' },
];

const LINK_CLASS =
  'text-sm text-muted-foreground transition-colors hover:text-foreground';

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-4 font-display text-sm font-semibold">{children}</h2>
  );
}

export default function Footer() {
  return (
    <>
      <CtaBand />
      <footer className="w-full border-t">
        <Section className="py-12 lg:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
            <div className="flex flex-col items-start gap-4">
              <Link aria-label="Techstacks home" href={NavRoutes.Home}>
                <BrandLogo className="text-primary-static" />
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Your technology partner for websites, web applications,
                automation, and security, serving local and global businesses.
              </p>
              <ul className="flex gap-2">
                {socialMedia.map(({ Icon, title, url }) => (
                  <li key={title}>
                    <a
                      aria-label={title}
                      className="flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary-static hover:text-primary-static"
                      href={url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Services">
              <FooterHeading>Services</FooterHeading>
              <ul className="flex flex-col gap-2.5">
                {SOLUTIONS.map(({ id, service }) => (
                  <li key={id}>
                    <Link
                      className={LINK_CLASS}
                      href={`${NavRoutes.Services}#${id}`}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <FooterHeading>Company</FooterHeading>
              <ul className="flex flex-col gap-2.5">
                {companyLink[0]?.link.map(({ href, label }) => (
                  <li key={label}>
                    <Link className={LINK_CLASS} href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
                {pagesLink
                  .filter(({ href }) => href !== NavRoutes.Services)
                  .map(({ href, title }) => (
                    <li key={title}>
                      <Link className={LINK_CLASS} href={href}>
                        {title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>

            <div>
              <FooterHeading>Get in touch</FooterHeading>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Mail
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-static"
                  />
                  <a
                    className="transition-colors hover:text-foreground"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-static"
                  />
                  <span className="flex flex-col gap-1">
                    {PHONES.map(({ href, label }) => (
                      <a
                        className="transition-colors hover:text-foreground"
                        href={href}
                        key={href}
                      >
                        {label}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-static"
                  />
                  Cabanatuan City, Nueva Ecija, Philippines 3100
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Techstacks IT Services Inc. All
              rights reserved. Not affiliated with Techstacks IT Web Development
              Services.
            </p>
            <Link
              className="shrink-0 transition-colors hover:text-foreground"
              href={NavRoutes.PrivacyPolicy}
            >
              Privacy Policy
            </Link>
          </div>
        </Section>
      </footer>
    </>
  );
}
