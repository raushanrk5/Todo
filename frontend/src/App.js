import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilterdTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    console.log("hey");
  }, [todos,filter])

  const filterHandler = () => {
    switch(filter) {
      case "completed":
        setFilterdTodos(todos.filter(todo => todo.completed === true));
        break;

      case "uncompleted":
        setFilterdTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilterdTodos(todos);
        break;
    }
  }

  //Save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));

  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
        <header>
          <h1>Raushan's Todo List</h1>
        </header>
        <Form todos = {todos} setTodos = {setTodos} input = {input} setInput = {setInput} setFilter={setFilter}/>
        <TodoList todos = {todos} setTodos = {setTodos} filteredTodos= {filteredTodos}/>
    </div>
  );
}

export default App;
