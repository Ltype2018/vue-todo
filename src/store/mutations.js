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
export default {updateUserInfo,UPDATETODO}