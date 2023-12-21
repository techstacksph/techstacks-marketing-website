import Image from 'next/image';
import {
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
} from '@/assets/images';
import { cn } from '@/utils/cn';

const CAREERIMAGE = [
  {
    id: 1,
    title: 'Image-one',
    imgSrc: ImageOne,
  },
  {
    id: 2,
    title: 'Image-two',
    imgSrc: ImageTwo,
  },
  {
    id: 3,
    title: 'Image-three',
    imgSrc: ImageThree,
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
    <div className="flex justify-center w-full">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center w-full">
          {CAREERIMAGE.map(({ id, imgSrc, title }, index) => (
            <div
              className={cn(
                'w-full max-w-fit  ',
                index % 2 ? 'rotate-12' : '-rotate-12',
              )}
              key={id}
            >
              <Image
                alt={title}
                className="w-full h-auto opacity-80 hover:opacity-100 hover:transition hover:delay-100"
                src={imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
