import Mock from 'mockjs'
import Qs from 'qs'
const testUrl = 'http://localhost:8080'
/*
const Home = () => import('@/components/Home')
const BookMarks = () => import('@/components/BookMarks')
const TodoInput = () => import('@/components/TodoInput')
*/
import Home from '@/components/Home'
import BookMarks from '@/components/BookMarks'
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


Mock.mock(`${testUrl}/getRoutes`, 'get', dynamicRoutes)
/**
 *  @param options 参数对象，获取body并将url转换成json格式
 *  响应登录请求，并对请求体作判断
 */
Mock.mock(`${testUrl}/login`, 'post', (options) => {
    let { userName, password } = Qs.parse(options.body)
    if (userName === 'today' && password === 123456) {
        return {
            userName: 'today',
            userRole: 'superMember'
        }
    }else{
        return {
            userName: 'today',
            userRole: 'superMember'
        }
    }
})
