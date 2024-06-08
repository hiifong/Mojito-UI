import type { App } from 'vue'
import { setupStore, setupI18n, setupElementPlus, setupPrimeVue, setupRouter, setupPowerBy } from '@/config'

export const init = (app: App<Element>) => {
  setupStore(app)
  setupI18n(app)
  setupElementPlus(app)
  setupPrimeVue(app)
  setupRouter(app)
  setupPowerBy()
  app.mount('#app')
}
