import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import {Image as VanImage} from 'vant'
import { Button, Tab, Tabs, Form, Field,Col,Row,Tabbar,TabbarItem,CellGroup,Checkbox,CheckboxGroup,Tag ,Icon,Sidebar,SidebarItem} from 'vant'
import App from './App.vue'
import './assets/reset.css'
import './mock/mock.js'


Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Form).use(Field).use(Col).use(Row).use(CellGroup)
    .use(CheckboxGroup).use(Checkbox).use(Tag).use(Tabbar).use(TabbarItem).use(Icon).use(VanImage)
    .use(Sidebar).use(SidebarItem)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
