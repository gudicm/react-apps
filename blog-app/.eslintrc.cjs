module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript', // Import rules for TypeScript
    'prettier', // Prettier integration
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'import'],
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': 'warn', // Warn about unused variables
    '@typescript-eslint/no-explicit-any': 'off', // Allow use of `any`, adjust as needed
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types for now

    // Import rules
    'import/order': [
      'error',
      {
        groups: [
          'builtin',    // Built-in modules like 'fs' or 'path'
          'external',   // External packages from node_modules
          'internal',   // Internal packages within your project
          ['sibling', 'parent'], // Sibling and parent imports
          'index',      // Index imports
        ],
        'newlines-between': 'always', // Add new lines between different groups
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // React specific rules
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // Optional: React & JSX rules
    'react/prop-types': 'off', // Disable prop-types as we're using TypeScript
  },
};
1