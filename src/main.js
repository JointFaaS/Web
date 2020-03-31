import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {Menu, Icon, Form, Input, Layout, Button, Checkbox, Spin, Row, Col, Divider} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

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

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})

new Vue({
	router,
	store,
}).$mount('#app')
