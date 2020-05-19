const updateUserInfo = (state, {username, userLevel}) =>{ 
    state.userInfo.userLevel = userLevel
    state.userInfo.username = username
}

const UPDATETODO = (state,value)=>{
    console.log('cc')
    state.todoList.push({
        text:value,
        done:false
    })
}

const EDITTODO = (state,{todo,done=todo.done,text=todo.text}) =>{
    todo.text = text
    todo.done = done
}
const REMOVETODO = (state, todo) =>{
    state.todoList.splice(state.todoList.indexOf(todo), 1)
}
export default {updateUserInfo,UPDATETODO,EDITTODO, REMOVETODO}