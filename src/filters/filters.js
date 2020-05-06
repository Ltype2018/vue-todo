const filters = {
       active(todo){
           return todo.done === false
       },
       completed(todo){
           return todo.done === true
       }
}

export default filters