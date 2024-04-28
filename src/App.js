
import './App.css'
import TodoList from './Todolist';
import { useEffect, useState } from 'react';
import Count from './Count';
import Toast from './Toast';

// It contains a jsx 
function App() {
  const user = {
    name: "Anshu"
  }

  const onChangeHandler = (event)=>  {
    console.log("Value", event.target.value);
    const inputValue = event.target.value;
    setInputTodoValue(inputValue);
  }

  const onClickHandler = (event) => {
    console.log("Add btn is clicked");

    if(inputTodoValue === "") {
      alert("todo is empty");
      return;
    }
    // We want to add the inputElemnet Value to our todo list
    const newTodoList = [...todoList, inputTodoValue];
    // And updates the todolist 

    updateTodoList(newTodoList);
    setInputTodoValue("");
  }


  const deleteTodo = (todo) => {
    console.log("Delete todo", todo);
    const filterTodo = todoList.filter(todoItem => todoItem !==  todo);
    updateTodoList(filterTodo);
  }



  const [inputTodoValue, setInputTodoValue] = useState("")
  const [todoList, updateTodoList] = useState([]);

  console.log("inputTodoValue", inputTodoValue);
   console.log("todoList", todoList);

   async function fetchData() {
     const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
     const data = await resp.json();
     const todos = data.map(todo => todo.title).slice(0, 10);
      updateTodoList(todos);
   }

   // componentDidMount
  useEffect(() => {
    console.log("Useeffect is called");
    fetchData();
    return () => {
      console.log("UI is geting unmounted");
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
         <h2>Todo APP</h2>
        <div className="input-container">
          <input value={inputTodoValue} onChange={onChangeHandler} />
          <button onClick={onClickHandler}>Add</button>
        </div>

        {/* <TodoList name= {"Anshu"}>
          <h2> Todo list compoment </h2>
          </TodoList> */}

        <TodoList todoList={todoList} deleteTodo={deleteTodo} /> 
        
      </div>
    </div>
  );
}

export default App;
