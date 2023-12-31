import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Comunas from ' ../views/Comunas';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
