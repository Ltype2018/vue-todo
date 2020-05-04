import {toLogin} from '@/api/login'
const v_toLogin = ({commit},data)=>{
    toLogin(data).then(res =>commit('updateUserInfo',res.data))
}



export default {v_toLogin}