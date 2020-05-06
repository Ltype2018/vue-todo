import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import { Button, Tab, Tabs, Form, Field,Col,Row,CellGroup,Checkbox,CheckboxGroup,Tag } from 'vant'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Form).use(Field).use(Col).use(Row).use(CellGroup)
    .use(CheckboxGroup).use(Checkbox).use(Tag)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
