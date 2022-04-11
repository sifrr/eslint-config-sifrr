module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    esversion: 2018
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    camelcase: [2, { properties: 'always' }],
    'consistent-return': 'error',
    'no-delete-var': 'error',
    'prefer-const': 'error'
  },
  overrides: [
    {
      files: ['**.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ]
    }
  ]
};
