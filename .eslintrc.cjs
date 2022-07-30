module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['src/*.tsx', 'src/*.ts'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'error'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'sort-keys-fix',
    'typescript-sort-keys'
  ],
  rules: {
    curly: ['warn', 'multi'],
    'max-len': ['warn', {
      code: 105,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true
    }],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
