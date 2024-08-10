import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import { useAuthStore } from '@/stores/auth'

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
      redirect: { name: 'home' }
    }
  ]
})

// router.beforeEach((to) => {
//   const store = useAuthStore()
//   if (!store.user.uid && to.name !== 'login') {
//     return { name: 'login' }
//   }
 
// })

// router.beforeResolve(async (to, _, next) => {
//   const store = useAuthStore()
//   if (!store.user.uid && (to.name !== 'login' || to.name !== 'regsiter')) {
//     next({ name: to.name })
//   } else if (!store.user.uid && (to.name == 'login' || to.name == 'regsiter')) {
//     next({ name: 'home' })
//   }
// })

export default router
