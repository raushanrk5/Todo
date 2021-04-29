import React from 'react'

function Form({input, setInput, todos, setTodos, setFilter}) {
    const inputHandler = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: input,completed: false, id: Math.floor(Math.random()*100)}
        ]);
        setInput('');
    };

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    return (
        <form>
            <input onChange={inputHandler} value = {input} type="text" class="todo__input" />
            <button className="todo__button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter__todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form
