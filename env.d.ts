/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  export default component
}
