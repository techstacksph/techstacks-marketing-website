import type { IconType } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { RiTwitterXFill } from 'react-icons/ri';

export const socialMedia = [
  {
    Icon: BiLogoFacebook as IconType,
    title: 'Facebook',
    url: 'https://www.facebook.com/techstacksph',
  },
  {
    Icon: AiFillInstagram as IconType,
    title: 'Instagram',
    url: 'https://instagram.com/techstacksph',
  },
  {
    Icon: BiLogoLinkedin as IconType,
    title: 'Linked In',
    url: 'https://www.linkedin.com/company/techstacksph/',
  },
  {
    Icon: RiTwitterXFill as IconType,
    title: 'X',
    url: 'https://twitter.com/techstacksph',
  },
];

export const EMAIL = 'info@techstacksph.com' as const;
