import { z } from 'zod';

export const ledInquiryFormSchema = z
  .object({
    name: z.string().min(1, 'Please enter your full name.'),
    contactNumber: z.string().min(1, 'Please enter your contact number.'),
    address: z.string().min(1, 'Please enter your address.'),
    email: z.string().email('Please enter a valid email address.'),
    scenario: z.enum([
      'Events',
      'Churches',
      'Store Ad',
      'Conference Room',
      'Other',
    ]),
    ledType: z.enum(['Indoor', 'Outdoor', 'Poster Type']),
    installation: z.enum(['Yes', 'No']),
    installationType: z.string().optional(),
    notes: z.string().optional(),
  })
  .superRefine(({ installation, installationType }, ctx) => {
    if (installation === 'Yes' && !installationType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['installationType'],
        message:
          'Please select installation type when installation is requested.',
      });
    }
  });

export type LedInquiryFormType = z.infer<typeof ledInquiryFormSchema>;
