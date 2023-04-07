module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 0,
    'react/jsx-uses-vars': 1,
    'react/display-name': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'no-unexpected-multiline': 'warn',
  },
  settings: {
    react: {
      pragma: 'React',
      version: '15.6.1',
    },
  },
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      parser: 'flow',
    },
    {
      fileInfoOptions: {
        withNodeModules: true,
      },
    },
  ],
};
