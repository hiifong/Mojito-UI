import PrimeVue from 'primevue/config'
import type { App } from 'vue'

export const setupPrimeVue = (app: App<Element>) => {
  app.use(PrimeVue)
}
