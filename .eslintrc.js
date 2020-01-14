module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: "babel-eslint",
  plugins: ['react-hooks', 'react', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['warn'],
    'react/prop-types': false,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'camelcas': 0
  }
}