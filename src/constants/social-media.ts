import type { IconType } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { RiTwitterXFill } from 'react-icons/ri';

export const socialMedia = [
  { Icon: BiLogoFacebook as IconType, title: 'Facebook', url: '#' },
  { Icon: AiFillInstagram as IconType, title: 'Instagram', url: '#' },
  { Icon: BiLogoLinkedin as IconType, title: 'Linked In', url: '#' },
  { Icon: RiTwitterXFill as IconType, title: 'X', url: '#' },
];

export const EMAIL = 'techstacks.2022@gmail.com' as const;
