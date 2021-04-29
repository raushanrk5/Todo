import React from 'react'

function Todo({ text, todo, todos, setTodos }) {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
                todos.map((item) => {
                if (item.id === todo.id){
                    return {
                        ...item, 
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    }

    return (
        <div className="todo">
            <li className={`todo__item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick ={completeHandler} className="complete__btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash__btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
