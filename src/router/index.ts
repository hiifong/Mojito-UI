import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  strict: true
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
