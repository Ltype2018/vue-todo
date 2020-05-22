import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import filters from '@/filters/filters'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        token:'',
        auth:true,
        userInfo:{
            username:'',
            userLevel:''
        },
        todoList:[],
        newRoute:[]
    },
    getters:{
        filteredTodos:(state) =>(active) =>state.todoList.filter(filters[active])       
    },
    mutations:mutations,
    actions:actions
})

export default store                                                                