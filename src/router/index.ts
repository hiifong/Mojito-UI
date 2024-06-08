import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/modules/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  strict: true
})

export default router
