import React,{useState} from 'react';
import From from './Form';
import  Todo  from './Todo';
import './App.css';

const App =() =>{

  const [todos, setTodos]= useState([]);
 
  const addTodo =text =>{
    const newTodos=[...todos,{text}];
    setTodos(newTodos);
  }
  
  const deleteTodo=index =>{
    const newTodos =[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div>
      <h1>Hello Hooks!</h1>
      <From addTodo={addTodo} />
    <div>
    {todos.map((todo, index) => (
      <Todo 
       key={index}
       index={index}
       deleteTodo={deleteTodo}
       text={todo.text}
      />
    ))}
    </div>
    </div>
    
  )
}

export default App;
