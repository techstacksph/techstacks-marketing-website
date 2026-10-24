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
    title: title ? `${title} | Techstacks` : 'Techstacks IT Services Inc',
    description: description
      ? description
      : 'Techstacks IT Services Inc. is a team of developers dedicated to helping clients stand out and harness the power of the web. We create beautiful, user-friendly, fast, and secure websites and web applications designed with purpose. Not affiliated with Techstacks IT Web Development Services (sole proprietorship).',
    applicationName: 'Techstacks IT Services Inc.',
    publisher: 'Techstacks IT Services Inc.',
    metadataBase:
      process.env.NODE_ENV !== 'development'
        ? new URL('https://techstacksph.com/')
        : null,
  };
}
