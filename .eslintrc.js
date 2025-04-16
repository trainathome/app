module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      jsxSingleQuote: true,
      endOfLine: 'auto',
    }]
  },
};
