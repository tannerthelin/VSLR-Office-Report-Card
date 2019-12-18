import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
      },
    {
      path: '*',
      component: Home
    }
  ]
})