import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import { Button, Tab, Tabs, Form, Field,Col,Row } from 'vant'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Form).use(Field).use(Col).use(Row)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
