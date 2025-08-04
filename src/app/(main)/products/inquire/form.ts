import { z } from 'zod';

export const productsTemplatesSchema = z.object({
  title: z.string(),
  image: z.any(),
  id: z.number(),
  features: z.array(
    z.enum(['Home', 'About', 'Services', 'Contact', 'Features', 'Blog']),
  ),
});

export const inquiryFormSchema = z.object({
  name: z.string().min(1, 'Please enter your name.'),
  email: z.string().email(),
  item: z.object({
    id: z.number(),
    title: z.string(),
    image: z.any(),
    imgsrc: z.string(),
  }),
  message: z.string(),
});

export type InquiryFormType = z.infer<typeof inquiryFormSchema>;
