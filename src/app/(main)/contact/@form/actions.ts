'use server';

import { resend } from '@/lib/resend';
import { ContactEmailTemplate } from '@/components/email/contact';
import { env } from '@/env.mjs';
import { type ContactFormData } from './form';

export async function contactAction(formData: ContactFormData) {
  const response = await resend.emails.send({
    from: 'techstacksph.com <techstacksph@resend.dev>',
    to: [env.RESEND_EMAIL],
    subject: formData.subject,
    react: ContactEmailTemplate(formData),
  });

  return response;
}
