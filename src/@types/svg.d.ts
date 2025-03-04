// custom.d.ts ou dentro de um arquivo .d.ts qualquer
declare module '*.svg' {
  const content: string
  export default content
}
