import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div className="todo__container">
            <ul className="todo__list">
               {
                   filteredTodos.map(todo => (
                    <Todo todo = {todo} todos = {todos} setTodos = {setTodos} text= {todo.text} />
                   ))
               }
                
            </ul>
        </div>
    )
}

export default TodoList
