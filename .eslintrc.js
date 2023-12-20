module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'

  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/triple-slash-reference': 0
  }
}
