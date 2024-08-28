module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
    ],
  settings: { 
      react: { 
        version: 'detect' 
      } 
    },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
      ecmaVersion: 'latest', 
      sourceType: 'module' 
    },
  plugins: ['react','react-refresh', 'import'],
  rules: {
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
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
