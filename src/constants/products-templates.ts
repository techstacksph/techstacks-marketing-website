import { type StaticImageData } from 'next/image';
import {
  websiteTemplate1,
  websiteTemplate2,
  websiteTemplate3,
  websiteTemplate4,
  websiteTemplate5,
  websiteTemplate6,
  websiteTempalte1M,
  websiteTempalte2M,
  websiteTempalte3M,
  websiteTempalte4M,
  websiteTempalte5M,
  websiteTempalte6M,
} from '@/assets/images';

export enum TemplateFeatures {
  Home = 'Home',
  About = 'About',
  Services = 'Services',
  Contact = 'Contacts',
  Features = 'Features',
  Blog = 'Blog',
}

export interface ProductsTemplates {
  title: string;
  image: StaticImageData;
  imageMobile: StaticImageData;
  features: TemplateFeatures[];
}

export const WEBTEMPLATES: ProductsTemplates[] = [
  {
    title: 'web-template-1',
    image: websiteTemplate1,
    imageMobile: websiteTempalte1M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-2',
    image: websiteTemplate2,
    imageMobile: websiteTempalte2M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Blog,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-3',
    image: websiteTemplate3,
    imageMobile: websiteTempalte3M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-4',
    image: websiteTemplate4,
    imageMobile: websiteTempalte4M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-5',
    image: websiteTemplate5,
    imageMobile: websiteTempalte5M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Features,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-6',
    image: websiteTemplate6,
    imageMobile: websiteTempalte6M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-1',
    image: websiteTemplate1,
    imageMobile: websiteTempalte1M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-2',
    image: websiteTemplate2,
    imageMobile: websiteTempalte2M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Blog,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-3',
    image: websiteTemplate3,
    imageMobile: websiteTempalte3M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-1',
    image: websiteTemplate1,
    imageMobile: websiteTempalte1M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-2',
    image: websiteTemplate2,
    imageMobile: websiteTempalte2M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Blog,
      TemplateFeatures.Contact,
    ],
  },
  {
    title: 'web-template-3',
    image: websiteTemplate3,
    imageMobile: websiteTempalte3M,
    features: [
      TemplateFeatures.Home,
      TemplateFeatures.About,
      TemplateFeatures.Services,
      TemplateFeatures.Contact,
      TemplateFeatures.Features,
      TemplateFeatures.Blog,
      TemplateFeatures.About,
    ],
  },
];
