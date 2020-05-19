import {toLogin} from '@/api/login'
const v_toLogin = ({commit},data)=>{
    toLogin(data).then(res =>commit('updateUserInfo',res.data))
}

const toggleTodo =({commit},todo) =>{
    commit('EDITTODO',{todo:todo,done:!todo.done})
}

const editTodo = ({commit}, playload) =>{
    commit('EDITTODO',playload)
}

export default {v_toLogin,toggleTodo,editTodo}