import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/ShopView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/regsiter',
      name: 'regsiter',
      component: () => import('@/views/ResigterView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/components/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const store = useAuthStore()
  if (store.user.uid && to.name === 'regsiter') {
    return { name: 'home' }
  }
  if (!store.user.uid && to.name !== 'regsiter') {
    return { name: 'regsiter' }
  }
})

export default router
