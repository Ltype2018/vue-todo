//用户登陆信息处理
const UPDATE_USERINFO = (state, {userName, userRole}) =>{ 
    state.userInfo.userRole = userRole
    state.userInfo.userName = userName
}

//设置token
const SET_TOKEN = (state,token) =>{
    state.token = token
    window.localStorage.setItem('token', token)
}

//清空token
const CLEAR_TOKEN = (state) =>{
    state.token = ''
    window.localStorage.setItem('token','')
}
//更新路由节点
const UPDATE_ROUTE = (state, newRoute) =>state.newRoute= newRoute

const UPDATE_TODO = (state,value)=>{
    console.log('cc')
    state.todoList.push({
        text:value,
        done:false
    })
}


//用户todo处理
const EDIT_TODO = (state,{todo,done=todo.done,text=todo.text}) =>{
    todo.text = text
    todo.done = done
}
const REMOVE_TODO = (state, todo) =>{
    state.todoList.splice(state.todoList.indexOf(todo), 1)
}
export default {SET_TOKEN,CLEAR_TOKEN,UPDATE_USERINFO,UPDATE_TODO,EDIT_TODO, REMOVE_TODO,UPDATE_ROUTE}