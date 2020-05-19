const STORAGE_KEY = 'vue-todo'
export default  localStoragePlugin = store =>{
    store.subscribe((mutation,{todoList}) =>{
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList))
    })
}