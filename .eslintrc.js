module.exports = {
  env: {
    es2021: true,
  },
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.js'],
      env: {
        commonjs: true,
      },
      extends: ['eslint:recommended'],
    },
    {
      files: ['./src/**/*.tsx', './src/**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-hooks', 'import'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/tree/master
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            alphabetize: { order: 'asc', caseInsensitive: true },
            'newlines-between': 'always',
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
