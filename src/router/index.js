import { createRouter, createWebHistory } from 'vue-router'
import PATHS from './routesMap'

const routes = [
  {
    path: PATHS.HOME,
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () =>
      import(
        /* webpackChunkName: "notFound" */ '../views/notFound/NotFound.vue'
      ),
  },
]

const router = createRouter({
  base: process.env.VUE_APP_BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {})

router.afterEach(async (to, from) => {})

export default router
