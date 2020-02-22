import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Diffcode from '@/components/Diffcode'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/diffcode',
      name: 'Diffcode',
      component: Diffcode
    },
    {
      path:'*',
      redirect:'/diffcode'
    }
  ]
})
