import Vue from 'vue'
import store from '@/store'
import {Image as VanImage} from 'vant'
import { Button, Tab, Tabs, Form, Field,Col,Row,Tabbar,TabbarItem,CellGroup,Checkbox,CheckboxGroup,Tag ,Icon,Sidebar,SidebarItem} from 'vant'
import App from './App.vue'
import './assets/reset.css'
import './mock/mock.js'
import {dynamicRoutes,router} from '@/router'


Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Form).use(Field).use(Col).use(Row).use(CellGroup)
    .use(CheckboxGroup).use(Checkbox).use(Tag).use(Tabbar).use(TabbarItem).use(Icon).use(VanImage)
    .use(Sidebar).use(SidebarItem)

//导航守卫判断用户权限
router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requireAuth)) {
      //检查登录状态
      if (!store.state.auth) {
        console.log('login')
          next({ path: '/login' })
      } else {
        //添加动态路由节点
        console.log('midd')
          router.addRoutes(dynamicRoutes)
          next()
      }
  } else {
    console.log('cmn')
    router.addRoutes(dynamicRoutes)
      next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
