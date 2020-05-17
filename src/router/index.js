import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import BookMarks from '@/components/BookMarks'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/', 
            component:Home
        },
        {
            path:'/bookmarks',
            component:BookMarks
        }
    ]
})

export default router