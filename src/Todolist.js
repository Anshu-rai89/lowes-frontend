
import React, {useContext} from "react";
import TodoComponent from "./Todo";
import { todoListContext } from "./App";


    function TodoListComponent () {
        console.log("TodoListComponent render");
        
        const { state, dispatch } = useContext(todoListContext);
        const { todoList} = state;
        
        if(todoList && todoList.length === 0) {
            return <h3>...todolist is empty. Please add one</h3>
        }

        return (
            <div className="todo-list">
                <ul>
                    {todoList.map((todo)=> {
                       return (
                         <TodoComponent
                           key={todo}
                           todo={todo}
                         />
                       );
                    })}
                </ul>
            </div>
        );
    }

export default React.memo(TodoListComponent);

