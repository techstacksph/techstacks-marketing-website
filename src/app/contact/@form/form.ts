import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
} from '@icons-pack/react-simple-icons';
import { z } from 'zod';

export type ContactFormData = z.infer<typeof contactFormSchema>;

const $SUBJECTS = [
  'Inquire service',
  'Job application',
  'Internship application',
  'Others',
] as const;

export const SUBJECTS = $SUBJECTS.map((name, key) => ({ name, key }));

export const REFERRALS = [
  {
    name: 'Others',
  },
  {
    name: 'Facebook',
    Icon: SiFacebook,
  },
  {
    name: 'Instagram',
    Icon: SiInstagram,
  },
  {
    name: 'LinkedIn',
    Icon: SiLinkedin,
  },
  {
    name: 'X',
    Icon: SiX,
  },
].map((referral, key) => ({ ...referral, key }));

export const contactFormSchema = z
  .object({
    name: z.string().min(1, 'Please enter your name.'),
    email: z.string().email(),
    subject: z.enum($SUBJECTS),
    subjectExtension: z.string().optional(),
    referral: z.string().optional(),
    message: z.string().min(1, 'We would like to know more about your inquiry'),
  })
  .superRefine(({ subject, subjectExtension }, ctx) => {
    if (subject === 'Others' && !subjectExtension) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['subjectExtension'],
        message: 'This field is required',
      });
    }

    if (subject === 'Internship application' && !subjectExtension) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['subjectExtension'],
        message: 'This field is required',
      });
    }
  });
