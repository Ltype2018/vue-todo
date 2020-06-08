//axios 封装
import axios from 'axios'
import {Toast} from 'vant'
import {router} from '@/router'
import store from '@/store'



//提示函数
const tip = msg =>{
    Toast({
        message:msg,
        duration:1000,
        forbidClick:true
    })
}

//跳转至登陆页面，登录后返回当前页面
const toLogin = ()=>{
    router.replace({
        path:'/login',
        query:{
            redirect:router.currentRoute.fullPath
        }
    })
}

//请求失败后错误统一处理
const errorHandle = (status, other) =>{
    switch(status){
        case 401: toLogin();
                   break;
        //403token过期，跳转到登陆界面           
        case 403:
            tip('登陆过期');
            store.commit('CLEAR_TOKEN');
            setTimeout(() =>{
                toLogin()
            }, 1000);
            break;
        //404页面不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            console.log(other)
    }
}

//创建axios实例
let instance = axios.create({timeout:5000})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//请求拦截器
instance.interceptors.request.use(
    config =>{
        const token = store.state.token
        if(token){
            config.headers.Authorization = token
        }
        return config  
    },
    error =>Promise.error(error)
)
//响应拦截器
instance.interceptors.response.use(
    res =>res.status ===200 ? Promise.resolve(res) : Promise.reject(res),
    error =>{
        const {response} = error
        if(response){
            //响应码不是2xx
            errorHandle(response.status, response.data.message)
        }else{
            //处理断网和超时情况
            if(!window.navigator.onLine){
                store.commit('changeNetwork', false)
            }else{
                return Promise.reject(error)
            }
        }
    }
)
export default instance