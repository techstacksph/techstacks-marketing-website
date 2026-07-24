'use server';

import { resend } from '@/lib/resend';
import { LedInquiryEmailTemplate } from '@/components/email/led-inquiry';
import { env } from '@/env.mjs';
import { type LedInquiryFormType } from './form';

export async function ledInquiryAction(formData: LedInquiryFormType) {
  const response = await resend.emails.send({
    from: 'techstacksph.com <techstacksph@resend.dev>',
    to: [env.RESEND_EMAIL],
    subject: 'LED Inquiry',
    react: LedInquiryEmailTemplate(formData),
  });

  return response;
}
