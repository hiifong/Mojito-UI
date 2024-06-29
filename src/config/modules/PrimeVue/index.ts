import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

export const setupPrimeVue = (app: App<Element>) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    },
    ripple: true
  })
  app.use(ToastService)
}
