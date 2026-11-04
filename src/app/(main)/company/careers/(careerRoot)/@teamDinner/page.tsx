import Image from 'next/image';
import {
  // ImageOne,
  // ImageTwo,
  // ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
  ImageEight,
} from '@/assets/images';
import { Section } from '@/components/default-elements';

const CAREERIMAGE = [
  {
    id: 1,
    title: 'Image-one',
    imgSrc: ImageEight,
  },
  {
    id: 2,
    title: 'Image-two',
    imgSrc: ImageSix,
  },
  {
    id: 3,
    title: 'Image-three',
    imgSrc: ImageSeven,
  },
  {
    id: 4,
    title: 'Image-four',
    imgSrc: ImageFour,
  },
  {
    id: 5,
    title: 'Image-five',
    imgSrc: ImageFive,
  },
];

export default function TeamDinnerSection() {
  return (
    <div className="w-full bg-surface">
      <Section className="py-12 lg:py-16">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {CAREERIMAGE.map(({ id, imgSrc }) => (
            <li key={id}>
              <Image
                alt="Techstacks team gathering"
                className="aspect-square w-full rounded-xl object-cover"
                sizes="(min-width: 768px) 20vw, 50vw"
                src={imgSrc}
              />
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
