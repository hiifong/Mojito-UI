import type { App } from 'vue'
import { setupStore } from '@/stores'
import { setupI18n } from '@/config/i18n'
import { setupElementPlus } from '@/config/ElementPlus'
import { setupPrimeVue } from '@/config/PrimeVue'
import { setupPowerBy } from '@/config/PowerBy'
import { setupRouter } from '@/router'

export const init = (app: App<Element>) => {
  setupStore(app)
  setupI18n(app)
  setupElementPlus(app)
  setupPrimeVue(app)
  setupRouter(app)
  setupPowerBy()
  app.mount('#app')
}
