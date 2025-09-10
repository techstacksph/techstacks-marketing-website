import { type Metadata } from 'next';

interface CreateStaticMetadataParams {
  title?: string;
  description?: string;
}

export function createMetadata({
  title,
  description,
}: CreateStaticMetadataParams = {}): Metadata {
  return {
    title: title
      ? `${title} | Techstacks`
      : 'Techstacks IT Web Development Services',
    description: description
      ? description
      : 'Techstacks is a team of developers dedicated to helping clients stand out and harness the power of the web. We create beautiful, user-friendly, fast, and secure websites and web applications designed with purpose. Partner with us today and accelerate your business growth.',
    metadataBase:
      process.env.NODE_ENV !== 'development'
        ? new URL('https://techstacksph.com/')
        : null,
  };
}
