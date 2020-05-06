const updateUserInfo = (state, {username, userLevel}) =>{ 
    state.userInfo.userLevel = userLevel
    state.userInfo.username = username
}

const updateTodo = (state,todos)=>{
    console.log('cc')
    state.todoList = todos
}
export default {updateUserInfo,updateTodo}