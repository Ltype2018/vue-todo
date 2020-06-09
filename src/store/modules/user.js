import {toLogin,fetchUserInfo} from '@/api/login'
//用户信息模块
const state = {
    token: '',
    userInfo: {
        username: '',
        userLevel: '',
        logoImage: ''
    }
}

//actions
const actions = {
    //登录函数
    Login({ commit }, data) {
        return toLogin(data).then(res => {
            commit('UPDATE_USERINFO', res.data)
            commit('SET_TOKEN',res.data.token)
        })
    },
    //退出账号
    signOut({ commit }) {
        commit('SIGN_OUT')
    },
    //获取用户信息
    getUserInfo({commit}){
        fetchUserInfo().then(res => commit('UPDATE_USERINFO',res.data))
    }
}

const mutations = {
    //用户登陆信息处理
    UPDATE_USERINFO(state, { userName, userRole }) {
        state.userInfo.userRole = userRole
        state.userInfo.userName = userName
    },
    //设置token
    SET_TOKEN(state, token) {
        state.token = token
        window.localStorage.setItem('token', token)
    },
    //退出账号
    SIGN_OUT(state) {
        state.username = ''
        state.userLevel = ''
        state.logoImage = ''
        state.token = ''
        window.localStorage.setItem('token', '')
    }
}

export default{
    namespaced:true,
    state,
    actions,
    mutations
}