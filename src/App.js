import React, { useState } from "react";
import "./styles.css";


export default function App() {
  const [todoValue, setTodoValue] = useState('');
  const [todo, setTodo] = useState([
    {
      task: "Mow the yard",
      isComplete: false
    },
    {
      task: "Cook Dinner",
      isComplete: true
    },
    {
      task: "Clean the yard",
      isComplete: false
    }
  ]);

  function addTodo(task) {
    let newTodo = { task: task, isComplete: false }
    setTodo([...todo, newTodo]);
    setTodoValue('');
  };
  function markTodo(i) {
    const todoClone = [...todo]
    todoClone[i].isComplete = !todoClone[i].isComplete;
    setTodo(todoClone)
  };
  function deleteTodo(i) {
    const newestTodo = [...todo];
    newestTodo.splice(i, 1);
    setTodo(newestTodo);
  };

  
  

  return (
    <div className="App">
      <h1>My Todos:</h1>
      <ul>
        {todo.map((t, i) => 
        <li style={{ "text-decoration-line": t.isComplete ? "line-through" : "none" }}>{t.task}
            <button onClick={() => deleteTodo(i)}>Delete
            </button>
            <button 
            onClick={() => markTodo(i)} 
            >Mark Complete</button> 
            </li>)}
      </ul>
      <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <button onClick={() => addTodo(todoValue)}>Add todo</button>
    </div>
  );
}
