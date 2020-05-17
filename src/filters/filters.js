const filters = {
       all(todo){
          return todo.done == todo.done
       },
       active(todo){
           return todo.done === false
       },
       completed(todo){
           return todo.done === true
       }
}

export default filters