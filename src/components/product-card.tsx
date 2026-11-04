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
      <div className="flex h-full w-full flex-col space-y-3 p-4">
        <div className="hover:cursor-pointer w-full">
          <Image
            alt={title}
            className="w-full h-48 object-cover object-top rounded-lg border"
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
          <Button className="w-full" onClick={handleOpen} variant="outline">
            View
          </Button>
          <Button asChild className="w-full">
            <Link href={`/products/inquire?item=${encodeURIComponent(id)}`}>
              Inquire
            </Link>
          </Button>
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
