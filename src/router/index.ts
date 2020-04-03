import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/FunctionInfo.vue'
import Home from '@/views/Home.vue'
import NewFunction from '@/views/NewFunction.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/function/:id',
    component: Info
  },
  {
    path: '/newfunction',
    component: NewFunction
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
