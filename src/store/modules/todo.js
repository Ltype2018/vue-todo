import filters from '@/filters/filters'
const state = {
    todoList: []
}

const getters = {
    filteredTodos: (state) => (active) => state.todoList.filter(filters[active])
}

//actions
const actions = {
    toggleTodo({ commit }, todo) {
        commit('EDIT_TODO', { todo: todo, done: !todo.done })
    },
    editTodo({ commit }, playload) {
        commit('EDIT_TODO', playload)
    },
    signOut({ commit }) {
        commit('SIGN_OUT')
    }
}

//mutations
const mutations = {
    UPDATE_TODO(state, value) {
        console.log('cc')
        state.todoList.push({
            text: value,
            done: false
        })
    },
    //用户todo处理
    EDIT_TODO(state, { todo, done = todo.done, text = todo.text }) {
        todo.text = text
        todo.done = done
    },
    REMOVE_TODO(state, todo) {
        state.todoList.splice(state.todoList.indexOf(todo), 1)
    }
}

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}