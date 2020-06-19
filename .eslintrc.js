module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.test.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
