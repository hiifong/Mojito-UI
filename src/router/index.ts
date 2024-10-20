import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/modules/router'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
