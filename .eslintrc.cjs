const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
  ].map((ext) => require.resolve(ext)),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', '__generated__/'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    // For server actions
    '@typescript-eslint/no-misused-promises': 'off',
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./'] }],
  },
  overrides: [
    {
      files: ['**/opengraph-image.tsx', '**/icon.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
        'jsx-a11y/alt-text': 'off',
      },
    },
  ],
};
