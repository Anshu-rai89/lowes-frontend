import React from "react";

// Stateless Component 
function Todo (props) {
    const { todo, deleteTodo } = props;
    const handleDeleteOnClick = () => {
        deleteTodo(todo);
    }
    return (
      <div className="todo">
        <li>{todo}</li>
        <button onClick={handleDeleteOnClick}>delete</button>
      </div>
    );
}

export default Todo;