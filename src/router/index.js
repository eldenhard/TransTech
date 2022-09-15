import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Dislocation from '../views/Dislocation.vue'
import Transp from '../views/Transp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/dislocation',
    name: 'Dislocation',
    component: Dislocation
  },
  {
    path: '/transp',
    name: 'Transp',
    component:Transp
     }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
