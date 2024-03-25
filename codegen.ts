import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/remote-schema.gql',
  documents: './src/**/*.gql',
  generates: {
    './src/types/graphql.gen.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsTypes: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: true,
        },
        scalars: {
          BigInt: 'string',
          ISO8601Date: 'string',
          ISO8601DateTime: 'string',
        },
      },
    },
  },
};

export default config;
