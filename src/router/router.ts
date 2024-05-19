import HomeView from '../views/HomeView.vue'
import HomeLayout from '@/layout/HomeLayout.vue'
import AboutView from '@/views/AboutView.vue'
export const routes = [
  {
    path: '/',
    name: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  }
]
