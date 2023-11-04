import { createRouter, createWebHistory } from 'vue-router'
import V_Home from '../views/V_Home.vue'
import V_Signup from '../views/V_Signup.vue'
import V_Signin from '../views/V_Signin.vue'



const routes = [
  {
    path: '/',
    component: V_Home
  },
  {
    path: '/V_Signup',
    component: V_Signup
  },
  {
    path: '/V_Signin',
    component: V_Signin
  },
  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
