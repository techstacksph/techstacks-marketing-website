import type { Config } from 'tailwindcss';
import twTypography from '@tailwindcss/typography';
import twAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          static: 'hsl(var(--primary-static))',
          foreground: {
            DEFAULT: 'hsl(var(--primary-foreground))',
            static: 'hsl(var(--primary-foreground-static))',
          },
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          static: 'hsl(var(--secondary-static))',
          foreground: {
            DEFAULT: 'hsl(var(--secondary-foreground))',
            static: 'hsl(var(--secondary-foreground-static))',
          },
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          static: 'hsl(var(--destructive-static))',
          foreground: {
            DEFAULT: 'hsl(var(--destructive-foreground))',
            static: 'hsl(var(--destructive-foreground-static))',
          },
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          static: 'hsl(var(--muted-static))',
          foreground: {
            DEFAULT: 'hsl(var(--muted-foreground))',
            static: 'hsl(var(--muted-foreground-static))',
          },
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          static: 'hsl(var(--accent-static))',
          foreground: {
            DEFAULT: 'hsl(var(--accent-foreground))',
            static: 'hsl(var(--accent-foreground-static))',
          },
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        neutral: {
          600: 'hsl(var(--neutral-600))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        unsteady: {
          '0%': { translate: '0 0' },
          '25%': { translate: '0 -2px' },
          '50%': { translate: '+2px -2px' },
          '75%': { translate: '+2px 0px' },
          '100%': { translate: '0 0' },
        },
        maskFlare: {
          '0%': {
            'mask-image':
              'linear-gradient(60deg, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.4) 50%, rgb(0, 0, 0) 75%)',
            'mask-size': '400%',
            'mask-position': '0px center',
          },
          '100%': {
            'mask-image':
              'linear-gradient(60deg, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.4) 50%, rgb(0, 0, 0) 75%)',
            'mask-size': '400%',
            'mask-position': '100% center',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        unsteady: 'unsteady 2s linear infinite',
        'mask-logo':
          '1.8s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal forwards running maskFlare',
      },
      screens: {
        xs: '320px',
        sm: '376px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'dm-sans': 'var(--font-dm-sans)',
        poppins: 'var(--font-poppins)',
        inter: 'var(--font-inter)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [twAnimate, twTypography],
} satisfies Config;

export default config;
