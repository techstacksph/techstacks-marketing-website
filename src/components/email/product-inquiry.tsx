import type { InquiryFormType } from '@/app/(main)/products/inquire/form';

export function ProductInquiryEmailTemplate({
  name,
  email,
  message,
  item,
}: InquiryFormType) {
  return (
    <div>
      <p>
        <strong>From:</strong> {name} &lt;{email}&gt;
      </p>

      <p>
        <strong>About:</strong> Product inquiry for {item.title}
      </p>

      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
