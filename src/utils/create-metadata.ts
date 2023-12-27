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
      : 'Techstacks - team of developers and designers committed to help our clients stand out and take advantage of the web by creating beautiful, user-friendly, fast, secure, high converting, engaging websites. Building websites with a purpose. Hire us today and accelerate your business growth.',
    metadataBase:
      process.env.NODE_ENV !== 'development'
        ? new URL('https://techstacksph.com/')
        : null,
  };
}
