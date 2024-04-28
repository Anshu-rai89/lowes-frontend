import React, { useContext } from "react";
import { todoListContext } from "./App";

// Stateless Component 
function Todo (props) {
    const { todo } = props;
    const {dispatch} = useContext(todoListContext);

    const handleDeleteOnClick = () => {
        dispatch({type: 'DELETE_TODO', value: todo});
    }
    return (
      <div className="todo">
        <li>{todo}</li>
        <button onClick={handleDeleteOnClick}>delete</button>
      </div>
    );
}

export default Todo;