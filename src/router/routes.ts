import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
    },
  ],
})

export default router
