import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Newsfeed from '../components/Newsfeed.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Newsfeed',
    component: Newsfeed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
