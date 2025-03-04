import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier' // Importando o plugin Prettier

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        // Adicione outros globais aqui conforme necessário
      },
    },
  },

  // Configuração do ESLint JS
  pluginJs.configs.recommended,

  // Configuração do TypeScript ESLint
  ...tseslint.configs.recommended,

  // Configuração do React ESLint
  pluginReact.configs.flat.recommended,

  // Desativa a regra de importar React em JSX
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Desativa a regra de importar o React
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Configuração ECMAScript
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020, // Versão do ECMAScript
        sourceType: 'module', // Para permitir importação de módulos
      },
    },
  },

  // Configuração do Prettier
  {
    plugins: {
      prettier: eslintPluginPrettier, // Usando o plugin Prettier corretamente
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // Usa aspas simples
          trailingComma: 'all', // Adiciona vírgula no final
          semi: false, // Não usa ponto e vírgula
          tabWidth: 2, // Largura da tabulação
        },
      ],
    },
  },
]
