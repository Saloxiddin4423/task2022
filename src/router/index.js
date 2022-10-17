import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Updete from '../views/Updete.vue'
import AddUser from '../views/AddUser.vue'
import AllEmployees from '../views/AllEmployees.vue'
import Acaunt from '../views/Acaunt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/allEmployees',
      name: 'allEmployees',
      component:AllEmployees
    },
    {
      path: '/updete',
      name: 'updete',
      component: Updete
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: AddUser
    },{
      path: '/acaunt',
      name: 'acaunt',
      component: Acaunt
    }
  ]
})

export default router
