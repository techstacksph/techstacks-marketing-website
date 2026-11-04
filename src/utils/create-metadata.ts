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
      : 'Techstacks IT Services Inc. is a technology partner for growing businesses, delivering websites, web applications, automation, cybersecurity, and ongoing support that drive real business results. Not affiliated with Techstacks IT Web Development Services (sole proprietorship).',
    applicationName: 'Techstacks IT Services Inc.',
    publisher: 'Techstacks IT Services Inc.',
    metadataBase:
      process.env.NODE_ENV !== 'development'
        ? new URL('https://techstacksph.com/')
        : null,
  };
}
