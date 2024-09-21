module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'solid', 'jsx-a11y'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  globals: {
    JSX: true
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'arrow-body-style': 'off',
    'jsx-quotes': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off'
  }
};
