import parser from '@typescript-eslint/parser'
import globals from 'globals'
import ts from '@typescript-eslint/eslint-plugin'
import qwik from 'eslint-plugin-qwik'

export default [
  'eslint:recommended',
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { '@typescript-eslint': ts, qwik },
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2021,
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      }
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...ts.configs['eslint-recommended'].rules,
      ...qwik.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'prefer-spread': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': ['error']
    }
  }
]
