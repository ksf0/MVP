module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'jest', 'prettier'],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    "prettier/prettier": ["error"]
    "camelcase": 'off',
    'react/prop-types': 'off',
  },
}
