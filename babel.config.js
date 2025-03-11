module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo', // Preset do Expo
      ['nativewind/babel', { jsxImportSource: 'nativewind' }],
      '@babel/preset-typescript', // Adicionando o preset para Typescript
    ],
    plugins: [
      'react-native-reanimated/plugin', // Para lidar com animações no React Native
    ],
  }
}
