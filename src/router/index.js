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
            title: '首页',
            requiresAuth: true
          }
        },
        {
          path: '/explore',
          name: 'explore',
          component: () => import('@/components/repository/RepositoryList.vue'),
          meta: {
            title: '探索',
            requiresAuth: true
          }
        },
        {
          path: '/:id',
          name: 'repository-detail',
          component: () => import('@/components/repository/RepositoryDetail.vue')
        },
        {
          path: '/comment',
          name: 'comment',
          component: () => import('@/components/comment/Comment.vue'),
          meta: {
            title: 'comment',
            requiresAuth: true
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
          meta: {
            title: '概览',
            requiresAuth: true
          }
        },
        {
          path: '/dashboard/repository',
          name: 'repository',
          component: () => import('@/views/dashboard/Repository.vue'),
          meta: {
            title: '版本库管理',
            requiresAuth: true
          }
        },
        {
          path: '/dashboard/category',
          name: 'category',
          component: () => import('@/views/dashboard/Category.vue'),
          meta: {
            title: '分类管理',
            requiresAuth: true
          }
        },
        {
          path: '/dashboard/comment',
          name: 'comment-manager',
          component: () => import('@/views/dashboard/Comment.vue'),
          meta: {
            title: '评论管理',
            requiresAuth: true
          }
        },
        {
          path: '/dashboard/user-info',
          name: 'user-info',
          component: () => import('@/views/dashboard/UserInfo.vue'),
          meta: {
            title: '个人中心',
            requiresAuth: true
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
        title: 'upload',
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'about',
        requiresAuth: true
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
