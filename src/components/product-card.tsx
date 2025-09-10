import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { type TemplateFeatures } from '@/constants/products-templates';
import { Button } from './ui/button';
import { ProductFeature } from './product-feature';
import { GlowCard } from './glow-card';
import { ProductModal } from './products-modal';

interface ProductCardProps {
  title: string;
  features: TemplateFeatures[];
  image: StaticImageData;
  index: number;
  imageMobile: StaticImageData;
  id: number;
}

export function ProductCard({
  title,
  features,
  image,
  imageMobile,
  id,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <GlowCard data-aos="fade-up" data-aos-delay={100}>
      <div className="border h-full flex flex-col w-full hover:shadow-primary-static/2 p-4 rounded-lg shadow hover:shadow-lg hover:shadow-primary-static/20 delay-20 hover:scale-105 hover:border transition-all ease-in-out duration-300 space-y-3">
        <div className="hover:cursor-pointer w-full">
          <Image
            alt={title}
            className="w-full h-48 object-cover object-top border-2 shadow-sm rounded-md"
            src={image}
          />
        </div>
        <div className="text-primary-static font-semibold gap-1 flex items-end flex-wrap">
          <span className="text-md">Features:</span>
          {features.map((feature, index) => (
            // eslint-disable-next-line react/no-array-index-key -- index is fine here
            <ProductFeature feature={feature} key={title + feature + index} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 items-end">
          <Button
            className="items-center w-full border-2"
            onClick={handleOpen}
            variant="outline"
          >
            View
          </Button>
          <Link href={`/products/inquire?item=${encodeURIComponent(id)}`}>
            <Button className="relative inline-flex items-center justify-start w-full p-3 overflow-hidden font-medium transition-all bg-white border rounded dark:bg-transparent border-primary-static group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-static absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out dark:text-white group-hover:text-white dark:group-hover:text-black">
                Inquire
              </span>
            </Button>
          </Link>
        </div>
      </div>

      <ProductModal
        features={features}
        id={id}
        image={image}
        imageMobile={imageMobile}
        onClose={handleClose}
        open={open}
      />
    </GlowCard>
  );
}
