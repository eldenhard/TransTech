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
import page1 from '../components/news_page/page1'
import page2 from '../components/news_page/page2'
import page3 from '../components/news_page/page3'
import page4 from '../components/news_page/page4'

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
  },
  {
    path: '/news/1',
    name: 'page1',
    component: page1
    }
    ,
    {
      path: '/news/2',
      name: 'page2',
      component: page2
      }
      ,
      {
        path: '/news/3',
        name: 'page3',
        component: page3
        }
        ,
        {
          path: '/news/4',
          name: 'page4',
          component: page4
          }
          ,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
