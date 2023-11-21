import { createFullConfig } from '@importantimport/eslint-config'

// export default await createFullConfig({ ts: { project: ['./tsconfig.json'] } })
export default await createFullConfig({ ts: true })

// .eslintrc.cjs
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:qwik/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2021,
//     project: ['./tsconfig.json'],
//     sourceType: 'module',
//     tsconfigRootDir: __dirname,
//   },
//   plugins: ['@typescript-eslint'],
//   root: true,
//   rules: {
//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/ban-types': 'off',
//     '@typescript-eslint/consistent-type-imports': 'warn',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-empty-function': 'off',
//     '@typescript-eslint/no-empty-interface': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-inferrable-types': 'off',
//     '@typescript-eslint/no-namespace': 'off',
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     '@typescript-eslint/no-this-alias': 'off',
//     '@typescript-eslint/no-unnecessary-condition': 'warn',
//     '@typescript-eslint/no-unused-vars': ['error'],
//     'no-case-declarations': 'off',
//     'no-console': 'off',
//     'prefer-spread': 'off',
//   },
// }
