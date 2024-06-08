import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'
import { store } from '@/stores'

export const setupStore = (app: App<Element>) => {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}
