import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Dislocation from '../views/Dislocation.vue'
import Transp from '../views/Transp.vue'
import Team from '../views/Team.vue'

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
  },
  {
    path: '/team',
    name: 'team',
    component:Team
     }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
