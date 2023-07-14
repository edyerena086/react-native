module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
  },
}
