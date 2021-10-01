module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  ignorePatterns: ['src/generated', 'src/data/loans.json'],
  rules: {
    'import/extensions': ['error', { devDependencies: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'comma-dangle': ['off'],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'no-param-reassign': ['error', { 'props': false }],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/interactive-supports-focus': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
