import Vue from 'vue'
import store from '@/store'
import { Image as VanImage } from 'vant'
import { Button, Tab, Tabs, Form, Field, Col, Row,Notify, Tabbar, TabbarItem, CellGroup, Checkbox, CheckboxGroup, Tag, Icon, Sidebar, SidebarItem } from 'vant'
import App from './App.vue'
import './assets/reset.css'
import './mock/mock.js'
import { router } from '@/router'


Vue.config.productionTip = false
Vue.use(Button).use(Tab).use(Tabs).use(Form).use(Field).use(Col).use(Row).use(CellGroup)
  .use(CheckboxGroup).use(Checkbox).use(Tag).use(Tabbar).use(TabbarItem).use(Icon).use(VanImage)
  .use(Sidebar).use(SidebarItem).use(Notify)

//导航守卫判断登录状态，仅在含有meta的路由验证登录
//如果是登录界面，直接next(),防止循环登录

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //判断是否登录
    if(!store.state.user.auth){
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
