// import { type ContactFormData } from '@/app/contact/@form/form';

import { type ContactFormData } from '@/app/(main)/contact/@form/form';

export function ContactEmailTemplate({
  name,
  email,
  subject,
  message,
  referral,
  subjectExtension,
}: ContactFormData) {
  return (
    <div>
      <p>
        <strong>From: </strong>
        {name} &lt;{email}&gt;
      </p>
      <p>
        <strong>Subject: </strong>
        {subject}
      </p>
      {subjectExtension ? (
        <p>
          <strong>About: </strong>
          {subjectExtension}
        </p>
      ) : null}
      {referral ? (
        <p>
          <strong>Referral: </strong>
          {referral}
        </p>
      ) : null}
      <p>{message}</p>
    </div>
  );
}
