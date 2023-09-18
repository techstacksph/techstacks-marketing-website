import Image from 'next/image';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { socialMedia } from '@/constants/social-media';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer>
      <div className="pt-[72px] px-14">
        <div className="flex flex-col items-center">
          <Image
            alt="Techstacks Logo"
            className="w-auto h-9"
            height={27}
            src="/images/techstacks-logo.svg"
            width={117}
          />

          <div className="py-4">
            <p className="text-center text-muted">
              Ready to upgrade your website? give us a try.🤝
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-14">
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

        <ul className="grid grid-cols-2 gap-4">
          <li className="flex justify-center text-primary font-semibold">
            <Link href="#">About</Link>
          </li>
          <li className="flex justify-center text-primary font-semibold">
            <Link href="#">Products</Link>
          </li>
          <li className="flex justify-center text-primary font-semibold">
            <Link href="#">Services</Link>
          </li>
          <li className="flex justify-center text-primary font-semibold">
            <Link href="#">Careers</Link>
          </li>
          <li className="flex justify-center text-primary font-semibold">
            <Link href="#">Trainings</Link>
          </li>
        </ul>

        <div className="flex flex-col gap-8">
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

      <hr />
      <div className="px-6 py-8">
        <p className="text-center text-muted">
          Copyright &copy; {new Date().getFullYear()} Techstacks | All Rights
          Reserved |{' '}
          <Link className="text-neutral-600 underline" href="#">
            Terms and Conditions
          </Link>{' '}
          |{' '}
          <Link className="text-neutral-600 underline" href="#">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
