import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Prizes from './Prizes.vue'
import 'animate.css';

const routes = [
  { path: '/', component: Home },
  { path: '/prizes', component: Prizes },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
