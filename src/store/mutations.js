const updateUserInfo = (state, {username, userLevel}) =>{ 
    state.userInfo.userLevel = userLevel
    state.userInfo.username = username
}


export default {updateUserInfo}