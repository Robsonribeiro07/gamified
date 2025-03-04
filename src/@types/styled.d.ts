// Crie ou modifique o arquivo `styled.d.ts` para adicionar as correções

declare module 'styled-components/native' {
  export interface DefaultTheme {}
  export interface CSSObject {
    [key: string]: string | number
  }
}
