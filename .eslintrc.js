module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'function-paren-newline': 0,
    'no-unused-expressions': 0,
    'array-callback-return': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-param-reassign': 0,
    'no-self-import': 0,
    'import/no-cycle': 0,
    'arrow-body-style': 0,
    'no-alert': 0,
    'prefer-destructuring': 0,
    'max-len': [
      'error',
      {
        code: 160,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'd="([\\s\\S]*?)"',
      },
    ],
    radix: 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'prefer-spread': 0,
    'import/no-extraneous-dependencies': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
