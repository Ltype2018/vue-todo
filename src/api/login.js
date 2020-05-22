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

const fetchRoutes = () =>instance({
    url:base.getRoutes,
    method:'get'
})
// 用于测试用户信息是否准确
/*
const getInfo = () =>instance({
      url:base.info,
      method:'get'
})
*/
export  {toLogin,fetchRoutes}