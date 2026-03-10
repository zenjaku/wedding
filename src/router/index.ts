import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import HomePage from '@/pages/HomePage.vue'

let isFirstNavigation = true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: async (to, _from, savedPosition) => {
    if (isFirstNavigation) {
      isFirstNavigation = false
      if (!to.hash) return { top: 0, behavior: 'auto' }
    }

    if (savedPosition) return savedPosition

    if (to.hash) {
      await nextTick()
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ],
})

export default router
