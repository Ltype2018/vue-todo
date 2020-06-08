import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
})

 import Home from '@/components/Home'
 import BookMarks  from '@/components/BookMarks'
 import TodoInput from '@/components/TodoInput'

const dynamicRoutes = [
    {
        path: '/',
        redirect: '/todo',
        component: Home,
        children: [{
            path: 'todo',
            component: TodoInput,
            meta: {
                title: '每日清单',
                requireAuth: true
            }
        },
        {
            path: 'bookmarks',
            component: BookMarks,
            meta: {
                title: '书签',
                requireAuth: true
            }

        },
        ]
    },
]


export {dynamicRoutes, router}