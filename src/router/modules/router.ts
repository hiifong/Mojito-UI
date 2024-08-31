import { i18n } from '@/config/modules/i18n'
import type { RouteRecordRaw } from 'vue-router'

const { t } = i18n.global

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: () => import('@/layout/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/LoginView.vue'),
    meta: {
      title: t('router.login')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/RegisterView.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: t('router.notFound')
    }
  }
]
