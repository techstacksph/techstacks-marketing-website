'use client';

import Image, { type StaticImageData } from 'next/image';
import { Tabs, TabsContent, TabsList } from '@radix-ui/react-tabs';
import { type TemplateFeatures } from '@/constants/products-templates';
import { Modal } from './ui/modal';
import { ProductFeature } from './product-feature';
import { TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';

interface ProductModalProps {
  open: boolean;
  onClose: () => void;

  features: TemplateFeatures[];
  image: StaticImageData;
  imageMobile: StaticImageData;
}

export function ProductModal({
  open,
  onClose,
  image,
  features,
  imageMobile,
}: ProductModalProps) {
  return (
    <Modal
      className="w-full max-w-6xl mt-16  "
      onClose={onClose}
      open={open}
      title="Website Template"
    >
      <div className="h-[75vh] md:h-[70vh] overflow-y-auto relative ">
        <div className="rounded-sm p-3 md:px-6">
          <Tabs className="space-y-4" defaultValue="desktop">
            <TabsList className=" justify-center flex flex-row gap-2 md:gap-4 bg-transparent">
              <TabsTrigger
                className="text-base  p-2 border border-primary-static data-[state=active]:bg-primary-static data-[state=active]:text-white data-[state=active]:shadow-sm "
                value="desktop"
              >
                Desktop
              </TabsTrigger>
              <TabsTrigger
                className="text-base  p-2 border border-primary-static data-[state=active]:bg-primary-static data-[state=active]:text-white data-[state=active]:shadow-sm "
                value="mobile"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
            <div className="flex items-end gap-2">
              Features:{' '}
              {features.map((feature) => (
                <ProductFeature feature={feature} key={feature} />
              ))}
            </div>
            <TabsContent value="desktop">
              <Image
                alt="product"
                className="w-full object-cover  object-top border-2 shadow-lg rounded-md"
                src={image}
              />
            </TabsContent>
            <TabsContent className="flex justify-center" value="mobile">
              <div className="w-full  max-w-96 md:w-96">
                <Image
                  alt="product"
                  className="w-full object-cover  object-top border-2 shadow-lg rounded-md"
                  src={imageMobile}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="sticky p-5 px-10  z-10 justify-center flex bottom-0">
          <Button className="relative inline-flex  items-center justify-start w-40 p-4 overflow-hidden font-medium transition-all bg-primary-static border-2 rounded  border-primary-static group hover:scale-105 delay-200 shadow-sm shadow-primary">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
            <span className="relative w-full text-center  transition-colors duration-300 ease-in-out text-lg dark:text-white group-hover:text-primary-static dark:group-hover:text-primary">
              Inquire
            </span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
