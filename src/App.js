import "./todo2.0.css"
import { Header } from "./Todo 2.0/Headers";
import { FormTodo } from "./Todo 2.0/FormTodo";
import { useState } from "react";
import { TodoList } from "./Todo 2.0/TodoList";
import { useEffect } from "react";


const App=()=>{

  const initialState=JSON.parse(localStorage.getItem("todos")) || []
  const [input,setInput]=useState('')
  const [todos,setTodos]=useState(initialState)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  
  return(
    <div className="container">
      <div className="app-wrapper">
        <div>
           <Header/>
        </div>
        <div>
          <FormTodo
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div><TodoList todos={todos} setTodos={setTodos}/> </div>
      </div>
    </div>
  )
}

export default App;