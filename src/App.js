
import './App.css'
import TodoList from './Todolist';
import React, { useEffect, useState, useReducer, useRef } from 'react';
import Count from './Count';
import Toast from './Toast';
import { reducer } from  './reducer';
import { useCounter } from './hooks';


export  const todoListContext = React.createContext([]);

// It contains a jsx 
function App() {
  const user = {
    name: "Anshu"
  }


  const [inputTodoValue, setInputTodoValue] = useState("")
  const [state, dispatch] = useReducer(reducer, { todoList: [] });
  const todoInputRef = useRef(null);
  const [counter, setCounter] = useCounter(0);

  console.log("COunter", counter, setCounter);

  const onChangeHandler = 
    (event) => {
      console.log("Value", event.target.value);
      const inputValue = event.target.value;
      setInputTodoValue(inputValue);
    }

  const onClickHandler =(event) => {
      if (inputTodoValue == "") {
        alert("empty todo");
        return;
      }
       debugger;
      dispatch({ type: "ADD_TODO", value: inputTodoValue });

    }



   async function fetchData() {
     const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
     const data = await resp.json();
     const todos = data.map(todo => todo.title).slice(0, 5);
      dispatch({type: "ADD_TODOS", value: todos})
   }

  //  // componentDidMount
  useEffect( () => {
    console.log("Useeffect is called");
     fetchData();
     
     return ()=> {
      console.log("Unmounted");
     }
  }, []);

 
  useEffect(()=> {
    const inputElement = todoInputRef.current;
     inputElement.focus();
  }, [])

  return (
    <todoListContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="container">
          <h2>Todo APP</h2>
          <div className="input-container">
            <input
              ref={todoInputRef}
              value={inputTodoValue}
              onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>Add</button>
          </div>

          {/* <TodoList name= {"Anshu"}>
          <h2> Todo list compoment </h2>
          </TodoList> */}

          <TodoList />
        </div>
      </div>
    </todoListContext.Provider>
  );
}

export default App;
