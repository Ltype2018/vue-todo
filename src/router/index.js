import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import BookMarks from '@/components/BookMarks'
import TodoInput from '@/components/TodoInput'
import Progress from '@/components/Progress'
import About from '@/components/About'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/todo',
            component: Home,
            children: [{
                path: 'todo',
                component: TodoInput,
                meta: {
                    title: '每日清单',
                    requiresAuth: true
                }
            },
            {
                path: 'bookmarks',
                component: BookMarks,
                meta: {
                    title: '书签',
                    requiresAuth: true
                }

            },
            {
                path:'progress',
                component:Progress,
                meta:{
                    title:'进度',
                    requiresAuth:true
                }
            },
            {
                path:'about',
                component:About,
                meta:{
                    title:'关于',
                    requiresAuth:true
                }
            }
            ]
        },

    ]
})





export { router }