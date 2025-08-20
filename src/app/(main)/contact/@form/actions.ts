'use server';

import path from 'node:path';
import fs from 'node:fs';
import { resend } from '@/lib/resend';
import { ContactEmailTemplate } from '@/components/email/contact';
import { env } from '@/env.mjs';
import { ProductInquiryEmailTemplate } from '@/components/email/product-inquiry';
import { type InquiryFormType } from '../../products/inquire/form';
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

export async function productInquiryAction(formData: InquiryFormType) {
  const imagePath = path.resolve(formData.item.imgsrc);

  if (!fs.existsSync(imagePath)) {
    throw new Error('Image file does not exist at the specified path');
  }

  const cid = 'template-image';

  const response = await resend.emails.send({
    from: 'techstacksph.com <techstacksph@resend.dev>',
    to: [env.RESEND_EMAIL],
    subject: 'Product Inquiry',
    react: ProductInquiryEmailTemplate({
      ...formData,
      item: { ...formData.item, imgsrc: `cid:${cid}` },
    }),
    attachments: [
      {
        filename: `${formData.item.title}.png`,
      },
    ],
  });
  return response;
}
