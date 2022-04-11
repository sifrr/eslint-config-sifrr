module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    esversion: 2018,
    jsx: true
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    camelcase: [2, { properties: 'always' }],
    'consistent-return': 'error',
    'no-delete-var': 'error',
    'prefer-const': 'error'
  },
  overrides: [
    {
      files: ['**.ts', '**.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ["@typescript-eslint"],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier']
    }
  ]
};
