import instance from '@/utils/https'
import base from '@/utils/base'
import Qs from 'qs'


/**
 * @param {*} data 提交的登陆参数 
 */
const toLogin = (data)=>instance({
    url:base.login,
    method:'post',
    data:Qs.stringify(data)
})

//获取路由
/*
const fetchRoutes = () =>instance({
    url:base.getRoutes,
    method:'get'
})
*/

//拉取用户信息
const fetchUserInfo = () =>instance({
      url:base.userInfo,
      method:'get'
})

export  {toLogin,fetchUserInfo}