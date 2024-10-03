import { type StaticImageData } from 'next/image';
import { innovativeLogo, blackbearLogo, techstacksLogo } from '@/assets/images';

interface LogoLinkType {
  name: string;
  link: string;
  image: StaticImageData;
}

export const logos: LogoLinkType[] = [
  {
    name: 'Innovate Logo',
    link: 'https://www.innovatemarketing.co.nz/',
    image: innovativeLogo,
  },
  {
    name: 'Black Bear Logo',
    link: 'https://www.innovatemarketing.co.nz/_files/ugd/89fa3f_cc9d4643cb8540b4ab0708bd05bdf548.pdf',
    image: blackbearLogo,
  },
  {
    name: 'Techstacks Logo',
    link: 'https://techstacksph.com/',
    image: techstacksLogo,
  },
];
