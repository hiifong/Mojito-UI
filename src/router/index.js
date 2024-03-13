import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/layout/HomeLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/explore',
          name: 'explore',
          component: () => import('@/components/article/ArticleList.vue'),
          meta: {
            title: '探索'
          }
        },
        {
          path: '/comment',
          name: 'comment',
          component: () => import('@/components/comment/Comment.vue'),
          meta: {
            title: 'comment'
          }
        },
        {
          path: '/todo',
          name: 'todo',
          component: () => import('@/components/todo/Todo.vue'),
          meta: {
            title: 'todo'
          }
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('@/components/article/ArticleList.vue'),
          meta: {
            title: 'list'
          }
        }
      ]
    },
    {
      path: '/dashboard',
      name: '',
      component: () => import('@/layout/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/dashboard/Index.vue'),
          meta: { title: 'dashboard' }
        },
        {
          path: '/dashboard/user-info',
          name: 'user-info',
          component: () => import('@/views/dashboard/UserInfo.vue'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: '/dashboard/user-list',
          name: 'user-list',
          component: () => import('@/views/dashboard/UserList.vue'),
          meta: {
            title: '用户管理',
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/components/GitNoUploadImage.vue'),
      meta: {
        title: 'upload'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'about'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/account/LoginView.vue'),
      meta: {
        title: 'login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/account/RegisterView.vue'),
      meta: {
        title: 'register'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/GitNoNotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
