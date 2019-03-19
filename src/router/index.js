import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/home/Map'
import Join from '@/components/auth/Join'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map,
    },
    {
      path: '/join',
      name: 'Join',
      component: Join,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})
