const { useReducer } = require("react");

const initalState = {
    todoList : []
}


 export function reducer (state = initalState, action) {

      switch(action.type) {
        case "DELETE_TODO":   
        const filtertedTodo = state.todoList.filter(
          (todo) => todo !== action.value
        );

        return {
          todoList: filtertedTodo,
        };

        case "ADD_TODO":
  
          return {
            todoList: [...state.todoList, action.value]
          }
        
        case "ADD_TODOS":
          return {
            todoList: [...state.todoList, ...action.value]
          }

        default:
            return state;
      }
        
}







