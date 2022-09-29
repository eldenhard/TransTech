import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Dislocation from '../views/Dislocation.vue'
import Transp from '../views/Transp.vue'
import team from '../views/Team.vue'
import order_create from '../views/order_create.vue'
import about from '../views/about.vue'
import service from '../views/service.vue'
import job from '../views/job.vue'

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
    component:team
  },
  {
  path: '/order_create',
  name: 'order_create',
  component: order_create
    },
  {
  path: '/about',
  name: 'about',
  component: about
  },
  {
  path: '/service',
  name: 'service',
  component: service
  }
  ,
  {
  path: '/job',
  name: 'job',
  component: job
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
