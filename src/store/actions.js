import {toLogin} from '@/api/login'
const v_toLogin = ({commit},data)=>{
    toLogin(data).then(res =>commit('updateUserInfo',res.data))
}

const toggleTodo =({commit},todo) =>{
    commit('EDITTODO',{todo:todo,done:!todo.done})
}


export default {v_toLogin,toggleTodo}