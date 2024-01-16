import {
  airaProfile,
  airateam,
  araProfile,
  arateam,
  franzProfile,
  franzteam,
  jayveeProfile,
  jayveeteam,
  kaiProfile,
  kaiteam,
  marcusProfile,
  marcusteam,
  samProfile,
  samteam,
  teamImg1,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
  teamImg6,
  teamImg7,
  teamImg8,
  thirdProfile,
} from '@/assets/images';
import { type StaticImageData } from 'next/image';

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
      title: 'Elevating Tech Skills and Team Harmony.',
      body: "I'm truly thankful for my time with the Techstacks team. It's been an incredible journey that not only deepened my knowledge of the tech I work with but also showed me the ropes of effective teamwork. Being part of this team has been a key player in shaping my professional growth, and I couldn't be happier about it.",
    },
  },
  {
    id: 3,
    name: 'Francis "Franz" Bernardino',
    position: 'Front-end Developer',
    src: teamImg3,
    profile: franzProfile,
    teamGallery: {
      title: 'Crafting Digital Excellence',
      body: "As a front-end developer at Techstacks, I shape our digital presence with seamless interfaces, emphasizing quality and innovation. In our collaborative environment, we value continuous learning, stay current with industry trends, and offer a supportive culture for growth and well-being. Join us in creating outstanding digital experiences reflecting our brand's excellence.",
    },
  },
  {
    id: 4,
    name: 'Sammuel "Sam" Espiritu',
    position: 'Front-end Developer',
    src: teamImg4,
    profile: samProfile,
    teamGallery: {
      title: 'Continuous Learning in Digital Innovation',
      body: "Being a Frontend Developer at TechStacks PH is truly exhilarating. It's more than just coding; it's about shaping the interface of our digital products.",
    },
  },
  {
    id: 5,
    name: 'Frances Kaye "Kai" Albis',
    position: 'Admin Officer',
    src: teamImg5,
    profile: kaiProfile,
    teamGallery: {
      title: 'Streamlining Operations',
      body: 'As an Administrative Officer at TechStacks PH, I oversee and streamline administrative processes, ensuring the smooth and efficient operation of various tasks and contributing to the overall organizational effectiveness.',
    },
  },
  {
    id: 6,
    name: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    src: teamImg6,
    profile: jayveeProfile,
    teamGallery: {
      title: 'Staying Ahead',
      body: 'In the dynamic tech landscape, we remain at the forefront through conference attendance, active participation in workshops, and continuous learning from online courses, underscoring the perpetual nature of our learning journey.',
    },
  },
  {
    id: 7,
    name: 'John Aira Feleo',
    position: 'Back-end Developer',
    src: teamImg7,
    profile: airaProfile,
    teamGallery: {
      title: 'Optimizing Performance',
      body: 'In my role as a backend developer at TechStacks PH, I contribute to the design and implementation of resilient server-side solutions, focusing on effective data management and optimal performance for our digital platforms.',
    },
  },
  {
    id: 8,
    name: 'Ara Belle Agarem',
    position: 'Marketing and SEO Specialist',
    src: teamImg8,
    profile: araProfile,
    teamGallery: {
      title: 'Amplifying Digital Impact',
      body: 'As a marketing and SEO specialist at TechStacks PH, I leverage my expertise to enhance online visibility, optimize search engine rankings, and drive strategic initiatives that amplify our digital presence and outreach.',
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
    name: 'Third',
    position: 'Owner/CTO',
    src: thirdProfile,
    profile: thirdProfile,
    socialMedia: {
      github: 'https://github.com/fmsthird',
      linkedin: 'https://github.com/fmsthird',
    },
  },
] as const;
