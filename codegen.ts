import { type CodegenConfig } from '@graphql-codegen/cli';
import { env } from './src/env.mjs';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://graphql.datocms.com/': {
      headers: {
        Authorization: `Bearer ${env.DATOCMS_API_KEY}`,
        'X-Exclude-Invalid': 'true',
      },
    },
  },
  documents: ['src/**/*.ts?(x)'],
  generates: {
    './src/__generated__/gql/': {
      preset: 'client',
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
      },
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
