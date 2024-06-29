import type { App } from 'vue'
import FloatingVue from 'floating-vue'
export const setupFloatingVue = (app: App<Element>) => {
  app.use(FloatingVue)
}
