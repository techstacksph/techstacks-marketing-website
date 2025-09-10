'use client';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Loader } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  type ProductsTemplates,
  WEBTEMPLATES,
} from '@/constants/products-templates';
import { H2, H3, Subheading } from '@/components/ui/typography';
import { DotsIcon } from '@/components/icons/dots-icon';
import { Section } from '@/components/default-elements';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { ProductFeature } from '@/components/product-feature';
import { SubmitButton } from '@/components/submit-button';
import { toast } from '@/components/ui/use-toast';
import { actionHandler } from '@/utils/action-handler';
import { Button } from '@/components/ui/button';
import { productInquiryAction } from '../../contact/@form/actions';
import { inquiryFormSchema, type InquiryFormType } from './form';

function InquireContent() {
  const searchParams = useSearchParams();
  const item = searchParams.get('item');
  const [selectedTemplate, setSelectedTemplate] = useState<
    ProductsTemplates | null | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!item) {
      setIsLoading(false);
      setSelectedTemplate(null);
      return;
    }

    setIsLoading(true);
    const parsedId = parseInt(item);

    const found = WEBTEMPLATES.find(
      (template: ProductsTemplates) => template.id === parsedId,
    );

    setSelectedTemplate(found ?? null);
    setIsLoading(false);
  }, [item]);

  const form = useForm<InquiryFormType>({
    resolver: zodResolver(inquiryFormSchema),
    mode: 'onBlur',
    values: {
      name: '',
      email: '',
      item: {
        id: 0,
        title: '',
        image: '',
        imgsrc: '',
      },
      message: '',
    },
  });

  const router = useRouter();
  function handleDoAfter() {
    toast({ title: 'Sent successfully' });
    form.reset();
    router.replace('/products/inquire');
  }

  function handleOnError(err: unknown) {
    if (err instanceof Error) {
      return toast({
        title: err.name,
        description: err.message,
        variant: 'destructive',
      });
    }
    return toast({
      title: 'Unknown error occurred!',
      description: JSON.stringify(err),
      variant: 'destructive',
    });
  }

  let cardHeaderContent;
  if (isLoading) {
    cardHeaderContent = (
      <CardHeader className="flex w-full justify-center h-48">
        <div className=" flex justify-center">
          <Loader className="animate-spin" />
        </div>
      </CardHeader>
    );
  } else if (selectedTemplate) {
    cardHeaderContent = (
      <CardHeader className="gap-2">
        <H3>Web Template</H3>
        <Image
          alt={selectedTemplate.title}
          className="w-full h-56 object-cover object-top border-2 shadow-sm rounded-md"
          src={selectedTemplate.image}
        />
        <div className="text-primary-static font-semibold gap-1 flex items-end flex-wrap">
          <span className="text-md">Features:</span>
          {selectedTemplate.features.map((feature, index) => (
            <ProductFeature
              feature={feature}
              // eslint-disable-next-line react/no-array-index-key -- index is fine here
              key={`${selectedTemplate.title}-${feature}-${index}`}
            />
          ))}
        </div>
      </CardHeader>
    );
  } else {
    cardHeaderContent = (
      <CardHeader className="flex w-full justify-center h-48">
        <div className="text-center space-y-4 flex flex-col">
          <Subheading>Return to products to browse more templates</Subheading>
          <div className="flex justify-center">
            <Button
              className="hover:underline w-fit  my-4 font-semibold"
              type="button"
              variant="outline"
            >
              <a href="/products">Return</a>
            </Button>
          </div>
        </div>
      </CardHeader>
    );
  }

  return (
    <Section className="space-y-8">
      <BreadCrumbs className="self-start">
        <Link href="/products">
          <BreadCrumbItem className="dark:text-white">Products</BreadCrumbItem>
        </Link>
        <BreadCrumbItem>Inquire</BreadCrumbItem>
      </BreadCrumbs>

      <div className="flex flex-col items-center gap-8 my-40">
        <H2 className="text-center">
          <span className="relative inline-block">
            <DotsIcon
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 animate-pulse text-primary-static lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              data-aos="fade-right"
              data-aos-delay={100}
            />
            <span className="relative" data-aos="fade-up" data-aos-delay={100}>
              Product Inquiry
            </span>
          </span>
        </H2>

        <div className="w-full flex justify-center">
          <Card className="flex justify-center w-full max-w-xl">
            <Form {...form}>
              <form
                action={actionHandler(form, productInquiryAction, {
                  doAfter: handleDoAfter,
                  onError: handleOnError,
                  transform: (formData) => ({
                    ...formData,
                    item: {
                      id: Number(selectedTemplate?.id),
                      title: selectedTemplate?.title ?? '',
                      image: selectedTemplate?.image ?? '',
                      imgsrc: selectedTemplate?.imgsrc ?? '',
                    },
                  }),
                })}
                className="w-full"
              >
                {cardHeaderContent}
                <Separator className=" mb-2" />
                <CardContent className="space-y-4 ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[120px] " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center">
                    <SubmitButton className="" variant="secondary">
                      Submit
                    </SubmitButton>
                  </div>
                </CardContent>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default function InquirePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InquireContent />
    </Suspense>
  );
}
