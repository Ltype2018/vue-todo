import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import store from '@/store/index'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
})

//导航守卫判断用户权限
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        //检查登录状态
        if (!store.state.auth) {
            next({ path: '/login' })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router