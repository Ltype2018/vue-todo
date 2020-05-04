import instance from '@/utils/https'
import base from '@/utils/base'
import Qs from 'qs'

const toLogin = (data)=>instance({
    url:base.login,
    method:'post',
    data:Qs.stringify(data)
}

)
export  {toLogin}