import { type ClassValue, clsx } from 'clsx';
import type { Config } from 'tailwind-merge';
import { extendTailwindMerge, mergeConfigs, validators } from 'tailwind-merge';

const withAnimatedBorder = (prevConfig: Config): Config => {
  const getAny = () => [validators.isAny] as const;

  return mergeConfigs(prevConfig, {
    classGroups: {
      'border-animate': [{ 'border-animate': getAny() }],
      'border-animate.size': [{ 'border-animate-size': getAny() }],
      'border-animate.from': [{ 'border-animate-from': getAny() }],
      'border-animate.to': [{ 'border-animate-to': getAny() }],
      'border-animate.rounded': [{ 'border-animate-rounded': getAny() }],
      'border-animate.state': [{ 'border-animate-state': getAny() }],
      'border-animate.opacity': [{ 'border-animate-opacity': getAny() }],
    },
  });
};

const twMerge = extendTailwindMerge(withAnimatedBorder);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
