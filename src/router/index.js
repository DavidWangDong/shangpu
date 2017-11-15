import Vue from 'vue'
import Router from 'vue-router'
import preindex from '@/pages/preindex'
import index from '@/pages/index'
import introduce from '@/pages/introduce'
import vote from '@/pages/vote'
import sigletype from '@/pages/sigletype'
import sigle from '@/pages/sigle'
import detail from '@/pages/detail'
import peodetail from '@/components/peodetail'
import comdetail from '@/components/comdetail'
import peoListdetail from '@/components/peoListdetail'
import comListdetail from '@/components/comListdetail'
import paiming from '@/pages/paiming'
import add from '@/pages/addUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'preindex',
      component: preindex
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/vote',
      name: 'vote',
      component: vote
    },
    {
      path: '/sigletype/:type',
      name: 'sigletype',
      component: sigletype
    },
    {
      path: '/sigle',
      name: 'sigle',
      component: sigle
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      children:[
        {path:'/detail/peodetail',component:peodetail},
        { path: '/detail/comdetail', component: comdetail},
        { path: '/detail/comListdetail', component: comListdetail},
        { path: '/detail/peoListdetail', component: peoListdetail},
      ]
    },
    {
      path:'/paiming',
      name:'paiming',
      component: paiming
    },
    {
      path: '/add',
      name: 'add',
      component: add
    }
  ]
})
