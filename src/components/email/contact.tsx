import { type ContactFormData } from '@/app/contact/@form/form';

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
        {name} &gt;{email}&lt;
      </p>
      <p>
        <strong>Subject: </strong>
        {subject}
      </p>
      {subjectExtension ? (
        <p>
          <strong>Subject: </strong>
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
