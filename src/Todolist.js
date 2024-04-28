
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }



    // Props are immutable
    render() {
        const { todoList } = this.props;
        console.log("todolist arrat", todoList);

        if(todoList && todoList.length === 0) {
            return <h3>...todolist is empty. Please add one</h3>
        }

        return (
            <div className="todo-list">
                <ul>
                    {todoList.map((todo)=> {
                       return (
                         <Todo
                           key={todo}
                           todo={todo}
                           deleteTodo={this.props.deleteTodo}
                         />
                       );
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;

