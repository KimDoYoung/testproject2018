import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Index from '@/components/IndexPage'
import Show from '@/components/ShowPage'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path : '/:id',
      name : 'show',
      component : Show
    }
  ]
})
