import {toLogin,fetchRoutes} from '@/api/login'
const Login = ({commit},data)=>{
    return toLogin(data).then(res =>commit('UPDATE_USERINFO',res.data))
}

const toggleTodo =({commit},todo) =>{
    commit('EDIT_TODO',{todo:todo,done:!todo.done})
}

const editTodo = ({commit}, playload) =>{
    commit('EDIT_TODO',playload)
}
const getRoutes = ({commit}) =>{
    return fetchRoutes().then(res =>{
        console.log(res.data)
        commit('UPDATE_ROUTE',res.data)})
}

export default {Login,getRoutes,toggleTodo,editTodo}