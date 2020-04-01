import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Menu, Icon, Form, Input, Layout, Button, Checkbox, Spin, Row, Col, Divider, Pagination, PageHeader, List } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Menu)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Input)
Vue.use(Layout)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Spin)
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Pagination)
Vue.use(PageHeader)
Vue.use(List)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
