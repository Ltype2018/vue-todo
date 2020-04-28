import Vue from 'vue'
import {Button,Tab,Tabs,Form,Field} from 'vant'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Form).use(Field)

new Vue({
  render: h => h(App),
}).$mount('#app')
