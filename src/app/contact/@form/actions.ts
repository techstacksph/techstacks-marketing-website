'use server';

import { resend } from '@/lib/resend';
import { EMAIL } from '@/constants/social-media';
import { ContactEmailTemplate } from '@/components/email/contact';
import { type ContactFormData } from './form';

export async function contactAction(formData: ContactFormData) {
  const response = await resend.emails.send({
    from: 'techstacksph.com <techstacksph@resend.dev>',
    to: [EMAIL],
    subject: formData.subject,
    react: ContactEmailTemplate(formData),
  });

  return response;
}
