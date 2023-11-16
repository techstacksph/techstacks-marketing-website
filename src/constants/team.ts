import { type StaticImageData } from 'next/image';
import {
  teamImg1,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
  teamImg6,
  teamImg7,
  teamImg8,
  franzProfile,
  marcusProfile,
  samProfile,
  jayveeProfile,
  thirdProfile,
  kaiProfile,
  airaProfile,
  araProfile,
  kaiteam,
  jayveeteam,
  arateam,
  airateam,
  samteam,
  marcusteam,
  franzteam,
} from '@/assets/images';

export interface MemberData {
  id: number;
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
  {
    id: 1,
    name: 'Florante Sugian III',
    position: 'Owner/CTO',
    src: teamImg1,
    profile: thirdProfile,
  },
  {
    id: 2,
    name: 'Marcus Leviticus Dela Cruz',
    position: 'Front-end Developer',
    src: teamImg2,
    profile: marcusProfile,
    teamGallery: {
      title: 'Innovative Excellence Unleashed',
      body: 'Our experience with Techstacks has been exceptional. Their web development team blends technical expertise and creative flair, consistently exceeding our expectations and elevating our online presence.',
    },
  },
  {
    id: 3,
    name: 'Francis "Franz" Bernardino',
    position: 'Front-end Developer',
    src: teamImg3,
    profile: franzProfile,
    teamGallery: {
      title: 'Precision in Partnership',
      body: 'Choosing Techstacks for web development paid off. Their commitment to understanding our needs and delivering tailored solutions sets them apart as our go-to partner for innovative and reliable services.',
    },
  },
  {
    id: 4,
    name: 'Sammuel "Sam" Espiritu',
    position: 'Front-end Developer',
    src: teamImg4,
    profile: samProfile,
    teamGallery: {
      title: 'Navigating Success Together',
      body: 'Working with Techstacks in the digital landscape has been refreshing. Their professionalism, attention to detail, and commitment to timelines make them an integral part of our success and a valued growth partner.',
    },
  },
  {
    id: 5,
    name: 'Frances Kaye "Kai" Albis',
    position: 'Admin Officer',
    src: teamImg5,
    profile: kaiProfile,
    teamGallery: {
      title: 'Elevating Digital Presence',
      body: "Techstacks's web development team's expertise and dedication shine through. They played a pivotal role in enhancing our online presence and user experience, contributing significantly to our success.",
    },
  },
  {
    id: 6,
    name: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    src: teamImg6,
    profile: jayveeProfile,
    teamGallery: {
      title: 'Crafting Identity, Achieving Goals',
      body: 'Choosing Techstacks for our web development was one of our best decisions. Their proficiency in the latest technologies and deep understanding of design principles consistently delivers results aligned with our brand identity and business goals.',
    },
  },
  {
    id: 7,
    name: 'John Aira Feleo',
    position: 'Back-end Developer',
    src: teamImg7,
    profile: airaProfile,
    teamGallery: {
      title: 'Seamless Solutions, Exceptional Results',
      body: "Entrusting our web development needs to Techstacks was a seamless choice. Their team's commitment to excellence and innovative solutions consistently delivers results that surpass expectations.",
    },
  },
  {
    id: 8,
    name: 'Ara Belle Agarem',
    position: 'Marketing and SEO Specialist',
    src: teamImg8,
    profile: araProfile,
    teamGallery: {
      title: 'Beyond Coding: A Strategic Alliance',
      body: 'Collaborating with Techstacks goes beyond conventional web development. Their strategic approach, combined with technical prowess, has positioned them as an invaluable ally in achieving our digital objectives.',
    },
  },
] as MemberData[];

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
    name: 'Marcus Leviticus Dela Cruz',
    position: 'Front-end Developer',
    src: marcusteam,
    profile: marcusProfile,
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
    name: 'Florante Sugian III',
    position: 'Owner/CTO',
    src: thirdProfile,
    profile: thirdProfile,
    socialMedia: {
      github: 'https://github.com',
      linkedin: 'https://github.com',
    },
  },
] as const;
