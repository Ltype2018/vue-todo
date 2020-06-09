import Mock from 'mockjs'
import Qs from 'qs'
const testUrl = 'http://localhost:8080'



/**
 *  @param options 参数对象，获取body并将url转换成json格式
 *  响应登录请求，并对请求体作判断
 */
Mock.mock(`${testUrl}/login`, 'post', (options) => {
    let { userName, password } = Qs.parse(options.body)
    if (userName === 'today' && password === 123456) {
        return {
            userName: 'today',
            userLevel: 'superMember',
            token:'setalljadg'
        }
    }else{
        return {
            userName: 'tomorow',
            userLevel: 'superMember',
            token:'athllaghl'
        }
    }
})

Mock.mock(`${testUrl}/userInfo`, 'get', () => {
        return {
            userName: 'today',
            userLevel: 'superMember',
            token:'setalljadg'
        }
})
