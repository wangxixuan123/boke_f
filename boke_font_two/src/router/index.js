import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loading from '@/components/loading'
import Contpage from '@/components/Contpage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,

    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
      
    },
    {
      path: '/contpage',
      name: 'Contpage',
      component: Contpage
    }
  ]
})
