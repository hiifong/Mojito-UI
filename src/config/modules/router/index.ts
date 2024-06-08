import type { App } from 'vue'
import router from '@/router'

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
