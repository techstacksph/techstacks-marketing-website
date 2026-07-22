import type { LedInquiryFormType } from '@/app/(main)/led/inquire/form';

export function LedInquiryEmailTemplate({
  name,
  contactNumber,
  address,
  email,
  ledType,
  installation,
  installationType,
  notes,
}: LedInquiryFormType) {
  return (
    <div>
      <p>
        <strong>From:</strong> {name} &lt;{email}&gt;
      </p>
      <p>
        <strong>Contact Number:</strong> {contactNumber}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>LED Type:</strong> {ledType}
      </p>
      <p>
        <strong>Installation:</strong> {installation}
      </p>
      {installation === 'Yes' ? (
        <p>
          <strong>Installation Option:</strong> {installationType}
        </p>
      ) : null}
      {notes ? (
        <>
          <p>
            <strong>Additional Notes:</strong>
          </p>
          <p>{notes}</p>
        </>
      ) : null}
    </div>
  );
}
