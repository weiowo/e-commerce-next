module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended', // Add this line
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn', // Enforce Prettier formatting as an ESLint error
  },
};
