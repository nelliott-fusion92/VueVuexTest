import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

Vue.use(VueRouter)

const r = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home.vue'),
      meta: {
        nav: true,
        label: 'Home',
      },
    },
    {
      path: '/chuck',
      name: 'chuck',
      component: () => import('../pages/chuck.vue'),
      meta: {
        nav: true,
        label: 'Chuck',
      },
    },
    {
      path: '*',
      name: 'error',
      component: () => import('../pages/error.vue'),
      meta: {
        nav: false,
      },
    },

  ]
})

r.beforeEach(async (to, from, next) => {

  next()

})

export default r
