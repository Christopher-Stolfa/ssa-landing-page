module.exports = {
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    commonjs: true,
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    // 'eslint:recommended',
    'plugin:react/jsx-runtime',
    // 'plugin:react/recommended',
    // "plugin:prettier/recommended"
  ],
  parserOptions: {
    sourceType: 'module',
  },
};
