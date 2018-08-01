import Vue from 'vue'
import Router from 'vue-router'
import shopingMall from '@/components/pages/shopingMall'
import Register from '@/components/pages/register'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'shopingMall',component: shopingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login}

  ]
})
