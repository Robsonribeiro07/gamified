module.exports = {
  preset: 'react-native', // Usando preset do React Native para Jest
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest', // Transformando arquivos JS, TS, TSX com Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-navigation)/)', // Permitindo que pacotes do React Native sejam transformados
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Se você estiver utilizando aliases de diretórios
  },
}
