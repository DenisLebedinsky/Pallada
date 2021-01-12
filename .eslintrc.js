module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint', // loads package plugin
    'react-hooks', // enforces Rules of Hooks
  ],
  extends: [
    'eslint:recommended', // built-in ESLint recommended rules
    'plugin:import/recommended', // enables usefull import rules
    'plugin:import/typescript', // allow typescript files for import rules
    'plugin:@typescript-eslint/eslint-recommended', // disables few built-in ESLint rules
    'plugin:@typescript-eslint/recommended', // @typescript-eslint recommended rules from plugin
    'plugin:react/recommended', // react recommended rules
    'plugin:prettier/recommended', // loads recommended prettier rules from plugin and config
    'prettier/@typescript-eslint', // disables rules that conflicts with prettier
    'prettier/react', // disables rules that conflicts with prettier
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect', // necessary by eslint-plugin-react
    },
    'import/resolver': {
      typescript: {
        // use <root>/tsconfig.json for import resolver
        alwaysTryTypes: true,
      },
    },
  },
  // 0 - off, 1 - warn, 2 - error
  rules: {
    'prefer-template': 1,
    'no-param-reassign': 0,
    'no-new-wrappers': 2,
    'no-shadow': [1, { hoist: 'functions' }],
    'eol-last': [1, 'always'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/no-named-as-default': 0,
    'import/default': 0,
    'react/display-name': 0,
    'no-empty-function': 1,
    'no-empty': 1,
    'lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-lonely-if': 2,
    'no-console': [
      1,
      {
        allow: ['error'],
      },
    ],
    'object-shorthand': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin', // import order
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/dynamic-import-chunkname': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 2,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-inferrable-types': [
      2,
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/array-type': [
      2,
      {
        default: 'array',
        readonly: 'array',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
}
