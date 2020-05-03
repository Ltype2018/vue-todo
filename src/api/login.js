import instance from '@/utils/https'

const passwordLogin = (name, password) => instance({
    url:'',
    method:'post',
    data:{
        username:name,
        password:password
    }
})

const telLogin = (tel,captcha) => instance({
    url:'',
    method:'post',
    data:{
        tel:tel,
        captcha:captcha
    }
})
export default {passwordLogin, telLogin}