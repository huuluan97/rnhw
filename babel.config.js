module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src',
          '~screens': './src/screens',
          '~components': './src/components',
          '~utils': './src/utils',
          '~services': './src/services',
          '~data': './src/data',
        },
      },
    ],
  ],
};
