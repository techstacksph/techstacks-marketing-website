import { type StaticImageData } from 'next/image';
import {
  adalineImage,
  airaProfile,
  airateam,
  araProfile,
  arateam,
  franzProfile,
  franzteam,
  jayveeProfile,
  jayveeteam,
  jessicaImage,
  jhonasImage,
  kaiProfile,
  kaiteam,
  marviuzProfile,
  marviuzteam,
  rubeanImage,
  samProfile,
  samteam,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
  teamImg6,
  teamImg7,
  teamImg8,
  thirdProfile,
} from '@/assets/images';

export interface MemberData {
  id: string;
  name: string;
  position: string;
  src: StaticImageData;
  profile: StaticImageData;
  teamGallery?: {
    title: string;
    body: string;
  };
}

export const TEAM = [
  // {
  //   id: 1,
  //   name: '',
  //   position: '',
  //   src: teamImg1,
  //   profile: '',
  // },
  {
    id: 2,
    name: ' Rubean Rakeru Esguerra',
    position: 'Web Developer',
    src: teamImg2,
    profile: rubeanImage,
    teamGallery: {
      title: 'Innovating Through Development',
      body: 'As a Web Developer, I contribute to creating interactive features and optimizing performance for web applications, ensuring our platforms are modern, fast, and accessible to all users.',
    },
  },
  {
    id: 3,
    name: 'Jhonas Lalo',
    position: 'Web Developer',
    src: teamImg3,
    profile: jhonasImage,
    teamGallery: {
      title: 'Code with Purpose',
      body: 'As a Web Developer at Techstacks PH, I focus on developing clean, efficient code and solving technical challenges—contributing to high-performing websites and ensuring a seamless user experience across platforms.',
    },
  },
  {
    id: 4,
    name: 'Sammuel "Sam" Espiritu',
    position: 'Web Developer',
    src: teamImg4,
    profile: samProfile,
    teamGallery: {
      title: 'Turning Code into Solutions',
      body: 'At Techstacks PH, I develop robust and efficient backend and frontend systems that support our digital products, helping deliver reliable and innovative solutions tailored to user needs.',
    },
  },
  {
    id: 5,
    name: 'Jessica Natividad',
    position: 'Admin/HR/Accounting',
    src: teamImg5,
    profile: jessicaImage,
    teamGallery: {
      title: 'Keeping Systems in Sync',
      body: 'At Techstacks PH, I manage administrative, HR, and accounting tasks to ensure everything runs smoothly behind the scenes—supporting both people and processes so the entire team can thrive and stay on track.',
    },
  },
  {
    id: 6,
    name: 'Jayvee Ramos',
    position: 'Operations Manager',
    src: teamImg6,
    profile: jayveeProfile,
    teamGallery: {
      title: 'Driving Team Efficiency',
      body: 'As Operations Manager at Techstacks PH, I coordinate teams, manage resources, and implement strategies that keep our workflow smooth and projects on track, ensuring operational excellence across the board.',
    },
  },
  {
    id: 7,
    name: 'John Aira Feleo',
    position: 'Web Developer',
    src: teamImg7,
    profile: airaProfile,
    teamGallery: {
      title: 'Building Seamless Experiences',
      body: 'As a Web Developer at Techstacks PH, I focus on crafting responsive and user-friendly web interfaces that meet both client expectations and industry standards, ensuring each project is functional, scalable, and visually engaging.',
    },
  },
  {
    id: 8,
    name: 'Adaline Cruz',
    position: 'Web Developer / Marketing Officer',
    src: teamImg8,
    profile: adalineImage,
    teamGallery: {
      title: 'Merging Creativity and Functionality',
      body: 'At Techstacks PH, I bridge development and marketing—building websites that not only perform well but also align with brand identity, while creating content that effectively communicates value to our audience.',
    },
  },
].map(({ id, ...rest }) => ({ id: `t1-${id}`, ...rest })) as MemberData[];

export const TEAM1 = [
  {
    id: 1,
    name: 'Frances Kaye Albis',
    position: 'Admin Officer',
    src: kaiteam,
    profile: kaiProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
  {
    id: 2,
    name: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    src: jayveeteam,
    profile: jayveeProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: 3,
    name: 'Ara Belle Agarem',
    position: 'Marketing and SEO Specialist',
    src: arateam,
    profile: araProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
  {
    id: 4,
    name: 'John Aira Feleo',
    position: 'Back-end Developer',
    src: airateam,
    profile: airaProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
  {
    id: 5,
    name: 'Sammuel Espiritu',
    position: 'Front-end Developer',
    src: samteam,
    profile: samProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
  {
    id: 6,
    name: 'Marviuz',
    position: 'Front-end Developer',
    src: marviuzteam,
    profile: marviuzProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
  {
    id: 7,
    name: 'Francis Bernardino',
    position: 'Front-end Developer',
    src: franzteam,
    profile: franzProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
  {
    id: 8,
    name: 'fms third',
    position: '',
    src: thirdProfile,
    profile: thirdProfile,
    socialMedia: {
      github: 'https://github.com/fmsthird',
      linkedin: 'https://github.com/fmsthird',
    },
  },
] as const;
