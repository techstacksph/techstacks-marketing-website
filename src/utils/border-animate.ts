import { cva } from 'class-variance-authority';

export const borderAnimateVariants = cva('border-animate', {
  variants: {
    variant: {
      default:
        'border-animate-from-foreground border-animate-via-accent border-animate-to-primary border-animate-rounded-md hover:border-animate-size-8 border-animate-size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
