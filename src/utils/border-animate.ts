import { cva } from 'class-variance-authority';

export const borderAnimateVariants = cva('border-animate', {
  variants: {
    variant: {
      default:
        'border-animate-from-primary border-animate-to-muted border-animate-rounded-md hover:border-animate-size-8 border-animate-size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
