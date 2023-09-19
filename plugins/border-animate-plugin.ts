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
          '--border-animate-state': 'running',
          '--border-animate-opacity': '1',
          '--border-animate-size': '2px',
          zIndex: '-1',
          content: "''",
          position: 'absolute',
          top: 'calc(-1 * var(--border-animate-size) / 2)',
          left: 'calc(-1 * var(--border-animate-size) / 2)',
          width: 'calc(100% + var(--border-animate-size))',
          height: 'calc(100% + var(--border-animate-size))',
          background: [
            'conic-gradient(from var(--border-animate-angle, 0deg)',
            'var(--border-animate-from) 0%',
            'var(--border-animate-to) 25%',
            'var(--border-animate-from) 50%',
            'var(--border-animate-to) 75%',
            'var(--border-animate-from) 100%)',
          ].join(','),
          animationName: 'borderAnimate',
          animationDuration: '2s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: 'var(--border-animate-state)',
          opacity: 'var(--border-animate-opacity)',
          transition: 'all 150ms ease-in-out',
          borderRadius: 'var(--border-animate-radius)',
        },
      },
    });

    matchUtilities(
      {
        'border-animate-size': (value) => ({
          '&::before': {
            '--border-animate-size': String(value),
          },
        }),
      },
      { values: theme('borderWidth') },
    );

    matchUtilities(
      {
        'border-animate-state': (value) => ({
          '&::before': {
            '--border-animate-state': value,
          },
        }),
      },
      { values: { running: 'running', paused: 'paused' } },
    );

    matchUtilities(
      {
        'border-animate-opacity': (value) => ({
          '&::before': {
            '--border-animate-opacity': String(value),
          },
        }),
      },
      { values: theme('opacity') },
    );

    matchUtilities(
      {
        'border-animate-from': (value) => ({
          '&::before': {
            '--border-animate-from': String(value),
          },
        }),
        'border-animate-to': (value) => ({
          '&::before': {
            '--border-animate-to': String(value),
          },
        }),
      },
      { values: flattenObject(theme('colors')) },
    );

    matchUtilities(
      {
        'border-animate-rounded': (value) => ({
          '&::before': {
            '--border-animate-radius': String(value),
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
