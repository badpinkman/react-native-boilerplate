module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app/blueprints': './blueprints',
          '@src/assets': './src/assets',
          '@src/components': './src/components',
          '@src/constants': './src/constants',
          '@src/context': './src/context',
          '@src/hooks': './src/hooks',
          '@src/i18n': './src/i18n',
          '@src/navigation': './src/navigation',
          '@src/screens': './src/screens',
          '@src/services': './src/services',
          '@src/store': './src/store',
          '@src/utils': './src/utils',
        },
        extensions: ['.js', '.json'],
        root: ['./src'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
