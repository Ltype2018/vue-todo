import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userInfo:{
            username:'',
            userLevel:''
        },
        todoList:[]
    },
    getters:{
        allTodos(state){
            return state.todoList
        },
        activeTodos(state){
            return state.todoList.filter((item) =>item.done === false)
        },
        completedTodos(state){
            return state.todoList.filter((item) =>item.done ===true)
        }
    },
    mutations:mutations,
    actions:actions
})

export default store                                                                