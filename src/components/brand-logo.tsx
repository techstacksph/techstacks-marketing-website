'use client';

import { useTheme } from 'next-themes';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { forwardRef } from 'react';
import { STATIC_IMAGES } from '@/constants/static-files';

type BrandLogoProps = Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'>;

const BrandLogo = forwardRef<HTMLImageElement, BrandLogoProps>((props, ref) => {
  const { resolvedTheme } = useTheme();

  if (resolvedTheme === 'light')
    return (
      <Image
        {...STATIC_IMAGES.techstacksLogoLight}
        {...props}
        alt="Techstacks Logo"
        ref={ref}
      />
    );

  if (resolvedTheme === 'dark')
    return (
      <Image
        {...STATIC_IMAGES.techstacksLogoDark}
        {...props}
        alt="Techstacks Logo"
        ref={ref}
      />
    );

  return null;
});
BrandLogo.displayName = 'brand-logo';

export { BrandLogo };
