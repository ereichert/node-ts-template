module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
