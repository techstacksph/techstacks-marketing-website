import plugin from 'tailwindcss/plugin';

const flattenObject = (
  obj: Record<string, unknown>,
  parentKeys: string[] = [],
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};

  for (const key in obj) {
    if (key === 'DEFAULT') {
      result[parentKeys.join('-')] = obj[key];
    } else if (typeof obj[key] === 'object') {
      const combinedKeys = [...parentKeys, key];
      Object.assign(
        result,
        flattenObject(obj[key] as Record<string, unknown>, combinedKeys),
      );
    } else {
      result[parentKeys.concat(key).join('-')] = obj[key];
    }
  }

  return result;
};

export const borderAnimate = plugin(
  ({ theme, addUtilities, matchUtilities }) => {
    addUtilities({
      '@keyframes borderAnimate': theme('keyframes.borderAnimate'),

      '.border-animate': {
        position: 'relative',

        '&::before': {
          '--border-animate-from': 'currentColor',
          '--border-animate-via': 'currentColor',
          '--border-animate-to': 'currentColor',
          '--border-animate-radius': 'unset',
          zIndex: '-1',
          content: "''",
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          width: 'calc(100% + 2px)',
          height: 'calc(100% + 2px)',
          background:
            'linear-gradient(var(--border-animate-angle, 0deg), var(--border-animate-from), var(--border-animate-via), var(--border-animate-to))',
          animationName: 'borderAnimate',
          animationDuration: '8s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: 'paused',
          opacity: '0',
          transition: '300ms ease-in-out',
          borderRadius: 'var(--border-animate-radius)',
        },

        '&:hover': {
          '&::before': {
            animationPlayState: 'running',
            opacity: '1',
          },
        },
      },
    });

    matchUtilities(
      {
        'border-animate-from': (value) => ({
          '&::before': {
            '--border-animate-from': value as string,
          },
        }),
        'border-animate-via': (value) => ({
          '&::before': {
            '--border-animate-via': value as string,
          },
        }),
        'border-animate-to': (value) => ({
          '&::before': {
            '--border-animate-to': value as string,
          },
        }),
      },
      { values: flattenObject(theme('colors')) },
    );

    matchUtilities(
      {
        'border-animate-rounded': (value) => ({
          '&::before': {
            '--border-animate-radius': value as string,
          },
        }),
      },
      { values: theme('borderRadius') },
    );
  },
  {
    theme: {
      extend: {
        keyframes: {
          borderAnimate: {
            from: {
              '--border-animate-angle': '0deg',
            },
            to: {
              '--border-animate-angle': '360deg',
            },
          },
        },
      },
    },
  },
);
