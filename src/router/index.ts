import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/FunctionInfo.vue'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  children: [
    {
      path: '/function/:funcName',
      component: Info,
    },
    {
      path: '*',
      component: Home,
    }
  ]},
]

const router = new VueRouter({
  routes
})

export default router
