import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/FunctionInfo.vue'
import Home from '@/views/Home.vue'
import Editor from '@/views/Editor.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/function/:id',
    component: Info
  },
  {
    path: '/newfunction',
    component: Editor
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
